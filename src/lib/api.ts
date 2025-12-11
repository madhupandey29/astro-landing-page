// Utility file for API calls
export const API_BASE = import.meta.env.PUBLIC_API_BASE_URL;

export const getApiUrl = (endpoint: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
  return `${API_BASE}/${cleanEndpoint}`;
};

export default {
  API_BASE,
  getApiUrl
};