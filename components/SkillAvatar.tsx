import React from "react";
import { motion } from "framer-motion";

const SkillAvatar = (props: Props) => {
  return (
    <motion.img
      loading="lazy"
      initial={{
        x: 200,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="object-contain w-20 h-20 xl:w-24 xl:h-24 m-2 "
      src={props.props}
    />
  );
};

export default SkillAvatar;
