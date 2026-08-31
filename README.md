# Dimension Learn

**Education & Learning Management Platform** — a frontend-only demo covering students, teachers, courses, curriculum, grades, attendance, and analytics with mock data. No backend, database, authentication, or external services.

This app is built on top of [Studio Admin](https://github.com/arhamkhnz/next-shadcn-admin-dashboard), an open-source Next.js/shadcn admin shell, which supplies the sidebar, theming, and layout system. The original template's demo dashboards have been removed so the app is focused entirely on the Dimension Learn product.

## Features

- Built with Next.js 16, TypeScript, Tailwind CSS v4, and Shadcn UI  
- Responsive and mobile-friendly, including a mobile Sheet navigation  
- Customizable theme presets (light/dark modes with color schemes like Tangerine, Brutalist, and more)  
- Flexible layouts (collapsible sidebar, variable content widths)  
- 18 Dimension Learn modules: Dashboard, Students, Teachers, Courses, Classes, Curriculum, Assignments, Assessments, Grades, Attendance, Calendar, Learning Progress, Certificates, Announcements, Resources, Reports, Analytics, and Settings  
- Charts throughout via Recharts, all driven by local mock data  

> [!NOTE]
> The app uses the **shadcn neutral** theme by default.  
> It also includes additional color presets inspired by [Tweakcn](https://tweakcn.com):  
>
> - Tangerine  
> - Neo Brutalism  
> - Soft Pop  
>
> You can create more presets by following the same structure as the existing ones.

## Tech Stack

- **Framework**: Next.js 16 (App Router), TypeScript, Tailwind CSS v4  
- **UI Components**: Shadcn UI  
- **Validation**: Zod  
- **Forms & State Management**: React Hook Form, Zustand  
- **Tables & Data Handling**: TanStack Table  
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

This project follows a **colocation-based architecture** each feature keeps its own pages, components, and logic inside its route folder.  
Shared UI, hooks, and configuration live at the top level, making the codebase modular, scalable, and easier to maintain as the app grows.

For a full breakdown of the structure with examples, see the [Next Colocation Template](https://github.com/arhamkhnz/next-colocation-template).

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

---

Contributions are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).
