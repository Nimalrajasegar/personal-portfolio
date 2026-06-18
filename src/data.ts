export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface EducationEntry {
  degree: string;
  institute: string;
  years: string;
  cgpa: string;
}

export interface ExperienceEntry {
  role: string;
  org: string;
  duration: string;
  highlights: string[];
}

export interface ProjectEntry {
  name: string;
  role: string;
  summary: string;
  tags: string[];
  link: string;
}

export interface SkillGroup {
  label: string;
  items: { name: string; level?: string }[];
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  category: string;
}

export interface LanguageEntry {
  name: string;
  proficiency: string;
}

export const profile = {
  name: "Nimal R.S",
  initials: "NR",
  tagline: "Computer Science Engineering student building ML systems and frontend interfaces.",
  status: "Open to internships and collaborative builds",
};

export const contact: ContactInfo = {
  phone: "+91 95009 21354",
  email: "nimalrajasegar@gmail.com",
  location: "Guduvanchery, Chennai, India",
  linkedin: "https://linkedin.com/in/nimal-rajasegar-613743337",
  github: "https://github.com/Nimalrajasegar",
};

export const education: EducationEntry = {
  degree: "B.Tech, Computer Science and Engineering",
  institute: "SRM Institute of Science and Technology, Kattankulathur",
  years: "2023 – 2027",
  cgpa: "7.2 / 10.0",
};

export const experience: ExperienceEntry[] = [
  {
    role: "Frontend Developer Intern",
    org: "TVK Company",
    duration: "1 Month",
    highlights: [
      "Worked on frontend development tasks using HTML, CSS, and basic JavaScript.",
      "Assisted in designing responsive UI components and improving user experience.",
      "Gained practical exposure to real-time project workflows.",
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    name: "Parkinson's Disease Prediction System",
    role: "Developer",
    summary:
      "A machine learning system that predicts Parkinson's disease from patient medical data, with custom preprocessing and prediction logic in Python aimed at supporting earlier detection.",
    tags: ["Python", "Machine Learning", "Data Preprocessing", "Healthcare"],
    link: "https://github.com/Nimalrajasegar/parkinson-detection-app",
  },
  {
    name: "AI Interview Simulator",
    role: "Developer",
    summary:
      "An interview-practice tool built around usability and learning. It parses uploaded resumes to align question recommendations with a candidate's skills and produces reports on performance trends and feedback, with room for AI-driven question generation later.",
    tags: ["Resume Parsing", "Interview Analytics", "Planned: AI Question Generation"],
    link: "https://github.com/Nimalrajasegar/ai-interview-simulator",
  },
  {
    name: "AI-Enhanced Documentation",
    role: "Contributor",
    summary:
      "AI Documentation Generator is an intelligent developer tool that automatically creates high-quality project documentation from a GitHub repository. It analyzes repository structure, source code, dependencies, configuration files, and API routes to generate comprehensive documentation with minimal manual effort.",
    tags: ["Python", "TypeScript", "Docker"],
    link: "https://github.com/MageshS09/AI-ENHANCED-DOCUMENTATION",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Programming",
    items: [
      { name: "Python", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "C", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
    ],
  },
  {
    label: "Frameworks",
    items: [{ name: "Spring Boot", level: "Basics" }],
  },
  {
    label: "Database",
    items: [{ name: "SQL" }],
  },
  {
    label: "Concepts",
    items: [
      { name: "Object-Oriented Programming" },
      { name: "Basic Data Structures" },
      { name: "Software Development Lifecycle" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Visual Studio Code" },
      { name: "Git & GitHub", level: "Basics" },
      { name: "MS Office" },
    ],
  },
  {
    label: "Soft Skills",
    items: [
      { name: "English Communication" },
      { name: "Problem-Solving" },
      { name: "Teamwork & Collaboration" },
      { name: "Time Management" },
      { name: "Willingness to Learn" },
    ],
  },
];

export const certifications: CertificationEntry[] = [
  { title: "Python Programming", issuer: "Udemy", category: "Programming" },
  { title: "Java Programming", issuer: "NPTEL", category: "Programming" },
  { title: "C Programming", issuer: "Udemy", category: "Programming" },
];

export const accomplishments: string[] = [
  "Successfully completed multiple academic projects as part of coursework.",
  "Actively participated in technical learning and skill development programs.",
];

export const languages: LanguageEntry[] = [
  { name: "English", proficiency: "Fluent" },
  { name: "Tamil", proficiency: "Native" },
  { name: "Hindi", proficiency: "Basic proficiency" },
];
