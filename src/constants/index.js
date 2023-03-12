import {
  linux,
  code,
  notepad,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  bhavans,
  rec,
  personalsite,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: code,
  },
  {
    title: "Linux Enthusiast",
    icon: linux,
  },
  {
    title: "Blog Writer",
    icon: notepad,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "linux",
    icon: linux,
  },
];

const experiences = [
  {
    title: "School",
    company_name: "Bhavans Rajaji Vidhyashram",
    icon: bhavans,
    iconBg: "#383E56",
    date: "2007 - 2021",
    points: [
      "Senior Secondary Leaving Certificate (SSC)",
      "Computer Science"
    ],
  },
  {
    title: "College (UG)",
    company_name: "Rajalakshmi Engineering College",
    icon: rec,
    iconBg: "#E6DEDD",
    date: "2021 - 2025",
    points: [
      "Bachelor of Engineering - BE Computer Science"
    ],
  },
];

const projects = [
  {
    name: "Personal Website",
    description:
      "The website you are currently using! This was built using ReactJS, Tailwind CSS and threejs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: personalsite,
    source_code_link: "https://github.com/sajayprakash/sajayprakash.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
