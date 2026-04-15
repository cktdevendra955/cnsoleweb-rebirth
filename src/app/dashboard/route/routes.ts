const BASE_URL = "/dashboard";

export const ROUTES = {
  DASHBOARD: `${BASE_URL}`,

  // Main Sections
  DRIVE: `${BASE_URL}/drives`,
  HIRING: `${BASE_URL}/hiring`,
  INBOX: `${BASE_URL}/inbox`,
  INTERVIEWS: `${BASE_URL}/interviews`,

  // Feature Sections
  JOBS: `${BASE_URL}/jobs`,
  QUIZ: `${BASE_URL}/quiz`,
  RESUME: `${BASE_URL}/resume`,

  // Settings (Nested structure - BEST PRACTICE)
  SETTINGS: {
    ROOT: `${BASE_URL}/settings`,
    PROFILE: `${BASE_URL}/settings/profile`,
    ACCOUNT: `${BASE_URL}/settings/account`,
  },
};