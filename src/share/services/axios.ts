import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";

export interface ApiError {
  status: number | null;
  message: string;
  raw: unknown;
}

function normalizeError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const data = error.response.data as { message?: string } | null;
      return {
        status: error.response.status,
        message: data?.message ?? error.message,
        raw: data,
      };
    }
    const isTimeout =
      error.code === "ECONNABORTED" || error.message.includes("timeout");
    return {
      status: null,
      message: isTimeout
        ? "Request timed out. Please try again."
        : "Network error. Please check your connection.",
      raw: error,
    };
  }
  return {
    status: null,
    message: error instanceof Error ? error.message : "An unexpected error occurred.",
    raw: error,
  };
}

function requestInterceptor(
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}

function handleResponseError(error: unknown): never {
  const normalized = normalizeError(error);

  if (axios.isAxiosError(error) && error.response) {
    const { status } = error.response;

    if (status === 401) {
      localStorage.removeItem("auth_token");
      window.location.href = "/login";
    } else if (status === 403) {
      console.warn("[API] 403 Forbidden —", error.config?.url);
    } else if (status >= 500) {
      console.error("[API] Server error:", normalized);
    }
  } else {
    console.error("[API] Network/timeout error:", normalized.message);
  }

  throw normalized;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(requestInterceptor);
axiosInstance.interceptors.response.use(
  (response) => response,
  handleResponseError,
);

export default axiosInstance;
