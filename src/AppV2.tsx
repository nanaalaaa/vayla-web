import type { ComponentType } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { DashboardLayoutV2 } from "./components/layout/DashboardLayoutV2";
import { routes, PAGE_ID_TO_PATH } from "./routes";
import type { PageId } from "./types/navigation";

function NavigatableRoute({
  component: Component,
}: {
  component: ComponentType<{ onNavigate?: (id: PageId) => void }>;
}) {
  const navigate = useNavigate();
  const onNavigate = (id: PageId) => navigate(PAGE_ID_TO_PATH[id]);
  return <Component onNavigate={onNavigate} />;
}

export default function AppV2() {
  const location = useLocation();

  return (
    <DashboardLayoutV2>
      <div
        key={location.pathname}
        className="animate-in fade-in-0 slide-in-from-bottom-2 duration-200"
      >
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<NavigatableRoute component={route.component} />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </DashboardLayoutV2>
  );
}
