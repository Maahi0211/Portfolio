import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "pockit",
    name: "Pockit",
    tagline: "AI-powered personal finance tracker",
    period: "May 2025",
    description:
      "A full-stack, mobile-first expense tracker that reads spending patterns and turns them into plain-language financial guidance, instead of another chart-heavy dashboard.",
    problem:
      "Most budgeting apps ask users to manually log every expense and then hand back a wall of charts. Pockit explores a lower-friction path: let the app understand spending habits and surface insights and savings suggestions on its own.",
    contribution:
      "Designed and built the full stack solo — the React Native (Expo) client, the Spring Boot backend, and a Python (Flask + LSTM) service for forecasting spend patterns. Integrated the Gemini API to power a voice-enabled chatbot that lets users log expenses and financial milestones using natural language.",
    stack: ["React Native", "Expo", "Spring Boot", "Python", "Flask", "LSTM", "Gemini API"],
    github: "https://github.com/Maahi0211/Pockit",
    image: "/projects/pockit.png",
    featured: true,
  },
  {
    slug: "foodease",
    name: "FoodEase",
    tagline: "QR-based restaurant ordering & management",
    period: "Aug – Sept 2024",
    description:
      "A restaurant management platform that lets venues list their menu, generate a QR code for each table, and manage incoming orders in real time — replacing paper menus and manual order-taking.",
    problem:
      "Small restaurants often have no affordable way to digitize their menu or manage orders without committing to an expensive POS system. FoodEase gives them a self-serve way to list a menu and accept orders digitally.",
    contribution:
      "Built the application end-to-end: the restaurant listing and menu management system, QR code generation for contactless menu access and ordering, and a real-time order management flow for restaurant staff.",
    stack: ["Next.js", "Spring Boot", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Maahi0211/FoodEase",
    live: "https://food-ease-teal.vercel.app/",
    image: "/projects/foodease.png",
    featured: true,
  },
  {
    slug: "quizi",
    name: "Quizi",
    tagline: "Quiz hosting platform",
    period: "2025",
    description:
      "A platform for hosting and running quizzes, built with a TypeScript frontend and a containerized deployment setup.",
    problem:
      "Spinning up a quiz for a classroom, team, or community event usually means wrestling with a generic forms tool that wasn't built for the job. Quizi is a purpose-built quiz hosting experience.",
    contribution:
      "Built the full platform — quiz creation and hosting flows — using TypeScript and Java, and containerized the application with Docker for consistent deployment.",
    stack: ["TypeScript", "Java", "Docker"],
    github: "https://github.com/Maahi0211/Quizi",
    live: "https://quizi-six.vercel.app",
    image: "/projects/quizi.png",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
