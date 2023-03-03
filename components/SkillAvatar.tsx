import React, { Fragment } from "react";
import { motion } from "framer-motion";

const SkillAvatar = (props: Props) => {
  return (
    <div className="group relative flex cursor-pointer m-2">
      <motion.img
        loading="lazy"
        initial={{
          scale: 0.77,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="object-contain w-20 h-20 xl:w-24 xl:h-24 p-1 rounded-lg filter group-hover:grayscale transition duration-300 ease-in-out "
        src={props.props[1]}
      />
      <div className="absolute opacity-0 group-hover:opacity-95 transition duration-300 ease-in-out group-hover:bg-zinc-900 h-20 w-20 xl:w-24 xl:h-24  rounded-lg z-0 ">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="uppercase text-xs xl:md:text-sm tracking-[2px] text-white flex">
            {props.props[0]}
          </p>
          <p>100%</p>
        </div>
      </div>
    </div>
  );
};

export default SkillAvatar;
