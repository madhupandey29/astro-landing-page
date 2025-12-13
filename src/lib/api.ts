// src/lib/api.ts

export const API_BASE = String(import.meta.env.PUBLIC_API_BASE_URL || "").replace(
  /\/+$/,
  ""
);

/**
 * Build a full API URL from:
 * - absolute URL (returns as-is)
 * - relative endpoint like "officeinformation" or "seo?path=/..."
 */
export function getApiUrl(endpoint: string): string {
  const ep = String(endpoint || "").trim();
  if (!ep) return API_BASE;

  // Already absolute
  try {
    return new URL(ep).toString();
  } catch {
    // continue
  }

  // If API_BASE missing, return something usable (won't crash build)
  if (!API_BASE) {
    return ep.startsWith("/") ? ep : `/${ep}`;
  }

  const clean = ep.replace(/^\/+/, "");
  return `${API_BASE}/${clean}`;
}
