import type { ComponentType } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { DashboardLayoutV2 } from "./components/layout/DashboardLayoutV2";
import { routes, flattenRoutes, PAGE_ID_TO_PATH } from "./routes";
import type { PageId } from "./types/navigation";
import { PageTransitionMotion } from "@/share/components/PageTransitionMotion";
import { NotFoundPage } from "@/share/components/NotFoundPage";
import "./index.css";

function NavigatableRoute({
  component: Component,
}: {
  component: ComponentType<{ onNavigate?: (id: PageId) => void }>;
}) {
  const navigate = useNavigate();
  const onNavigate = (id: PageId) => navigate(PAGE_ID_TO_PATH[id]);
  return <Component onNavigate={onNavigate} />;
}

const flatRoutes = flattenRoutes(routes);

export default function AppV2() {
  const location = useLocation();

  return (
    <DashboardLayoutV2>
      <PageTransitionMotion transitionKey={location.pathname}>
        <Routes>
          {flatRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<NavigatableRoute component={route.component} />}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageTransitionMotion>
    </DashboardLayoutV2>
  );
}
