// Secure API client with authentication
import { API_BASE, getApiUrl } from './api';

// Get API credentials from environment variables
const API_KEY = import.meta.env.PUBLIC_API_KEY ?? '';
const API_KEY_HEADER = import.meta.env.PUBLIC_API_KEY_HEADER ?? 'x-api-key';
const ADMIN_EMAIL = import.meta.env.PUBLIC_ADMIN_EMAIL ?? '';
const ADMIN_EMAIL_HEADER = import.meta.env.PUBLIC_ADMIN_EMAIL_HEADER ?? 'x-admin-email';

/**
 * Creates headers object with authentication credentials
 * @returns Headers object with authentication included
 */
export function createAuthHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  // Add API key if provided
  if (API_KEY) {
    headers[API_KEY_HEADER] = API_KEY;
  }

  // Add admin email if provided
  if (ADMIN_EMAIL) {
    headers[ADMIN_EMAIL_HEADER] = ADMIN_EMAIL;
  }

  return headers;
}

/**
 * Securely fetches data from the API with authentication
 * @param endpoint - API endpoint (relative to base URL)
 * @param options - Fetch options (method, headers, body, etc.)
 * @returns Fetch response promise
 */
export async function apiFetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
  const url = getApiUrl(endpoint);
  
  // Merge auth headers with any provided headers
  const authHeaders = createAuthHeaders();
  const mergedHeaders = {
    ...authHeaders,
    ...options.headers || {}
  };

  // Create the final options object
  const fetchOptions: RequestInit = {
    ...options,
    headers: mergedHeaders
  };

  return fetch(url, fetchOptions);
}

/**
 * Helper function for GET requests
 * @param endpoint - API endpoint
 * @returns Response promise
 */
export function apiGet(endpoint: string, options: RequestInit = {}): Promise<Response> {
  return apiFetch(endpoint, {
    method: 'GET',
    ...options
  });
}

/**
 * Helper function for POST requests
 * @param endpoint - API endpoint
 * @param data - Data to send in request body
 * @returns Response promise
 */
export function apiPost(endpoint: string, data: any, options: RequestInit = {}): Promise<Response> {
  return apiFetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options
  });
}

/**
 * Helper function for PUT requests
 * @param endpoint - API endpoint
 * @param data - Data to send in request body
 * @returns Response promise
 */
export function apiPut(endpoint: string, data: any, options: RequestInit = {}): Promise<Response> {
  return apiFetch(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
    ...options
  });
}

/**
 * Helper function for DELETE requests
 * @param endpoint - API endpoint
 * @returns Response promise
 */
export function apiDelete(endpoint: string, options: RequestInit = {}): Promise<Response> {
  return apiFetch(endpoint, {
    method: 'DELETE',
    ...options
  });
}

export default {
  API_BASE,
  createAuthHeaders,
  apiFetch,
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
  getApiUrl
};