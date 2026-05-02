import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

export function createMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  defaultOptions?: Partial<UseMutationOptions<TData, Error, TVariables>>,
) {
  return function useCreatedMutation(
    options?: Partial<UseMutationOptions<TData, Error, TVariables>>,
  ) {
    return useMutation({
      mutationFn,
      ...defaultOptions,
      ...options,
    });
  };
}
