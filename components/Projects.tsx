import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"></div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
