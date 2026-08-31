import {
  Award,
  Banknote,
  BarChart3,
  BookMarked,
  BookOpen,
  Calendar,
  CalendarCheck,
  ChartBar,
  CheckSquare,
  ClipboardCheck,
  ClipboardList,
  Fingerprint,
  FolderOpen,
  Forklift,
  Gauge,
  GraduationCap,
  HeartPulse,
  Kanban,
  LayoutDashboard,
  LayoutGrid,
  Library,
  ListTodo,
  Lock,
  type LucideIcon,
  Mail,
  Megaphone,
  MessageSquare,
  NotebookText,
  ReceiptText,
  Server,
  Settings,
  ShoppingBag,
  SquareArrowUpRight,
  TrendingUp,
  UserRound,
  Users,
} from "lucide-react";

export type NavBadge = "new" | "soon";

export interface NavSubItem {
  id: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

interface NavItemBase {
  id: string;
  title: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

export interface NavMainLinkItem extends NavItemBase {
  url: string;
  subItems?: never;
}

export interface NavMainParentItem extends NavItemBase {
  subItems: NavSubItem[];
}

export type NavMainItem = NavMainLinkItem | NavMainParentItem;

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Dashboards",
    items: [
      {
        id: "default",
        title: "Default",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        id: "crm",
        title: "CRM",
        url: "/dashboard/crm",
        icon: ChartBar,
      },
      {
        id: "finance",
        title: "Finance",
        url: "/dashboard/finance",
        icon: Banknote,
      },
      {
        id: "analytics",
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: Gauge,
      },
      {
        id: "productivity",
        title: "Productivity",
        url: "/dashboard/productivity",
        icon: ListTodo,
      },
      {
        id: "ecommerce",
        title: "E-commerce",
        url: "/dashboard/ecommerce",
        icon: ShoppingBag,
      },
      {
        id: "academy",
        title: "Academy",
        url: "/dashboard/academy",
        icon: GraduationCap,
      },
      {
        id: "logistics",
        title: "Logistics",
        url: "/dashboard/logistics",
        icon: Forklift,
      },
      {
        id: "infrastructure",
        title: "Infrastructure",
        url: "/dashboard/infrastructure",
        icon: Server,
      },
      {
        id: "file-manager",
        title: "File Manager",
        url: "/dashboard/file-manager",
        icon: FolderOpen,
        badge: "new",
      },
      {
        id: "patient-monitoring",
        title: "Patient Monitoring",
        url: "/dashboard/patient-monitoring",
        icon: HeartPulse,
        badge: "new",
      },
    ],
  },
  {
    id: 2,
    label: "Dimension Learn",
    items: [
      {
        id: "dimension-learn-dashboard",
        title: "Dashboard",
        url: "/dashboard/dimension-learn",
        icon: LayoutDashboard,
      },
      {
        id: "dimension-learn-students",
        title: "Students",
        url: "/dashboard/dimension-learn/students",
        icon: Users,
      },
      {
        id: "dimension-learn-teachers",
        title: "Teachers",
        url: "/dashboard/dimension-learn/teachers",
        icon: UserRound,
      },
      {
        id: "dimension-learn-courses",
        title: "Courses",
        url: "/dashboard/dimension-learn/courses",
        icon: BookOpen,
      },
      {
        id: "dimension-learn-classes",
        title: "Classes",
        url: "/dashboard/dimension-learn/classes",
        icon: LayoutGrid,
      },
      {
        id: "dimension-learn-curriculum",
        title: "Curriculum",
        url: "/dashboard/dimension-learn/curriculum",
        icon: BookMarked,
      },
      {
        id: "dimension-learn-assignments",
        title: "Assignments",
        url: "/dashboard/dimension-learn/assignments",
        icon: ClipboardList,
      },
      {
        id: "dimension-learn-assessments",
        title: "Assessments",
        url: "/dashboard/dimension-learn/assessments",
        icon: ClipboardCheck,
      },
      {
        id: "dimension-learn-grades",
        title: "Grades",
        url: "/dashboard/dimension-learn/grades",
        icon: GraduationCap,
      },
      {
        id: "dimension-learn-attendance",
        title: "Attendance",
        url: "/dashboard/dimension-learn/attendance",
        icon: CalendarCheck,
      },
      {
        id: "dimension-learn-calendar",
        title: "Calendar",
        url: "/dashboard/dimension-learn/calendar",
        icon: Calendar,
      },
      {
        id: "dimension-learn-progress",
        title: "Learning Progress",
        url: "/dashboard/dimension-learn/progress",
        icon: TrendingUp,
      },
      {
        id: "dimension-learn-certificates",
        title: "Certificates",
        url: "/dashboard/dimension-learn/certificates",
        icon: Award,
      },
      {
        id: "dimension-learn-announcements",
        title: "Announcements",
        url: "/dashboard/dimension-learn/announcements",
        icon: Megaphone,
      },
      {
        id: "dimension-learn-resources",
        title: "Resources",
        url: "/dashboard/dimension-learn/resources",
        icon: Library,
      },
      {
        id: "dimension-learn-reports",
        title: "Reports",
        url: "/dashboard/dimension-learn/reports",
        icon: NotebookText,
      },
      {
        id: "dimension-learn-analytics",
        title: "Analytics",
        url: "/dashboard/dimension-learn/analytics",
        icon: BarChart3,
      },
      {
        id: "dimension-learn-settings",
        title: "Settings",
        url: "/dashboard/dimension-learn/settings",
        icon: Settings,
      },
    ],
  },
  {
    id: 3,
    label: "Pages",
    items: [
      {
        id: "email",
        title: "Email",
        url: "/dashboard/mail",
        icon: Mail,
      },
      {
        id: "chat",
        title: "Chat",
        url: "/dashboard/chat",
        icon: MessageSquare,
      },
      {
        id: "calendar",
        title: "Calendar",
        url: "/dashboard/calendar",
        icon: Calendar,
      },
      {
        id: "kanban",
        title: "Kanban",
        url: "/dashboard/kanban",
        icon: Kanban,
      },
      {
        id: "tasks",
        title: "Tasks",
        url: "/dashboard/tasks",
        icon: CheckSquare,
      },
      {
        id: "invoice",
        title: "Invoice",
        url: "/dashboard/invoice",
        icon: ReceiptText,
      },
      {
        id: "profile",
        title: "Profile",
        url: "/dashboard/profile",
        icon: UserRound,
        badge: "new",
      },
      {
        id: "users",
        title: "Users",
        url: "/dashboard/users",
        icon: Users,
      },
      {
        id: "roles",
        title: "Roles",
        url: "/dashboard/roles",
        icon: Lock,
      },
      {
        id: "authentication",
        title: "Authentication",
        icon: Fingerprint,
        subItems: [
          { id: "auth-login-v1", title: "Login v1", url: "/auth/v1/login", newTab: true },
          { id: "auth-login-v2", title: "Login v2", url: "/auth/v2/login", newTab: true },
          { id: "auth-register-v1", title: "Register v1", url: "/auth/v1/register", newTab: true },
          { id: "auth-register-v2", title: "Register v2", url: "/auth/v2/register", newTab: true },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Legacy",
    items: [
      {
        id: "legacy-dashboards",
        title: "Dashboards",
        subItems: [
          { id: "legacy-default", title: "Default V1", url: "/dashboard/default-v1" },
          { id: "legacy-crm", title: "CRM V1", url: "/dashboard/crm-v1" },
          { id: "legacy-finance", title: "Finance V1", url: "/dashboard/finance-v1" },
          { id: "legacy-analytics", title: "Analytics V1", url: "/dashboard/analytics-v1" },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Misc",
    items: [
      {
        id: "others",
        title: "Others",
        url: "/dashboard/coming-soon",
        icon: SquareArrowUpRight,
        badge: "soon",
        disabled: true,
      },
    ],
  },
];
