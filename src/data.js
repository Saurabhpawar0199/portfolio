// ============================================================
//  EDIT THIS FILE. Everything on the site is read from here.
//  Search for "TODO" and replace those values with your own.
// ============================================================

export const profile = {
  name: "Saurabh",
  role: "Java backend developer",
  education: "B.Tech, Computer Engineering (2025)",
  location: "Maharashtra, India",
  status: "Open to fresher roles",
  openTo: ["Java backend developer", "Full stack developer"],
  learningNext: ["Spring Security", "Spring AI", "Python"],
  intro:
    "I'm a 2025 Computer Engineering graduate. During a six-month Java Full Stack internship at Test Yantra I built banking and job portal applications. I'm looking for my first backend role and working toward AI/ML engineering.",
};

export const contact = {
  email: "your.saurabhpawar0199@gmail.com", // TODO: your real email
  github: "https://github.com/Saurabhpawar0199",
  leetcode: "https://leetcode.com/u/tRrvhmKCCf",
  linkedin: "", // TODO: paste your LinkedIn URL, or leave empty to hide it
  resumeUrl: "/resume.pdf", // TODO: put your PDF at public/resume.pdf (or set to "" to hide the button)
};

export const experience = [
  {
    company: "Test Yantra",
    role: "Java Full Stack Intern",
    duration: "6 months",
    summary:
      "Worked across the Java full stack and delivered banking and job portal applications.",
  }
];

// TODO: replace each `repo` with the link to that project's own GitHub repository.
export const projects = [
  {
    name: "Banking Application",
    summary:
      "A Java banking application that stores its data in a relational database through JDBC instead of in-memory collections.",
    stack: ["Java", "JDBC", "SQL"],
    repo: "https://github.com/Saurabhpawar0199",
  },
  {
    name: "Job Portal",
    summary:
      "A job portal application built during the Test Yantra Java Full Stack internship.",
    stack: ["Java", "SQL"], // TODO: add the exact stack you used
    repo: "https://github.com/Saurabhpawar0199",
  },
  {
    name: "Rock Paper Scissors with Hibernate",
    summary:
      "A game written in Java whose results are saved through Hibernate ORM rather than raw SQL.",
    stack: ["Java", "Hibernate", "Maven"],
    repo: "https://github.com/Saurabhpawar0199",
  },
  {
    name: "Hibernate Mappings Demo",
    summary:
      "Runnable examples of bidirectional OneToOne, OneToMany / ManyToOne and ManyToMany mappings on an in-memory H2 database.",
    stack: ["Java", "Hibernate", "Maven", "H2"],
    repo: "https://github.com/Saurabhpawar0199",
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "SQL", "JavaScript"] },
  { group: "Backend", items: ["Spring Boot", "Hibernate", "JDBC", "Maven"] },
  { group: "Frontend", items: ["React", "HTML", "CSS"] },
  { group: "Databases", items: ["MySQL", "H2"] },
  { group: "Tools", items: ["Git", "GitHub"] },
  {
    group: "Studying now",
    items: ["Microservices", "Eureka", "Spring Cloud Gateway", "FeignClient", "Kafka"],
  },
];

export const certifications = [
  { name: "HackerRank Java certificate", url: "" }, // TODO: add the certificate link
  { name: "HackerRank SQL certificate", url: "" }, // TODO: add the certificate link
];

export const practice =
  "I practice data structures and algorithms on LeetCode and Codeforces, mostly in Java.";
