import React from "react";

type Props = {
  key: number;
  props: {
    company: string;
    companyImg: string;
    jobTitle: string;
    tools: {
      toolName: string;
      imgLocation: string;
      proficiency: string;
      level: string;
    }[];
    startDate: string;
    endDate: string;
    achievements: string[];
    no: string;
  };
};
import { motion } from "framer-motion";

const ExperienceCards = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg item-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[1000px] snap-center bg-[#292929] xl:px-10 md:px-10 px-5 py-7 mt-10  cursor-pointer overflow-scroll 
    "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-24 h-24 object-contain
         bg-white p-2 rounded-full"
        src={props.props.companyImg}
        alt={props.props.company}
      />
      <div className="">
        <h4 className="text-2xl font-light text-gray-200">
          {props.props.jobTitle}
        </h4>
        <p className="font-bold text-2xl mt-1 text-gray-500">
          {props.props.company}
        </p>
        <p className="py-2 text-gray-300">
          {props.props.startDate} - {props.props.endDate}
        </p>
        <div className="flex space-x-2 my-1  flex-wrap">
          {props.props.tools.map((tool, i) => (
            <img
              key={i}
              loading="lazy"
              className="xl:md:h-10 h-7 w-10 object-contain m-1"
              src={tool.imgLocation}
              alt={tool.toolName}
            />
          ))}
        </div>
        <ul className="list-disc space-y-2 ml-5 xl:text-sm md:text-sm text-xs">
          {props.props.achievements.map((point, i) => (
            <li key={i} className="text-gray-500">
              {point}
            </li>
          ))}
        </ul>
        <div className="pt-4 ">
          <p className="text-blue-700">{props.props.no}</p>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCards;
