import {
  Award,
  BarChart3,
  BookMarked,
  BookOpen,
  Calendar,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  LayoutGrid,
  Library,
  type LucideIcon,
  Megaphone,
  NotebookText,
  Settings,
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
];
