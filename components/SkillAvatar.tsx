import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const SkillAvatar = ({ directionLeft }: Props) => {
  return (
    <motion.img
      initial={{
        x: directionLeft ? -200 : 200,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="object-contain w-24 h-24 xl:w-32 xl:h-32 "
      src="https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png"
    />
  );
};

export default SkillAvatar;
