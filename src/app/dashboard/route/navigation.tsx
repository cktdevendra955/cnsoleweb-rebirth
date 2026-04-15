import {
  LayoutDashboard,
  Users,
  CreditCard,
  TrendingUp,
  Mail,
  Calendar,
  Settings,
  HelpCircle,
} from "lucide-react";

import { ROUTES } from "./routes";

// ✅ Type Safety (Very Important)
export type NavItem = {
  label: string;
  path: string;
  icon: any;
  section?: "main" | "secondary";
};

export const NAV_ITEMS: NavItem[] = [
  // 🔹 Main Navigation
  {
    label: "Dashboard",
    path: ROUTES.DASHBOARD,
    icon: LayoutDashboard,
    section: "main",
  },
  {
    label: "Customers",
    path: ROUTES.DRIVE,
    icon: Users,
    section: "main",
  },
  {
    label: "Transactions",
    path: ROUTES.JOBS,
    icon: CreditCard,
    section: "main",
  },
  {
    label: "Analytics",
    path: ROUTES.HIRING,
    icon: TrendingUp,
    section: "main",
  },
  {
    label: "Messages",
    path: ROUTES.INBOX,
    icon: Mail,
    section: "main",
  },
  {
    label: "Calendar",
    path: ROUTES.INTERVIEWS,
    icon: Calendar,
    section: "main",
  },

  // 🔹 Secondary Navigation
  {
    label: "Settings",
    path: ROUTES.SETTINGS.ROOT,
    icon: Settings,
    section: "secondary",
  },
  {
    label: "Support",
    path: "/dashboard/support",
    icon: HelpCircle,
    section: "secondary",
  },
];