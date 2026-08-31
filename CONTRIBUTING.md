# Contributing to Dimension Learn

Thanks for showing interest in improving **Dimension Learn**.
This guide will help you set up your environment and understand how to contribute.

---

## Overview

This project is built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Shadcn UI**, on top of the [Studio Admin](https://github.com/arhamkhnz/next-shadcn-admin-dashboard) admin shell.
The goal is to keep the codebase modular, scalable, and easy to extend.

---

## Project Layout

We use a **colocation-based file system**. Each feature keeps its own pages, components, and logic.

```
src
├── app                    # Next.js routes (App Router)
│   ├── (external)         # Landing / non-dashboard routes
│   ├── (main)
│   │   ├── unauthorized
│   │   └── dashboard
│   │       └── dimension-learn   # Education & Learning Management screens
│   │           ├── students
│   │           ├── teachers
│   │           ├── courses
│   │           └── ...
│   └── layout.tsx
├── components             # Shared UI components
├── hooks                  # Reusable hooks
├── lib                    # Config & utilities
├── navigation             # Sidebar nav config
└── styles                 # Tailwind / theme setup
```

If you’d like a more detailed example of this setup, check out the [Next Colocation Template](https://github.com/arhamkhnz/next-colocation-template), where the full structure is explained with examples.

---

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/rudawirocaltontshuma/education_learning_management.git
   ```

2. Navigate into the project
   ```bash
   cd education_learning_management
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the dev server**
   ```bash
   npm run dev
   ```
   App will be available at [http://localhost:3000](http://localhost:3000).

---

## Contribution Flow

- Always create a new branch before working on changes:
  ```bash
  git checkout -b feature/my-update
  ```

- Use clear commit messages:
  ```bash
  git commit -m "feat: add grade distribution chart"
  ```

- Open a Pull Request once ready.
- If your change adds a new UI screen or component, include a screenshot in your PR description.

---

## Where to Contribute

- **Dimension Learn screens**: `src/app/(main)/dashboard/dimension-learn/`
- **Shared mock data**: `src/app/(main)/dashboard/dimension-learn/_data/`
- **Components**: Reusable UI goes in `src/components/`
- **Hooks**: Custom logic goes in `src/hooks/`
- **Themes**: New presets under `src/styles/presets/`
- **Sidebar navigation**: `src/navigation/sidebar/sidebar-items.ts`

---

## Guidelines

- This is a frontend-only demo — no backend, database, authentication, or external services. Keep new work to mock data and local/session state.
- Prefer **TypeScript types** over `any`
- Husky pre-commit hooks are enabled - linting and formatting run automatically when you commit, and if there are errors the commit will be blocked until they are fixed. 
- Follow **Shadcn UI** style & Tailwind v4 conventions
- Keep accessibility in mind (ARIA, keyboard nav)
- Use clear commit messages with conventional prefixes (`feat:`, `fix:`, `chore:`, etc.)
- Avoid unnecessary dependencies — prefer existing utilities where possible
- Do not modify files inside `src/components/ui/` or `src/components/calendar/` — apply styling or customization where they are used instead

---

## Submitting PRs

- Open a Pull Request once your changes are ready.  
- Ensure your branch is up to date with `main` before submitting.  
- Reference any related issue in your PR for context.

---

## Questions & Support

- Report bugs, suggestions, or issues via [GitHub Issues](https://github.com/rudawirocaltontshuma/education_learning_management/issues)
