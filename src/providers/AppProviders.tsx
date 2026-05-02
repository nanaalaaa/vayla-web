import { StrictMode } from "react";
import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <StrictMode>
      {/* scaffold only — no custom QueryClient config yet */}
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {/* ADD FUTURE PROVIDERS HERE: auth, theme, toast, i18n */}
          {children}
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  );
}
