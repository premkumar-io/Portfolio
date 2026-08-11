import { Experience } from "@/types/portfolio";

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    company: "PrernaGati & Technologies",
    role: "PrernaGati & Technologies Intern",
    type: "Internship",
    location: "India",
    startDate: "Jan 2026",
    endDate: "Jul 2026",
    current: true,
    description:
      "Developed and maintained responsive web applications, integrated RESTful APIs, and optimized application performance.",
    responsibilities: [
      "Developed and maintained responsive web applications using modern frontend and backend technologies.",
      "Designed and integrated RESTful APIs to support efficient and secure data exchange.",
      "Collaborated with development teams to deliver high-quality, user-centric digital solutions.",
      "Optimized application performance and ensured code quality through testing and debugging."
    ],
    achievements: [
      "Delivered high-quality, user-centric digital solutions.",
      "Optimized application performance and code quality through testing and debugging."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "JavaScript", "REST APIs", "Frontend & Backend"],
    logoText: "PT"
  },
  {
    id: "exp-2",
    company: "AI Cloud",
    role: "Emerging Technologies Intern",
    type: "Internship",
    location: "Remote",
    startDate: "June 2024",
    endDate: "Dec 2024",
    current: false,
    description:
      "Developed a smart AI chatbot utilizing AI, Natural Language Processing (NLP), REST APIs, and cloud deployments.",
    responsibilities: [
      "Developed a smart AI chatbot using cutting-edge technologies in Artificial Intelligence and Cloud Computing.",
      "Integrated Natural Language Processing (NLP) to understand and respond to user queries in real-time.",
      "Deployed the chatbot on a cloud platform (e.g., AWS, Google Cloud, or Azure) for scalable and secure access.",
      "Designed the system architecture using REST APIs and backend services for efficient data flow."
    ],
    achievements: [
      "Integrated NLP to process user queries in real-time.",
      "Deployed chatbot architecture on cloud platforms for scalable access."
    ],
    technologies: ["Artificial Intelligence", "Cloud Computing", "NLP", "AWS / GCP / Azure", "REST APIs", "Python"],
    logoText: "AC"
  }
];
