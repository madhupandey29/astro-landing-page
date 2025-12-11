// Example of how to use the API utility in your frontend components
import { API_BASE, getApiUrl } from './api';

// Example 1: Using the base URL directly
export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE}/product`, {
    headers: { Accept: 'application/json' }
  });
  return response.json();
};

// Example 2: Using the helper function
export const fetchProductById = async (id: string) => {
  const url = getApiUrl(`/product/${id}`);
  const response = await fetch(url, {
    headers: { Accept: 'application/json' }
  });
  return response.json();
};

// Example 3: For POST requests
export const submitContactForm = async (formData: Record<string, unknown>) => {
  const url = getApiUrl('/contacts');
  const response = await fetch(url, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(formData)
  });
  return response.json();
};