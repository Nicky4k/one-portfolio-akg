import React from "react";
import { motion } from "framer-motion";
import SkillAvatar from "./SkillAvatar";

type Props = {};

const Skills = (props: Props) => {
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
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
      </div>
    </motion.div>
  );
};

export default Skills;
