export interface Highlight {
  title: string;
  text: string;
}

export interface Fact {
  label: string;
  value: string;
}

export const about = {
  paragraphs: [
    "I'm a Software Engineer focused on reliable web and mobile products — especially in healthcare and education, where clarity and uptime matter.",
    "Day to day I turn requirements into shipped software: React and Angular interfaces, React Native apps, REST API integration with Node.js and .NET Web API, plus debugging and production support.",
  ],
  highlights: [
    {
      title: "Frontend & mobile",
      text: "Scalable interfaces with React.js, Angular and React Native — built for real users on web and stores.",
    },
    {
      title: "APIs & data",
      text: "Clean REST integration, authentication and data flow with Node.js, Express.js, .NET Web API, MySQL and Firebase.",
    },
    {
      title: "Domain focus",
      text: "Healthcare operations, patient apps and school-parent communication products in production.",
    },
    {
      title: "Ship & support",
      text: "Root-cause fixes, performance work and steady delivery with Git and Azure DevOps.",
    },
  ],
  facts: [
    { label: "Role", value: "Software Engineer · Full-Stack" },
    { label: "Primary stack", value: "React · React Native · Angular" },
    { label: "Backend", value: "Node.js · .NET Web API · MySQL" },
    { label: "Domains", value: "Healthcare · Education · Business" },
    { label: "Based in", value: "Dhaka, Bangladesh" },
  ] satisfies Fact[],
};
