import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const SkillAvatar = ({ directionLeft }: Props) => {
  return (
    <motion.img
      loading="lazy"
      initial={{
        x: directionLeft ? -200 : 200,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="object-contain w-20 h-20 xl:w-32 xl:h-32 "
      src="https://framerusercontent.com/images/kTAwfpXO8cVz7oqiIKgb7XLjM.png"
    />
  );
};

export default SkillAvatar;
