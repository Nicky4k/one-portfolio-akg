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
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover"
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
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/40">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi
          magni, doloribus suscipit corrupti aspernatur! Reprehenderit, minima
          expedita temporibus nam nulla eligendi. Ratione quasi adipisci omnis
          magnam repellendus ut ipsam. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Aspernatur perferendis obcaecati earum provident
          quam sed officia veniam tempore quidem pariatur repellendus architecto
          iste explicabo beatae similique, dolorem, ut esse exercitationem.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
