import type { TechGroup } from "@/types";

export const techStack: TechGroup[] = [
  { label: "Languages", items: ["Java", "C#", "JavaScript", "TypeScript", "Python"] },
  { label: "Backend", items: ["Spring Boot", ".NET", "Node.js"] },
  { label: "Frontend", items: ["React.js", "Next.js", "React Native", "Tailwind CSS"] },
  { label: "Databases", items: ["MongoDB", "MySQL"] },
  { label: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "ServiceNow"] },
  { label: "Tools", items: ["Git", "GitHub", "Postman"] },
];

export const techExpertiseFlat = techStack.flatMap((group) => group.items);
