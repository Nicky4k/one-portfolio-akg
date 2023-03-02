import React from "react";
import { motion } from "framer-motion";
import ExperienceCards from "./ExperienceCards";

type Props = {};

export const png = {
  java: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  react:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  redux: "https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png",
  reduxSaga: "https://miro.medium.com/max/312/1*zcK3vvoVjsqkqB0oja8RWw.png",
  html: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  css: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png",
  node: "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon.png",
  express:
    "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
  nextjs:
    "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png",
  jest: "https://assets.stickpng.com/images/62a765b6bd73a4af5c5d4fbb.png",
  testingRTL: "https://testing-library.com/img/octopus-128x128.png",
  sql: "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png",
  msOffice:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/2048px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png",
  mui: "https://mui.com/static/logo.png",
  cognos:
    "https://www.element61.be/sites/default/files/img_competences/IBM%2520Cognos.png",
  watson: "https://logodix.com/logo/44000.png",
};

const Experience = (props: Props) => {
  const companies = {
    ibm: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    freelance:
      "https://e7.pngegg.com/pngimages/980/714/png-clipart-computer-icons-code-symbol-coding-miscellaneous-angle.png",
    udhd: "https://zeevector.com/wp-content/uploads/LOGO/Government-of-India-Logo-Vector-PNG.png",
  };

  const expArr = [
    {
      company: "UDHD Govt of India",
      companyImg: companies.udhd,
      jobTitle: "Front End Developer",
      tools: [
        png.react,
        png.redux,
        png.testingRTL,
        png.jest,
        png.reduxSaga,
        png.mui,
        png.html,
        png.css,
      ],
      startDate: "March 2021",
      endDate: "Present",
      achievements: [
        "Built single page progressive web apps and dashboards.",
        "Optimised front-end performance.",
        "Unit and Integration Testing using Jest and React Testing Library.",
        "Worked with latest tech stack: React JS, Redux-Saga, RESTful APIs, Express JS, and ES6.",
        "Sound knowledge of version control system - GIT and GitHub",
      ],
      no: "1 of 3",
    },
    {
      company: "Freelance",
      companyImg: companies.freelance,
      jobTitle: "Front end Web Developer",
      tools: [
        png.react,
        png.redux,
        png.testingRTL,
        png.jest,
        png.node,
        png.express,
        png.html,
        png.css,
        png.nextjs,
      ],
      startDate: "August 2019",
      endDate: "Feb 2021",
      achievements: [
        "Developed highly performant and responsive UI.",
        "Worked with RESTful APIs. ",
        "JavaScript Unit tests using Jest and RTL.",
        "Experience and basic knowledge with Node JS and Express JS. ",
        "Built Eye catching and animated front end UI with Tailwind CSS and Framer Motion.",
      ],
      no: "2 of 3",
    },
    {
      company: "IBM",
      companyImg: companies.ibm,
      jobTitle: "Java Developer",
      tools: [png.java, png.sql, png.cognos, png.watson, png.msOffice],
      startDate: "July 2015",
      endDate: "March 2017",
      achievements: [
        "Built interactive dashboards for international clients.",
        "Collaborated with large team of developers and developed features in agile.",
        "Experience working with MySQL.",
        "Resarch & Analytics",
      ],
      no: "3 of 3",
    },
  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {expArr.map((exp, i) => (
          <ExperienceCards key={i} props={exp} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
