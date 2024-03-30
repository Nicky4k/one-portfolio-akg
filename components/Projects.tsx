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
      features: ["responsive design", "deployed using firebase CLI"],
      siteLink: "https://teslaportfolio14oct.web.app/",
      projectDemoImg: "/tesla.JPG",
    },
    {
      id: 6,
      name: "Amazon Clone",
      description:
        "Amazon clone with add products to cart features, login and logout.",
      projectDemoImg: "/amazonclone.png",
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
      features: [
        "add to cart",
        "login",
        "add new products to inventory",
        "firebase backend",
      ],
      siteLink: "https://shop-stop-app.web.app/",
    },

    {
      id: 1,
      name: "Deliveroo",
      description: "Food devlivery app with cart features.",
      projectDemoImg: "/deliveroo.JPG",
      toolsUsed: [
        images.react,
        images.redux,
        images.firebase,
        images.javascript,
        images.reactTestingLibrary,
        images.css,
        images.html,
      ],
      features: [
        "firebase integration",
        "add to cart and remove from cart",
        "state managed with Redux",
      ],
      siteLink: "https://react-eats-in.web.app/",
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
      features: [
        "results per page filter",
        "responsive design",
        "buttons responsive to total results",
      ],
      siteLink:
        "https://www.linkedin.com/posts/ashwini-react_react-react-reactnative-activity-7010258308729118720-SU1K?utm_source=share&utm_medium=member_desktop",
      sourceCode:
        "https://github.com/Nicky4k/React-Machine-Coding-Round/tree/main/Pagination/pagination",
    },
    {
      id: 9,
      description:
        "Animated Side Bar Navigation menu you use on VS Code, Code SandBox.",
      name: "Sidebar Navigation",
      projectDemoImg: "/sidebar-file-explorer.JPG",
      toolsUsed: [images.react, images.javascript, images.css, images.html],
      features: ["add, rename and delete file/folders"],
      siteLink:
        "https://www.linkedin.com/posts/ashwini-react_react-react-reactnative-activity-7007621377893552128-nWcT?utm_source=share&utm_medium=member_desktop",
      sourceCode:
        "https://codesandbox.io/s/github/Nicky4k/Sidebar-FileExplorer",
    },
    {
      id: 9,
      name: "Calendar Component",
      features: ["change months", "add tasks"],
      description:
        "Your favourite calendar app with tasks built from Vanilla JavaScript.",
      projectDemoImg: "/calendar.JPG",
      toolsUsed: [images.javascript, images.css, images.html],
      siteLink:
        "https://www.linkedin.com/posts/ashwini-react_vanillajs-ui-interview-activity-7005037042850050048-jxjP?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/Nicky4k/Vanilla-JS-UI/tree/main/CALENDAR",
    },
    {
      id: 9,
      name: "Calculator",
      description: "Calculator app built with Vanilla JavaScript.",
      projectDemoImg: "/calculator.JPG",
      toolsUsed: [images.javascript, images.css, images.html],
      siteLink:
        "https://www.linkedin.com/posts/ashwini-react_javascript-vanillajs-html-activity-7005400150835679232-vSSW?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/Nicky4k/Vanilla-JS-UI/tree/main/CALCY",
    },
    {
      id: 12,
      name: "Expense tracker",
      description: "Monitor and categorize your expenses.",
      projectDemoImg: "/expense-tracker.JPG",
      features: [
        "responsive design",
        "add and delete expenses",
        "manage expenses with ease",
      ],
      toolsUsed: [
        images.firebase,
        images.react,
        images.javascript,
        images.css,
        images.html,
      ],
      siteLink: "https://expens-trackr.web.app/",
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
      features: ["google authentication", "upload files"],
      description:
        "Smart clone of Google Drive with login and file upload features.",
      siteLink: "https://turbofueldrive.web.app/",
      projectDemoImg: "/turbodrive.JPG",
    },
    {
      id: 10,
      name: "Auto Complete Typeahead",
      toolsUsed: [images.css, images.javascript, images.html],
      description: "search IPL player names",
      features: [
        "Search box autocomplete suggestions",
        "debouncing",
        "suggestions fetched from the local storage API.",
      ],
      siteLink:
        "https://www.linkedin.com/posts/ashwini-react_hiring-remotejobs-freelancing-activity-7012056620197195776-uZVl?utm_source=share&utm_medium=member_desktop",
      sourceCode:
        "https://github.com/Nicky4k/Vanilla-JS-UI/tree/main/Autocomplete-Typeahead",
      projectDemoImg: "/auto-complate-typeahead.png",
    },

    {
      id: 0,
      name: "Burner Chat",
      projectDemoImg: "/burner.jpeg",
      toolsUsed: [
        images.css,
        images.javascript,
        images.html,
        images.nodeJS,
        images.expressJs,
        images.mongodb,
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
        "modern and responsive design",
      ],
      sourceCode: "https://github.com/Nicky4k/burner",
    },
    {
      id: 10,
      name: "Tenzie",
      description: "Fun dice rolling game.",
      projectDemoImg: "/tenzie-game.JPG",
      features: ["sleek implementation of react hooks", "responsive design"],
      toolsUsed: [images.react, images.javascript, images.css, images.html],
      siteLink:
        "https://www.linkedin.com/posts/ashwini-react_react-100daysofcode-100daysofcodechallenge-activity-7022592202367270912-9ayS?utm_source=share&utm_medium=member_desktop",
      sourceCode:
        "https://github.com/Nicky4k/FreeCodeCamp-React/tree/main/react-course",
    },
    {
      id: 15,
      name: "To Do & Test",
      toolsUsed: [
        images.react,
        images.reactTestingLibrary,
        images.jest,
        images.css,
        images.javascript,
        images.html,
      ],
      description: "To Do App with Unit and Intergation Tests.",
      features: [
        "add tasks and mark done",
        "unit tests",
        "Jest and React Testing Library",
      ],
      sourceCode: "https://github.com/Nicky4k/React-Testing-Library-App",
      projectDemoImg: "/todo-react-testing-library.JPG",
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
                alt={project.name}
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
                <p className="text-zinc-400 text-base pb-2">
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
                    <button className="heroButton">Preview</button>
                  </a>
                )}
                {project.sourceCode && (
                  <a href={project.sourceCode} target="_blank">
                    <button className="heroButton">GitHub</button>
                  </a>
                )}
              </div>
              <div className="pt-4 ">
                <p className="text-zinc-500 bg-zinc-900 w-20 text-center rounded-xl">
                  {i + 1} of {projects.length}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#4a9ad769]/10 left-0 h-[500px] -skew-y-12" />
      <p className="absolute bottom-5 text-zinc-400 bg-zinc-900 px-5 rounded-xl py-0.5">
        swipe horizontally for more projects
      </p>
    </motion.div>
  );
};

export default Projects;
