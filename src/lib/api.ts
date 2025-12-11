// Utility file for API calls
export const API_BASE = import.meta.env.PUBLIC_API_BASE_URL;

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
    'Accept': 'application/json'
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
 * Builds a full API URL from an endpoint
 * @param endpoint - API endpoint (relative to base URL)
 * @returns Full API URL
 */
export const getApiUrl = (endpoint: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
  return `${API_BASE}/${cleanEndpoint}`;
};

export default {
  API_BASE,
  createAuthHeaders,
  getApiUrl
};