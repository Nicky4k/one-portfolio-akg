import React from "react";

type Props = {
  key: number;
  props: {
    company: string;
    companyImg: {
      name: string;
      imgLocation: string;
    };
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
  };
  index: number;
  length: number;
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
        className="w-16 h-16 xl:w-24 xl:h-24 object-contain
         bg-white p-2 rounded-full"
        src={props.props.companyImg.imgLocation}
        alt={props.props.companyImg.name}
      />
      <div className="">
        <h4 className="text-xl font-light text-gray-200">
          {props.props.jobTitle}
        </h4>
        <p className="font-base text-medium mt-1 text-gray-500">
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
              className="xl:md:h-10 xl:md:w-10 h-7 w-7 object-contain m-1"
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
          <p className="text-blue-400 text-center w-24 bottom-5 bg-zinc-900 px-5 rounded-xl py-0.5">
            {`${props.index + 1} of ${props.length}`}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCards;
