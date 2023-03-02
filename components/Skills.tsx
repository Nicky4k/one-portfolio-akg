import React from "react";
import { motion } from "framer-motion";
import SkillAvatar from "./SkillAvatar";

type Props = {};

const Skills = (props: Props) => {
  const png = {
    java: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    react:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    redux: "https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png",
    reduxSaga:
      "https://cdn.freebiesupply.com/logos/large/2x/redux-saga-logo-png-transparent.png",
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
        Skills
      </h3>
      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3> */}

      <div className="w-full grid place-items-center grid-cols-4 gap-4 xl:grid-cols-4 xl:p-60 ">
        {Object.values(png).map((skill, i) => (
          <SkillAvatar key={i} props={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
