export const BOOST_ENDPOINTS = {
  projects: "/api/boost/projects",
  detail: (id: string) => `/api/boost/projects/${id}`,
  participants: (id: string) => `/api/boost/projects/${id}/participants`,
  settlement: (id: string) => `/api/boost/projects/${id}/settlement`,
  risk: "/api/boost/risk",
} as const;

export const BOOST_QUERY_KEYS = {
  projects: BOOST_ENDPOINTS.projects,
  detail: "/api/boost/projects/:id",
  participants: "/api/boost/projects/:id/participants",
  settlement: "/api/boost/projects/:id/settlement",
  risk: BOOST_ENDPOINTS.risk,
} as const;
