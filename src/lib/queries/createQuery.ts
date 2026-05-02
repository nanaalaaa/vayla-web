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
}

export function createQuery<TData, TPayload = void, TError = Error>(
  config: CreateQueryConfig<TData, TPayload, TError>,
) {
  const { key, fn, defaultOptions } = config;

  return function useCreatedQuery(props?: CreatedQueryProps<TData, TPayload, TError>) {
    const { payload, queryOptions } = props ?? {};
    const queryKey = createQueryKey(key, payload);

    return useQuery<TData, TError, TData, QueryKey>({
      queryKey,
      queryFn: () => fn(payload ?? ({} as TPayload)),
      ...defaultOptions,
      ...queryOptions,
    });
  };
}
