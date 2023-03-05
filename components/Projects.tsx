import React from "react";
import { motion } from "framer-motion";
import { images } from "../assets/ImageGallery";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      id: 0,
      name: "Burner Chat",
      toolsUsed: [
        images.css,
        images.javascript,
        images.html,
        images.nodeJS,
        images.expressJs,
        images.redux,
        images.react,
        images.mui,
        images.reactTestingLibrary,
      ],
      description: "MERN chat app",
      features: [
        "functional components",
        "full stack app",
        "web socket implementation",
      ],
      projXOfX: "1 of 12",
      siteLink: "abc.com",
      sourceCode: "github.com/abc",
    },
    {
      id: 1,
      name: "Deliveroo",
      toolsUsed: ["react png", "redux png", "mongo db", "node", "express"],
      projXOfX: "2 of 12",
    },
    {
      id: 2,
      name: "DevFlix",
      toolsUsed: [
        "react png",
        "redux png",
        "mongo db",
        "node",
        "express",
        "tmdb",
      ],
      projXOfX: "3 of 12",
    },
    {
      id: 3,
      name: "Mapty",
      toolsUsed: [
        "react png",
        "redux png",
        "mongo db",
        "node",
        "express",
        "tmdb",
      ],
      projXOfX: "4 of 12",
    },
    {
      id: 4,
      name: "Natours",
      toolsUsed: [
        "react png",
        "redux png",
        "mongo db",
        "node",
        "express",
        "tmdb",
      ],
      projXOfX: "5 of 12",
    },
    {
      id: 5,
      name: "Forkify",
      toolsUsed: [
        "react png",
        "redux png",
        "mongo db",
        "node",
        "express",
        "tmdb",
      ],
      projXOfX: "6 of 12",
    },
    {
      id: 6,
      name: "Amazon Clone",
      toolsUsed: [
        "react png",
        "redux png",
        "mongo db",
        "node",
        "express",
        "tmdb",
      ],
      projXOfX: "7 of 12",
    },
    {
      id: 7,
      name: "WhatsApp Clone",
      toolsUsed: [
        "react png",
        "redux png",
        "mongo db",
        "node",
        "express",
        "tmdb",
      ],
      projXOfX: "8 of 12",
    },
    {
      id: 8,
      name: "Youtube Clone",
      toolsUsed: [
        "react png",
        "redux png",
        "mongo db",
        "node",
        "express",
        "tmdb",
      ],
      projXOfX: "9 of 12",
    },
    {
      id: 9,
      name: "Expense tracker",
      toolsUsed: [
        "react png",
        "redux png",
        "mongo db",
        "node",
        "express",
        "tmdb",
      ],
      projXOfX: "10 of 12",
    },
    {
      id: 10,
      name: "Tenzie",
      toolsUsed: [
        "react png",
        "redux png",
        "mongo db",
        "node",
        "express",
        "tmdb",
      ],
      projXOfX: "11 of 12",
    },
    {
      id: 11,
      name: "Tinder Clone",
      toolsUsed: [
        "react png",
        "redux png",
        "mongo db",
        "node",
        "express",
        "tmdb",
      ],
      projXOfX: "11 of 12",
    },
  ];
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
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full  justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={i}
            className=" relative flex-shrink-0 snap-center flex   items-center justify-center p-20 md:p-44 h-screen top-10 xl:flex-row flex-col  w-[300px] md:w-[600px] xl:w-[1000px]   xl:px-10 md:px-10 px-5 py-7 mt-10  cursor-pointer overflow-scroll"
          >
            <div className="flex flex-col align-center xl:pr-10">
              <motion.img
                loading="lazy"
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
                className="object-contain w-45 h-56 mb-2 rounded-lg"
                src="https://www.notebookcheck.com/fileadmin/Notebooks/News/_nc3/Apple_soll_noch_im_August_neuen_iMac_bringen.jpg"
                alt="project description"
              />
              <div>
                <h4 className="tracking-[4px] text-zinc-300 text-xl py-2">
                  {project.name}
                </h4>
              </div>
            </div>
            <div className="flex flex-col w-100 justify-start border-zinc-900 border-2 border-solid rounded-xl py-5 px-4">
              <div className="flex space-x-2 my-1 flex flex-wrap xl:py-2">
                {project.toolsUsed.map((tool, i) => (
                  <img
                    key={i}
                    loading="lazy"
                    className="xl:md:h-10 h-7 w-10 object-contain m-1"
                    src={tool.imgLocation}
                    alt={tool.toolName}
                  />
                ))}
              </div>
              <div>
                <p className="text-zinc-200 text-xl pb-2">
                  {project.description}
                </p>
              </div>
              <ul className="list-disc space-y-2 ml-5 xl:text-base md:text-base text-sm">
                {project.features &&
                  project.features.map((point, i) => (
                    <li key={i} className="text-gray-500">
                      {point}
                    </li>
                  ))}
              </ul>
              <div className="flex gap-5 my-2 pt-2 xl:pt-5">
                <button className="heroButton">Live site</button>
                <button className="heroButton">GitHub</button>
              </div>
              <div className="pt-4 ">
                <p className="text-zinc-500 bg-zinc-900 w-16 text-center rounded-xl">
                  {project.projXOfX}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
      <p className="absolute bottom-5 text-zinc-500 bg-zinc-800 px-5 rounded-xl py-0.5">
        swipe horizontally for more projects
      </p>
    </motion.div>
  );
};

export default Projects;
