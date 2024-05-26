import React, { Fragment } from "react";
import { motion } from "framer-motion";

type Props = {
  props: [
    string,
    {
      toolName: string;
      imgLocation: string;
      proficiency: string;
      level: string;
    }
  ];
};

const SkillAvatar = (props: Props) => {
  return (
    <div
      className="group relative flex cursor-pointer m-2 -webkit-touch-callout:none
    -webkit-user-select:none -khtml-user-select:none -moz-user-select:none -ms-user-select:none user-select:none"
    >
      <motion.img
        loading="lazy"
        initial={{
          scale: 0.57,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 0.87 }}
        className="object-contain w-16 h-16 xl:w-20 xl:h-20 p-1 rounded-lg filter group-hover:grayscale transition duration-300 ease-in-out "
        src={props.props[1].imgLocation}
        alt={props.props[1].toolName}
      />
      <div className="absolute opacity-0 group-hover:opacity-95 transition duration-300 ease-in-out group-hover:bg-zinc-900 h-20 w-20 xl:w-24 xl:h-24  rounded-lg z-0 ">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="uppercase text-center text-xs xl:md:text-sm tracking-[2px] text-white flex">
            {props.props[1].toolName}
          </p>
          <p>{props.props[1].proficiency}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillAvatar;
