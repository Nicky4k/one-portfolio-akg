import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        loading="lazy"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 xl:w-56 xl:h-56 mt-5 rounded-full object-cover"
        src="https://avatars.githubusercontent.com/u/87268446?v=4"
      />
      <motion.div
        initial={{
          y: 100,
          scale: 0.95,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
      >
        <h4 className="text-2xl font-semibold md:px-5 xl:px-5 pb-4 xl:text-4xl md:text-3xl">
          I welcome you to read a{" "}
          <span className="underline decoration-[#F7AB0A]/40 text-gray-500">
            little
          </span>{" "}
          bio
        </h4>
        <p className="text-sm xl:text-base md:text-base xl:py-1 md:px-5 xl:px-5 text-gray-400">
          I have been coding since 4th grade and have 5 years of experience in
          IT, and 2 years of experience with React, JavaScript, and Redux. I
          build dynamic, responsive, and progressive UI for real world business
          problems.
          <br />I am excited to learn about the opportunities and challenges
          about the role you are interviewing. I'm confident that my skills and
          experience match the requirements of the role. I would appretiate if
          we could expedite the interviewing process.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
