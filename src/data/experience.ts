import type { EducationEntry, ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst",
    start: "June 2025",
    end: "Present",
    summary:
      "Working on database migration and modernization engagements for international clients — the requirements gathering, cross-team coordination, and validation work that keeps large-scale migrations on track.",
    responsibilities: [
      "Gather requirements around schemas, database size, regions, and dependencies to scope migration work for international clients.",
      "Coordinate with DBA, AWS/Azure, OS, architecture, and project management teams to track migration activities, troubleshoot issues, and follow up on blockers.",
      "Manage tickets and workflows through ServiceNow to keep migration activities visible and on schedule.",
      "Perform source-to-target database analysis and validation to confirm migrations preserve data integrity.",
      "Prepare migration plans, reports, and technical documentation for review and approval by application owners.",
    ],
    technologies: ["AWS", "Azure", "ServiceNow", "SQL", "Database Migration Tooling"],
  },
];

export const education: EducationEntry[] = [
  {
    institution: "Acropolis Institute of Technology and Research",
    degree: "Bachelor of Technology — Computer Science Engineering",
    location: "Indore, India",
    start: "Nov 2021",
    end: "May 2025",
    detail:
      "Coursework in Data Structures, OOPs, DBMS, Operating Systems, Computer Networks, and Web Development.",
  },
];

export const achievements = [
  {
    title: "GDSC-AITR — Cloud Core Team Member",
    detail: "Contributed to cloud workshops and technical sessions.",
  },
  {
    title: "IEEE-AITR — Technical Content Creator",
    detail: "Authored articles on software engineering topics.",
  },
  {
    title: "LeetCode — Knight Badge",
    detail: "Contest rating 1914.",
  },
];

export const certifications = [
  { name: "Java Spring Framework 6 with Spring Boot 3", year: "2025" },
  { name: "NPTEL — Computer Networks, Python in Data Science, Project Management", year: "2024" },
  { name: "MongoDB Course Certification", year: "2023" },
];
