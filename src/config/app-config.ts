import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Dimension Learn",
  version: packageJson.version,
  copyright: `© ${currentYear}, Dimension Learn.`,
  meta: {
    title: "Dimension Learn - Education & Learning Management Platform",
    description:
      "Dimension Learn is a frontend-only demo of an education and learning management platform, covering students, teachers, courses, curriculum, grades, attendance, and analytics with mock data.",
  },
};
