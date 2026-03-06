export interface WWDImage {
    id: number;
    url: string;
    alt: string;
    title: string;
    width?: number;
    height?: number;
}

export interface WWDHero {
    title: string;
    subtitle?: string;
    background_image?: WWDImage;
    display_mode: 'livestream' | 'video';
    livestream_url?: string;
    video_thumbnail?: WWDImage;
    primary_cta_text?: string;
    primary_cta_link?: string;
    secondary_cta_text?: string;
    secondary_cta_link?: string;
}

export interface WWDBentoCard {
    title: string;
    description?: string;
    image?: WWDImage;
    link?: string;
    layout_size: 'small' | 'medium' | 'large';
}

export interface WWDPageHome {
    sections: {
        hero: WWDHero;
        bento_grid: WWDBentoCard[];
    };
}

export interface WWDPageKirche {
    sections: {
        audioguide: Array<{
            station_title: string;
            description?: string;
            image?: WWDImage;
            audio_file?: string;
        }>;
    };
}

const API_BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://www.mariabrunn.at';

async function fetchFromWWD<T>(endpoint: string): Promise<T | null> {
    // In a robust implementation, this connects to the actual WP endpoint.
    // Next.js ISR requires fetching with next revalidate
    try {
        const res = await fetch(`${API_BASE_URL}/wp-json/wwd/v1${endpoint}`, {
            next: { revalidate: 60 },
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            console.error(`WWD API Error [${res.status}]: Failed to fetch ${endpoint}`);
            return null;
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(`WWD API Fetch Exception on ${endpoint}:`, error);
        return null;
    }
}

export const wwdClient = {
    getPage: async <T>(slug: string): Promise<T | null> => {
        // For now, if the API isn't live we can return fallback or actual fetch.
        return fetchFromWWD<T>(`/page/${slug}`);
    },

    getSettings: async () => {
        return fetchFromWWD<any>(`/settings/site_settings`);
    },

    getCPT: async <T>(postType: string): Promise<T[]> => {
        // Standard WP query for custom post types
        try {
            const res = await fetch(`${API_BASE_URL}/wp-json/wp/v2/${postType}?per_page=100`, {
                next: { revalidate: 60 },
            });
            if (!res.ok) return [];
            return res.json();
        } catch {
            return [];
        }
    }
};
