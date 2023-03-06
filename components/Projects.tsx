import React from "react";
import { motion } from "framer-motion";
import { images } from "../assets/ImageGallery";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      id: 10,
      name: "Tesla Clone",
      toolsUsed: [images.react, images.css, images.firebase, images.html],
      description: "Tesla UI with smooth scroll.",
      siteLink: "abc.com",
      sourceCode: "github.com/abc",
      projectDemoImg: "",
    },
    {
      id: 10,
      name: "Turbo Drive",
      toolsUsed: [
        images.react,
        images.firebase,
        images.css,
        images.javascript,
        images.html,
      ],
      description:
        "Smart clone of Google Drive with login and file upload features.",
      siteLink: "abc.com",
      sourceCode: "github.com/abc",
      projectDemoImg: "",
    },
    {
      id: 10,
      name: "Auto Complete Typeahead",
      toolsUsed: [images.css, images.javascript, images.html],
      description:
        "Search box autocomplete, debouncing, suggestions using local storage API.",
      siteLink: "abc.com",
      sourceCode: "github.com/abc",
      projectDemoImg: "/auto-complate-typeahead.png",
    },
    {
      id: 0,
      name: "Burner Chat",
      projectDemoImg: "",
      toolsUsed: [
        images.css,
        images.javascript,
        images.html,
        images.nodeJS,
        images.expressJs,
        images.redux,
        images.react,
        images.mui,
        images.postman,
        images.reactTestingLibrary,
      ],
      description:
        "MERN chat app with 'typing...' indicator built using Socket IO.",
      features: [
        "functional components",
        "full stack app",
        "web socket implementation",
      ],
      sourceCode: "github.com/abc",
    },
    {
      id: 1,
      name: "Deliveroo",
      description: "Food devlivery app with cart features.",
      projectDemoImg: "",
      toolsUsed: [
        images.react,
        images.redux,
        images.firebase,
        images.javascript,
        images.reactTestingLibrary,
        images.css,
        images.html,
      ],
      siteLink: "abc.com",
      sourceCode: "github.com/abc",
    },
    {
      id: 2,
      name: "Netflix Clone",
      description: "Netflix clone with TMDB movie database.",
      projectDemoImg: "",
      toolsUsed: [
        images.firebase,
        images.reactRouterDom,
        images.axios,
        images.react,
        images.redux,
        images.javascript,
        images.css,
        images.html,
      ],
      siteLink: "abc.com",
      sourceCode: "github.com/abc",
    },

    {
      id: 6,
      name: "Amazon Clone",
      description:
        "Amazon clone with add products to cart features, login and logout.",
      projectDemoImg: "",
      toolsUsed: [
        images.javascript,
        images.firebase,
        images.react,
        images.reactRouterDom,
        images.redux,
        images.css,
        images.html,
        images.mui,
      ],
      siteLink: "abc.com",
    },

    {
      id: 9,
      name: "Pagination Component",
      description: "Dividing API response to descrete pages in a beautiful UI.",
      projectDemoImg: "/thumbnail-pagintion.png",
      toolsUsed: [
        images.javascript,
        images.axios,
        images.react,
        images.redux,
        images.css,
        images.html,
      ],
      siteLink: "linkedIn link",
      sourceCode: "github.com/abc",
    },
    {
      id: 9,
      description:
        "Animated Side Bar Navigation menu you use on VS Code, Code SandBox.",
      name: "Sidebar Navigation",
      projectDemoImg: "/sidebar-file-explorer.JPG",
      toolsUsed: [images.react, images.javascript, images.css, images.html],
      siteLink: "linkedIn link",
      sourceCode: "github.com/abc",
    },
    {
      id: 9,
      name: "Calendar Component",
      description:
        "Your favourite calendar app with tasks built from Vanilla JavaScript.",
      projectDemoImg: "/calendar.JPG",
      toolsUsed: [images.javascript, images.css, images.html],
      siteLink: "linked in link",
      sourceCode: "github.com/abc",
    },
    {
      id: 9,
      name: "Calculator",
      description: "Calculator app built with Vanilla JavaScript.",
      projectDemoImg: "/calculator.JPG",
      toolsUsed: [images.javascript, images.css, images.html],
      siteLink: "linked in link",
      sourceCode: "github.com/abc",
    },
    {
      id: 12,
      name: "Expense tracker",
      description: "Monitor and categorize your expenses.",
      projectDemoImg: "",
      toolsUsed: [
        images.firebase,
        images.react,
        images.javascript,
        images.css,
        images.html,
      ],
      siteLink: "site link",
      sourceCode: "github.com/abc",
    },
    {
      id: 10,
      name: "Tenzie",
      description: "Fun dice rolling game.",
      projectDemoImg: "/tenzie-game.JPG",
      toolsUsed: [images.react, images.javascript, images.css, images.html],
      siteLink: "linkedIn video link",
      sourceCode: "github.com/abc",
    },
    // {
    //   id: 3,
    //   name: "Mapty",
    //   toolsUsed: [
    //     "react png",
    //     "redux png",
    //     "mongo db",
    //     "node",
    //     "express",
    //     "tmdb",
    //   ],
    // },
    // {
    //   id: 4,
    //   name: "Natours",
    //   toolsUsed: [
    //     "react png",
    //     "redux png",
    //     "mongo db",
    //     "node",
    //     "express",
    //     "tmdb",
    //   ],
    // },
    // {
    //   id: 5,
    //   name: "Forkify",
    //   toolsUsed: [
    //     "react png",
    //     "redux png",
    //     "mongo db",
    //     "node",
    //     "express",
    //     "tmdb",
    //   ],
    // },
    // {
    //   id: 11,
    //   name: "Tinder Clone",
    //   toolsUsed: [
    //     "react png",
    //     "redux png",
    //     "mongo db",
    //     "node",
    //     "express",
    //     "tmdb",
    //   ],
    // },
    // {
    //   id: 7,
    //   name: "WhatsApp Clone",
    //   toolsUsed: [
    //     "react png",
    //     "redux png",
    //     "mongo db",
    //     "node",
    //     "express",
    //     "tmdb",
    //   ],
    // },
    // {
    //   id: 8,
    //   name: "Youtube Clone",
    //   toolsUsed: [
    //     "react png",
    //     "redux png",
    //     "mongo db",
    //     "node",
    //     "express",
    //     "tmdb",
    //   ],
    // },
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
                className="object-contain w-45 h-56 xl:h-80 mb-2 rounded-lg"
                src={project.projectDemoImg}
              />
              <div></div>
            </div>
            <div className="flex flex-col w-100 justify-start border-zinc-900 border-2 border-solid rounded-xl py-5 px-4">
              <h4 className="tracking-[4px] text-zinc-300 text-xl py-2">
                {project.name}
              </h4>
              <div className="flex space-x-2 my-1  flex-wrap xl:py-2">
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
                <p className="text-zinc-500 text-base pb-2">
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
                {project.siteLink && (
                  <a href={project.siteLink} target="_blank">
                    <button className="heroButton">Live site</button>
                  </a>
                )}
                {project.sourceCode && (
                  <a href={project.sourceCode} target="_blank">
                    <button className="heroButton">GitHub</button>
                  </a>
                )}
              </div>
              <div className="pt-4 ">
                <p className="text-zinc-500 bg-zinc-900 w-16 text-center rounded-xl">
                  {i + 1} of {projects.length}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
      <p className="absolute bottom-5 text-zinc-400 bg-zinc-900 px-5 rounded-xl py-0.5">
        swipe horizontally for more projects
      </p>
    </motion.div>
  );
};

export default Projects;
