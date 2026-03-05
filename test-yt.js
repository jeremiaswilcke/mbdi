// @ts-check
require('dotenv').config({ path: '.env.local' });

async function testYouTube() {
    console.log("Starting test...");
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

    if (!API_KEY || !CHANNEL_ID) {
        console.error("Missing keys!");
        return;
    }

    try {
        const liveRes = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`
        );
        const liveData = await liveRes.json();
        console.log("Live Results:");
        console.log(JSON.stringify(liveData, null, 2));

        const recentRes = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&type=video&maxResults=3&key=${API_KEY}`
        );
        const recentData = await recentRes.json();
        console.log("Recent Results:");
        console.log(JSON.stringify(recentData, null, 2));

    } catch (err) {
        console.error("Error:", err);
    }
}

testYouTube();
