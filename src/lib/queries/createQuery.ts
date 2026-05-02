import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import type { QueryKey, UseQueryOptions } from "@tanstack/react-query";

export function createQueryKey(key: string, payload?: unknown): QueryKey {
  if (payload === undefined) return [key];
  return [key, JSON.stringify(payload)];
}

export interface CreateQueryConfig<TData, TPayload = void, TError = Error> {
  key: string;
  fn: (payload: TPayload) => Promise<TData>;
  defaultOptions?: Omit<
    UseQueryOptions<TData, TError, TData, QueryKey>,
    "queryKey" | "queryFn"
  >;
}

export interface CreatedQueryProps<TData, TPayload, TError = Error> {
  payload?: TPayload;
  queryOptions?: Omit<
    UseQueryOptions<TData, TError, TData, QueryKey>,
    "queryKey" | "queryFn"
  >;
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
}

export function createQuery<TData, TPayload = void, TError = Error>(
  config: CreateQueryConfig<TData, TPayload, TError>,
) {
  const { key, fn, defaultOptions } = config;

  return function useCreatedQuery(props?: CreatedQueryProps<TData, TPayload, TError>) {
    const { payload, queryOptions, onSuccess, onError } = props ?? {};
    const queryKey = createQueryKey(key, payload);

    const onSuccessRef = useRef(onSuccess);
    const onErrorRef = useRef(onError);
    onSuccessRef.current = onSuccess;
    onErrorRef.current = onError;

    const query = useQuery<TData, TError, TData, QueryKey>({
      queryKey,
      queryFn: () => fn(payload ?? ({} as TPayload)),
      ...defaultOptions,
      ...queryOptions,
    });

    useEffect(() => {
      if (query.isSuccess) {
        onSuccessRef.current?.(query.data as TData);
      }
    }, [query.isSuccess, query.data]);

    useEffect(() => {
      if (query.isError && query.error != null) {
        onErrorRef.current?.(query.error);
      }
    }, [query.isError, query.error]);

    return query;
  };
}
