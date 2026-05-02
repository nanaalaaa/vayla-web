export const BOOST_ENDPOINTS = {
  projects: "/api/boost/projects",
  detail: (id: string) => `/api/boost/projects/${id}`,
  participants: (id: string) => `/api/boost/projects/${id}/participants`,
  settlement: (id: string) => `/api/boost/projects/${id}/settlement`,
  risk: "/api/boost/risk",
} as const;
