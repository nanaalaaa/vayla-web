import type { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosInstance from "@/share/services/axios";

export const apiCommonService = {
  get: <T, D = unknown>(
    { url, config }: { url: string; config?: AxiosRequestConfig<D> },
  ): Promise<AxiosResponse<T>> => {
    const { params } = config ?? {};
    return axiosInstance.get<T>(url, { params });
  },

  post: <T, D = unknown>(
    { url, config }: { url: string; config?: AxiosRequestConfig<D> },
  ): Promise<AxiosResponse<T>> => {
    const { data, params } = config ?? {};
    return axiosInstance.post<T>(url, data, { params });
  },

  put: <T, D = unknown>(
    { url, config }: { url: string; config?: AxiosRequestConfig<D> },
  ): Promise<AxiosResponse<T>> => {
    const { data, params } = config ?? {};
    return axiosInstance.put<T>(url, data, { params });
  },

  patch: <T, D = unknown>(
    { url, config }: { url: string; config?: AxiosRequestConfig<D> },
  ): Promise<AxiosResponse<T>> => {
    const { data, params } = config ?? {};
    return axiosInstance.patch<T>(url, data, { params });
  },

  delete: <T, D = unknown>(
    { url, config }: { url: string; config?: AxiosRequestConfig<D> },
  ): Promise<AxiosResponse<T>> => {
    const { params } = config ?? {};
    return axiosInstance.delete<T>(url, { params });
  },
};
