# Dimension Learn

**Education & Learning Management Platform** — a frontend-only application covering students, teachers, courses, curriculum, grades, attendance, and analytics, built on mock data. No backend, database, authentication, or external services are required to run it.

## Features

- Built with Next.js 16, TypeScript, Tailwind CSS v4, and Shadcn UI
- Fully responsive, including a mobile Sheet navigation, horizontally scrollable tables, and resizable charts
- Customizable theme presets (light/dark modes with color schemes like Tangerine, Neo Brutalism, and Soft Pop)
- Flexible layouts (collapsible sidebar, variable content widths)
- 18 modules: Dashboard, Students, Teachers, Courses, Classes, Curriculum, Assignments, Assessments, Grades, Attendance, Calendar, Learning Progress, Certificates, Announcements, Resources, Reports, Analytics, and Settings
- Charts throughout via Recharts, all driven by local mock data

## Tech Stack

- **Framework**: Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- **UI Components**: Shadcn UI
- **Validation**: Zod
- **Forms & State Management**: React Hook Form, Zustand
- **Tables & Data Handling**: TanStack Table
- **Charts**: Recharts
- **Tooling & DX**: Biome, Husky

## Screens

All screens live under `/dashboard/dimension-learn` (the root `/` redirects there):

- Dashboard (KPIs and enrollment/attendance/grade charts)
- Students (directory + profile detail)
- Teachers (directory + profile detail)
- Courses (directory + tabbed course detail)
- Classes
- Curriculum (module/lesson builder)
- Assignments
- Assessments
- Grades
- Attendance
- Calendar
- Learning Progress
- Certificates
- Announcements
- Resources
- Reports
- Analytics
- Settings

## Colocation File System Architecture

This project follows a **colocation-based architecture** — each feature keeps its own pages, components, and logic inside its route folder. Shared UI, hooks, and configuration live at the top level, making the codebase modular, scalable, and easier to maintain as the app grows.

```
src
├── app
│   ├── (external)              # Landing / non-dashboard routes
│   └── (main)
│       ├── unauthorized
│       └── dashboard
│           └── dimension-learn # All product screens
│               ├── students
│               ├── teachers
│               ├── courses
│               └── ...
├── components                  # Shared UI components
├── hooks                       # Reusable hooks
├── lib                         # Config & utilities
├── navigation                  # Sidebar nav config
└── styles                      # Tailwind / theme setup
```

## Getting Started

### Run locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/rudawirocaltontshuma/education_learning_management.git
   ```

2. **Navigate into the project**
   ```bash
   cd education_learning_management
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

Your app will be running at [http://localhost:3000](http://localhost:3000)

### Formatting and Linting

Format, lint, and organize imports
```bash
npx @biomejs/biome check --write
```
> For more information on available rules, fixes, and CLI options, refer to the [Biome documentation](https://biomejs.dev/).

### Production build

```bash
npm run build
```

---

Contributions are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).
