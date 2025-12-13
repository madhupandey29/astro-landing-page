// src/lib/api.ts
export const API_BASE = String(import.meta.env.PUBLIC_API_BASE_URL || "").replace(/\/+$/, "");

export function buildHeaders(extra: Record<string, string> = {}) {
  const headers: Record<string, string> = { Accept: "application/json", ...extra };

  const apiKey = import.meta.env.PUBLIC_API_KEY;
  const apiKeyHeader = import.meta.env.PUBLIC_API_KEY_HEADER || "x-api-key";

  const adminEmail = import.meta.env.PUBLIC_ADMIN_EMAIL;
  const adminEmailHeader = import.meta.env.PUBLIC_ADMIN_EMAIL_HEADER || "x-admin-email";

  if (apiKey) headers[apiKeyHeader] = String(apiKey);
  if (adminEmail) headers[adminEmailHeader] = String(adminEmail);

  return headers;
}

export function apiUrl(path: string) {
  const p = String(path || "").replace(/^\/+/, "");
  if (!API_BASE) return `/${p}`; // fallback (won't work for protected APIs)
  return `${API_BASE}/${p}`;
}

export async function apiGet(path: string, init: RequestInit = {}) {
  return fetch(apiUrl(path), {
    method: "GET",
    ...init,
    headers: {
      ...buildHeaders(),
      ...(init.headers as Record<string, string> | undefined),
    },
  });
}
