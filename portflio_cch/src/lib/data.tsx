import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiExpress,
  SiFramer,
} from "react-icons/si";

export const links = [
  {
    name: "About Me",
    link: "#aboutMe",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
] as const;

export const projects = [
  {
    heading: "Basic JavaScript Calculator",
    description:
      "Created basic JS with tailwind calculator which performs all basic operations.",
    img: "public/calculator.png",
  },
  {
    heading: "Basic JavaScript Calculator",
    description:
      "Created basic JS with tailwind calculator which performs all basic operations.",
    img: "public/freightHub.png",
  },
];

export const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MS SQL", icon: <SiMicrosoftsqlserver /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Framer Motion", icon: <SiFramer /> },
];
