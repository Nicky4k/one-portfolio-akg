import React from "react";
import { motion } from "framer-motion";
import ExperienceCards from "./ExperienceCards";
import { images, companyImages } from "../assets/ImageGallery";

type Props = {};

export const pngs = {
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
  postman: "",
  axios: "",
};

const Experience = (props: Props) => {
  const expArr = [
    {
      company: "Tekion Corp",
      companyImg: companyImages.tekion,
      jobTitle: "Software Engineer",
      tools: [
        images.react,
        images.redux,
        images.reactTestingLibrary,
        images.jest,
        images.javascript,
        images.mui,
        images.lodash,
        images.html,
        images.css,
        images.jira,
      ],
      startDate: "May 2023",
      endDate: "Present",
      achievements: [
        "Designing and developing complex business workflows",
        "Writing high-quality code",
        "Mentoring peers",
        "Collaborating cross-functionally",
        "Delivering timely results in a fast-paced startup",
        "Developed PDF builder renderer component",
        "Performance Optimization",
      ],
    },
    {
      company: "Urban Development and Housing Department, Govt of India",
      companyImg: companyImages.udhd,
      jobTitle: "Front End Developer",
      tools: [
        images.react,
        images.redux,
        images.reactTestingLibrary,
        images.jest,
        images.reduxSaga,
        images.typescript,
        images.nextjs,
        images.javascript,
        images.mui,
        images.html,
        images.css,
      ],
      startDate: "March 2021",
      endDate: "April 2023",
      achievements: [
        "Built responsive UI and scalable dashboards. Improved overall security.",
        "Contributed to reusable functional components, compound components and render props design patterns.",
        "Optimised front-end performance.",
        "Unit and Integration Testing using Jest and React Testing Library.",
        "Worked with latest tech stack: React JS, Redux-Saga, RESTful APIs, Tailwind CSS, and ES6.",
        "Sound knowledge of version control systems - GIT and GitHub",
        "Basic knowledge of ExpressJS, NodeJS and MongoDB",
      ],
    },
    {
      company: "Freelance",
      companyImg: companyImages.freelance,
      jobTitle: "Frontend Web Developer",
      tools: [
        images.react,
        images.redux,
        images.reactTestingLibrary,
        images.jest,
        images.nodeJS,
        images.expressJs,
        images.javascript,
        images.html,
        images.css,
        images.nextjs,
        images.mongodb,
        images.figma,
        images.styledComponents,
        images.tailwind,
        images.typescript,
        images.firebase,
      ],
      startDate: "August 2019",
      endDate: "Feb 2021",
      achievements: [
        "Developed highly performant and responsive UI. Descreased loading time by 26%.",
        "Worked with RESTful APIs.",
        "JavaScript Unit tests using Jest and React Testing Library.",
        "Experience and basic knowledge with Node JS and Express JS. ",
        "Built Eye catching and animated front end UI with Tailwind CSS and Framer Motion.",
        "Optimized performance and reduced build bundle size by 10%.",
      ],
    },
    {
      company: "IBM",
      companyImg: companyImages.ibm,
      jobTitle: "Java Developer",
      tools: [images.mysql, images.java, images.msOffice],
      startDate: "July 2015",
      endDate: "March 2017",
      achievements: [
        "Built interactive dashboards for international clients.",
        "Boosted client sales by 2.5%.",
        "Collaborated with a large team of developers and developed features in agile.",
        "Experience working with MySQL.",
        "Completed 100% of the tasks within the deadline, awarded Employee of the year in Research & Analytics Department.",
      ],
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
          <ExperienceCards
            key={i}
            props={exp}
            index={i}
            length={expArr.length}
          />
        ))}
      </div>
      <p className="absolute bottom-5 text-zinc-500 bg-zinc-800 px-5 rounded-xl py-0.5">
        swipe horizontally for more
      </p>
    </motion.div>
  );
};

export default Experience;
