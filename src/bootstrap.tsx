import { createRoot } from "react-dom/client";
import { FlashScreen } from "@/share/components/FlashScreen";
import { AppProviders } from "@/providers/AppProviders";
import { ErrorBoundary } from "@/share/components/ErrorBoundary";
import AppV2 from "./AppV2";

export async function bootstrap() {
  const root = createRoot(document.getElementById("root")!);

  // Step 1: Render flash screen immediately
  root.render(<FlashScreen />);

  // Step 2: Run async setup before app mounts
  await runSetup();

  // Step 3: Replace flash screen with real app after 500ms
  setTimeout(() => {
    root.render(
      <AppProviders>
        <ErrorBoundary>
          <AppV2 />
        </ErrorBoundary>
      </AppProviders>,
    );
  }, 500);
}

async function runSetup(): Promise<void> {
  // TODO: load remote config
  // TODO: init auth session
  // TODO: init i18n
  // TODO: init feature flags
}
