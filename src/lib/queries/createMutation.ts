import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

export interface CreateMutationConfig<TVariables, TData, TError = Error> {
  key?: string;
  fn: (variables: TVariables) => Promise<TData>;
  defaultOptions?: Omit<
    UseMutationOptions<TData, TError, TVariables>,
    "mutationFn" | "mutationKey"
  >;
  onSuccess?: UseMutationOptions<TData, TError, TVariables>["onSuccess"];
  onError?: UseMutationOptions<TData, TError, TVariables>["onError"];
}

type SuccessHandler<TData, TError, TVariables> = NonNullable<
  UseMutationOptions<TData, TError, TVariables>["onSuccess"]
>;

type ErrorHandler<TData, TError, TVariables> = NonNullable<
  UseMutationOptions<TData, TError, TVariables>["onError"]
>;

function mergeOnSuccess<TData, TError, TVariables>(
  ...handlers: Array<SuccessHandler<TData, TError, TVariables> | undefined>
): SuccessHandler<TData, TError, TVariables> | undefined {
  const defined = handlers.filter(
    (h): h is SuccessHandler<TData, TError, TVariables> => h != null,
  );
  if (defined.length === 0) return undefined;
  if (defined.length === 1) return defined[0];
  return (data, variables, onMutateResult, context) => {
    let chain: Promise<unknown> = Promise.resolve();
    for (const h of defined) {
      chain = chain.then(() => h(data, variables, onMutateResult, context));
    }
    return chain;
  };
}

function mergeOnError<TData, TError, TVariables>(
  ...handlers: Array<ErrorHandler<TData, TError, TVariables> | undefined>
): ErrorHandler<TData, TError, TVariables> | undefined {
  const defined = handlers.filter(
    (h): h is ErrorHandler<TData, TError, TVariables> => h != null,
  );
  if (defined.length === 0) return undefined;
  if (defined.length === 1) return defined[0];
  return async (error, variables, onMutateResult, context) => {
    let firstThrown: unknown;
    let didThrow = false;
    for (const h of defined) {
      try {
        await h(error, variables, onMutateResult, context);
      } catch (e) {
        if (!didThrow) {
          firstThrown = e;
          didThrow = true;
        }
      }
    }
    if (didThrow) throw firstThrown;
  };
}

export function createMutation<TVariables, TData, TError = Error>(
  config: CreateMutationConfig<TVariables, TData, TError>,
) {
  const { key, fn, defaultOptions, onSuccess: configOnSuccess, onError: configOnError } =
    config;

  return function useCreatedMutation(
    options?: Omit<
      UseMutationOptions<TData, TError, TVariables>,
      "mutationFn" | "mutationKey"
    >,
  ) {
    const {
      onSuccess: optionsOnSuccess,
      onError: optionsOnError,
      ...optionsRest
    } = options ?? {};

    const {
      onSuccess: defaultOnSuccess,
      onError: defaultOnError,
      ...defaultRest
    } = defaultOptions ?? {};

    const onSuccess = mergeOnSuccess(
      defaultOnSuccess,
      configOnSuccess,
      optionsOnSuccess,
    );
    const onError = mergeOnError(
      defaultOnError,
      configOnError,
      optionsOnError,
    );

    return useMutation<TData, TError, TVariables>({
      mutationFn: fn,
      ...(key ? { mutationKey: [key] } : {}),
      ...defaultRest,
      ...optionsRest,
      ...(onSuccess ? { onSuccess } : {}),
      ...(onError ? { onError } : {}),
    });
  };
}
