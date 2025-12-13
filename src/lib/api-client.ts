// src/lib/api-client.ts
import { getApiUrl, API_BASE } from "./api";

const API_KEY = import.meta.env.PUBLIC_API_KEY ?? "";
const API_KEY_HEADER = import.meta.env.PUBLIC_API_KEY_HEADER ?? "x-api-key";
const ADMIN_EMAIL = import.meta.env.PUBLIC_ADMIN_EMAIL ?? "";
const ADMIN_EMAIL_HEADER =
  import.meta.env.PUBLIC_ADMIN_EMAIL_HEADER ?? "x-admin-email";

function buildHeaders(extra?: HeadersInit) {
  const h = new Headers(extra);

  if (!h.has("Accept")) h.set("Accept", "application/json");

  if (API_KEY) h.set(API_KEY_HEADER, API_KEY);
  if (ADMIN_EMAIL) h.set(ADMIN_EMAIL_HEADER, ADMIN_EMAIL);

  return h;
}

export async function apiFetch(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const url = getApiUrl(endpoint);
  const headers = buildHeaders(options.headers);

  return fetch(url, { ...options, headers });
}

export function apiGet(endpoint: string, options: RequestInit = {}) {
  return apiFetch(endpoint, { ...options, method: "GET" });
}

export function apiPost(endpoint: string, data: any, options: RequestInit = {}) {
  const headers = buildHeaders(options.headers);
  if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json");

  return apiFetch(endpoint, {
    ...options,
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });
}

export function apiPut(endpoint: string, data: any, options: RequestInit = {}) {
  const headers = buildHeaders(options.headers);
  if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json");

  return apiFetch(endpoint, {
    ...options,
    method: "PUT",
    headers,
    body: JSON.stringify(data),
  });
}

export function apiDelete(endpoint: string, options: RequestInit = {}) {
  return apiFetch(endpoint, { ...options, method: "DELETE" });
}

export default {
  API_BASE,
  getApiUrl,
  apiFetch,
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
};
