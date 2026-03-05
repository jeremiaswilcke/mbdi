export interface YouTubeVideoInfo {
    id: string;
    title: string;
    thumbnailUrl: string;
    publishedAt: string;
    isLive: boolean;
}

export async function getLatestVideos(): Promise<{
    liveStream: YouTubeVideoInfo | null;
    latestVod: YouTubeVideoInfo | null;
}> {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

    if (!API_KEY || !CHANNEL_ID) {
        console.error("YouTube API Key or Channel ID missing.");
        return { liveStream: null, latestVod: null };
    }

    try {
        // 1. Check for active Livestreams
        const liveRes = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`,
            { next: { revalidate: 60 } } // Check every minute for live status
        );

        const liveData = await liveRes.json();
        let liveStream: YouTubeVideoInfo | null = null;
        let fallbackVod: YouTubeVideoInfo | null = null;

        if (liveData.items && liveData.items.length > 0) {
            const item = liveData.items[0];
            liveStream = {
                id: item.id.videoId,
                title: item.snippet.title,
                thumbnailUrl: item.snippet.thumbnails.high.url,
                publishedAt: item.snippet.publishedAt,
                isLive: true,
            };
        }

        // 2. Get latest normal VODs (excluding the livestream if any)
        const recentRes = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&type=video&maxResults=3&key=${API_KEY}`,
            { next: { revalidate: 3600 } } // Cache VODs for 1 hour
        );

        const recentData = await recentRes.json();
        let latestVod: YouTubeVideoInfo | null = null;

        if (recentData.items) {
            // Find the first video that is NOT currently live
            const vodItem = recentData.items.find(
                (item: any) => item.snippet.liveBroadcastContent === "none"
            );

            if (vodItem) {
                latestVod = {
                    id: vodItem.id.videoId,
                    title: vodItem.snippet.title,
                    thumbnailUrl: vodItem.snippet.thumbnails.high.url,
                    publishedAt: vodItem.snippet.publishedAt,
                    isLive: false,
                };
            } else if (recentData.items.length > 0 && !liveStream) {
                // Fallback if APIs are weird
                fallbackVod = {
                    id: recentData.items[0].id.videoId,
                    title: recentData.items[0].snippet.title,
                    thumbnailUrl: recentData.items[0].snippet.thumbnails.high.url,
                    publishedAt: recentData.items[0].snippet.publishedAt,
                    isLive: false,
                };
            }
        }

        // Always prefer the correct VOD, if not use fallback
        return {
            liveStream,
            latestVod: latestVod || fallbackVod
        };

    } catch (error) {
        console.error("Failed to fetch YouTube data:", error);
        return { liveStream: null, latestVod: null };
    }
}
