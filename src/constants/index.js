import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Coding Teacher",
    icon: creator,
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
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Coding Teacher",
    company_name: "BrightCHAMPS",
    company_website: "https://www.nickelfox.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - July 2024",
    points: [
     "Delivered 1 on 1 coding classes for kids and teenagers in coding basics, web development, AI ML, and prompt engineering. ",
    ],
  },
  {
    title: "Angular Frontend Developer Intern",
    company_name: "TurnKey Systems",
    company_website: "https://newgensoft.com/home-india/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "Developed a groundbreaking banking product for a Singapore-based firm, improved transaction management.",
      "Developed a dynamic dashboard for efficient transaction management, resulting in a 30% increase in productivity.",
      "Optimized frontend performance by achieving 20% reduction in page loading time and make it responsive.",
      "Created a transaction report generator, reducing report generation time by 50% and enhancing data analysis.",
    ],
  },
  
  {
    title: "Web Developer",
    company_name: "Self-employed",
    company_website: "https://proximus.surge.sh/index.html",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Jan 2021",
    points: [
      "Spearheaded the development of a fully responsive website for the college coding society.",
      "Led coding sessions, actively sharing knowledge and insights to enrich members' programming skills and understanding.",
      "Organized informative sessions on cutting-edge technologies, including JavaScript and ReactJs.",
      "Curated and designed challenging coding problems for college competitions.",
    ],
  },
];

const projects = [
  {
    name: "Aptihealth Web",
    description:
      "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://www.aptihealth.com/",
  },
  {
    name: "Aptihealth App",
    description:
      "Access top-notch mental healthcare anytime, anywhere in New York State with our innovative app. Track your progress, schedule appointments, and connect with expert therapists for personalized care.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendbird",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "Zeal Web",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
  {
    name: "Zeal App",
    description:
      "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendgrid",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  },
];

const personalInfo = {
  name: "Ahmad",
  fullName: "Ahmad Faour",
  email: "afh251@student.bau.edu.lb",
  role: "Developer",
  about: `I am a passionate and dedicated computer science graduate with a strong foundation in programming, software development, and data science. As a coding teacher, I have honed my ability to simplify complex concepts and inspire learners to excel in technology. My professional experience includes working extensively with front-end technologies, particularly Angular, to build dynamic and user-friendly web applications. Additionally, I specialize in machine learning, focusing on data preprocessing, cleaning, and creating predictive models that solve real-world problems.

With a commitment to continuous learning and innovation, I thrive in collaborative environments where I can contribute to impactful projects and grow alongside talented teams. I am eager to apply my skills and creativity to develop cutting-edge solutions that drive success.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1vmiPiCLaCuqM0uuDcXQlAd8pY8yBDEOU/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/ahmad-faour-3136b4239/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Neuro-Ghost",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
