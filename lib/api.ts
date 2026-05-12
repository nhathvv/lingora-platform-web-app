import axios from 'axios';

const rawApiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';
const apiOrigin = rawApiUrl.replace(/\/$/, '').replace(/\/api\/v1$/, '');
const apiBaseURL = `${apiOrigin}/api/v1`;

const api = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const refreshApi = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

let refreshRequest: Promise<void> | null = null;

function redirectToLogin() {
  if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
    window.location.href = '/login';
  }
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;

    if (!original || error.response?.status !== 401 || original._retry) {
      return Promise.reject(error);
    }

    original._retry = true;

    if (!refreshRequest) {
      refreshRequest = refreshApi.post('/auth/refresh').then(() => undefined);
      refreshRequest = refreshRequest.finally(() => {
        refreshRequest = null;
      });
    }

    try {
      await refreshRequest;
      return api(original);
    } catch (refreshError) {
      redirectToLogin();
      return Promise.reject(refreshError);
    }
  },
);

export const googleOAuthUrl = `${apiOrigin}/api/v1/auth/google`;

export default api;
