import { SkillCategory } from "@/types/portfolio";

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming languages for algorithmic problem solving and development.",
    skills: [
      { name: "Java", highlight: true },
      { name: "Python", highlight: true },
      { name: "C++", highlight: true },
      { name: "HTML", highlight: false },
      { name: "CSS", highlight: false },
      { name: "JavaScript", highlight: true }
    ]
  },
  {
    category: "Frameworks / Libraries",
    description: "Frontend and backend frameworks for building modern web applications and APIs.",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "FastAPI", highlight: true }
    ]
  },
  {
    category: "Database",
    description: "Relational and document database management systems.",
    skills: [
      { name: "MongoDB", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "PostgreSQL", highlight: true }
    ]
  },
  {
    category: "Cloud & DevOps Tools",
    description: "Cloud computing services, containerization, and hosting platforms.",
    skills: [
      { name: "AWS (EC2, S3, Cognito, DDB)", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Vercel", highlight: true }
    ]
  },
  {
    category: "Developer Tools",
    description: "Development environments, version control, API testing, and UI design.",
    skills: [
      { name: "Android Studio", highlight: false },
      { name: "Git", highlight: true },
      { name: "Postman", highlight: true },
      { name: "Figma", highlight: false }
    ]
  },
  {
    category: "Algorithms and Data Structures",
    description: "Problem solving, data structures, and algorithmic logic.",
    skills: [
      { name: "Proficient in Java for DSA", highlight: true }
    ]
  }
];
