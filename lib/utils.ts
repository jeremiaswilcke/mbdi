import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Merge WP repeatable items with fallback items per-position and per-field.
 * - WP values take precedence over fallback values
 * - Empty/missing WP fields fall back to the corresponding fallback field
 * - Extra fallback items (if WP has fewer) are kept
 * - Extra WP items (if WP has more) are kept
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mergeItems<T>(wpItems: unknown, fallbackItems: T[]): T[] {
    // Try to extract array from WP data (handles both direct arrays and {items: []} wrappers)
    const wp = Array.isArray(wpItems)
        ? wpItems
        : wpItems && typeof wpItems === "object" && "items" in (wpItems as Record<string, unknown>)
            ? (wpItems as { items: unknown[] }).items
            : null;

    if (!Array.isArray(wp) || wp.length === 0) return fallbackItems;

    const maxLen = Math.max(wp.length, fallbackItems.length);
    const merged: T[] = [];

    for (let i = 0; i < maxLen; i++) {
        if (i < wp.length && i < fallbackItems.length) {
            // Both exist: fallback first, then WP overwrites non-empty fields
            const item = { ...fallbackItems[i] } as Record<string, unknown>;
            const wpItem = wp[i] as Record<string, unknown>;
            for (const [key, val] of Object.entries(wpItem)) {
                if (val !== undefined && val !== null && val !== "") {
                    item[key] = val;
                }
            }
            merged.push(item as T);
        } else if (i < wp.length) {
            merged.push(wp[i] as T);
        } else {
            merged.push(fallbackItems[i]);
        }
    }

    return merged;
}
