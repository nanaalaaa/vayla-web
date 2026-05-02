import { createRoot } from "react-dom/client";
import { FlashScreen } from "@/share/components/FlashScreen";
import { AppProviders } from "@/providers/AppProviders";
import { ErrorBoundary } from "@/share/components/ErrorBoundary";
import AppV2 from "./AppV2";

export async function bootstrap() {
  const root = createRoot(document.getElementById("root")!);

  root.render(<FlashScreen />);

  await runSetup();

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

async function runSetup(): Promise<void> {}
