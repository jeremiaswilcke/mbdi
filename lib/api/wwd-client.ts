// ===== WordPress WWD API Types =====

export interface WWDImage {
  id: number;
  url: string;
  alt: string;
  title: string;
  width?: number;
  height?: number;
}

export interface WWDHero {
  hero_title: string;
  hero_description: string;
  hero_image?: WWDImage;
  livestream_url?: string;
  fallback_video_url?: string;
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
  size: "small" | "medium" | "large";
}

export interface WWDAudioguideStation {
  station_title: string;
  description?: string;
  audio_file?: string;
  image?: WWDImage;
}

export interface WWDChurchHistory {
  title: string;
  description: string;
  image?: WWDImage;
  cta_text?: string;
  cta_link?: string;
}

export interface WWDMovement {
  title: string;
  description: string;
  workshop_cta_text?: string;
  workshop_cta_link?: string;
  info_cta_text?: string;
  info_cta_link?: string;
}

export interface WWDTeamArea {
  title: string;
  description?: string;
  icon?: string;
}

export interface WWDTeamRecruitment {
  title: string;
  description: string;
  areas: WWDTeamArea[];
  cta_text?: string;
  cta_link?: string;
}

export interface WWDDonation {
  donation_title: string;
  donation_description: string;
  donation_goal: number;
  donation_current: number;
  donation_link?: string;
}

export interface WWDPageHome {
  sections: {
    hero: WWDHero;
    bento_grid: WWDBentoCard[];
    audioguide: WWDAudioguideStation[];
    church_history: WWDChurchHistory;
    movement: WWDMovement;
    team_recruitment: WWDTeamRecruitment;
    donation: WWDDonation;
  };
}

export interface WWDPageGeneric {
  title: string;
  content: string;
  hero_image?: WWDImage;
  sections?: Record<string, unknown>;
}

// ===== API Client =====

const API_BASE = process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://www.mariabrunn.at";

async function fetchWWD<T>(endpoint: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}/wp-json/wwd/v1${endpoint}`, {
      next: { revalidate: 60 },
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      console.error(`WWD API [${res.status}]: ${endpoint}`);
      return null;
    }
    return res.json();
  } catch (error) {
    console.error(`WWD API error on ${endpoint}:`, error);
    return null;
  }
}

export const wwdClient = {
  getPage: <T>(slug: string) => fetchWWD<T>(`/page/${slug}`),
  getSettings: () => fetchWWD<Record<string, unknown>>("/settings/site_settings"),
  getCPT: async <T>(postType: string): Promise<T[]> => {
    try {
      const res = await fetch(`${API_BASE}/wp-json/wp/v2/${postType}?per_page=100`, {
        next: { revalidate: 60 },
      });
      if (!res.ok) return [];
      return res.json();
    } catch {
      return [];
    }
  },
};
