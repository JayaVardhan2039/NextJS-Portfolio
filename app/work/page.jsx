/*"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";
const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Make the necessary changes to your Next.js project on your local machine. This includes updating code, adding new features, fixing bugs, etc.",
    stack: [{ name: "dasav" }, { name: "dddsas" }, { name: "dasdss" }, { name: "dasdsds" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 1",
    description: "Make the necessary changes to your Next.js project on your local machine. This includes updating code, adding new features, fixing bugs, etc.",
    stack: [{ name: "dasav" }, { name: "dddsas" }, { name: "dasdss" }, { name: "dasdsds" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    description: "Make the necessary changes to your Next.js project on your local machine. This includes updating code, adding new features, fixing bugs, etc.",
    stack: [{ name: "dasav" }, { name: "dddsas" }, { name: "dasdss" }, { name: "dasdsds" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto flex">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-non text-white group-hover:text-accent transition-all duration-500 capitalize"> {project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>);


                })}
              </ul>
              <div className="border border-white/10"> </div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (<SwiperSlide key={index} className="w-full"><div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"></div></SwiperSlide>);
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
<Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (<SwiperSlide key={index} className="w-full"><div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"></div></SwiperSlide>);
              })}
          </Swiper>
export default Work;*/
"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full-Stack",
    title: "project 1",
    description: " Developed an online platform for programming students to share their work experiences through text, photos, videos.Enhanced user interaction by 70 % by implementing real-time liking, commenting, and chat features with Socket.io.Leveraged Firebase, Node.js, Express.js, React, and REST APIs for efficient database management, Google OAuth and JWT-based user authentication, session management using cookies and local storage, and frontend development.",
    stack:[
      { "name": "React" },
      { "name": "Next.js" },
      { "name": "Firebase" },
      { "name": "Node.js" },
      { "name": "Express.js" },
      { "name": "MongoDB" },
      { "name": "JS" },
      { "name": "TailwindCSS" },
    ],
    image: "/assets/work/devf.png",
    live: "https://devfinds-frontend.vercel.app/",
    github: "https://github.com/JayaVardhan2039/Dev-Finds",
  },
  {
    num: "02",
    category: "Full-Stack",
    title: "StackOverflow Clone",
    description: "Developed a full-stack MERN (MongoDB, Express.js, React, Node.js) StackOverflow clone, providing a platform for developers to ask questions and share knowledge. Implemented user authentication.A Clone of StackOver Flow, I implemented almost every functionalities, I just wanted to notice and show developers how StackOver-Flow works , do tasks under the hood, how tasks and queries are executing behind the scenes.",
    stack: [
      { "name": "React" },
      { "name": "Next.js" },
      { "name": "Firebase" },
      { "name": "Node.js" },
      { "name": "Express.js" },
      { "name": "MongoDB" },
      { "name": "JS" },
      { "name": "TailwindCSS" },
    ],
    image: "/assets/work/stack-overflow-clone.png",
    live: "https://stackoverflow-clone.vercel.app/",
    github: "https://github.com/JayaVardhan2039/StackoverFlow-Clone",
},
  {
    num: "03",
    category: "Front-end",
    title: "project 3",
    description: "This e-grocery web application is developed to improve the efficiency and reach of local merchants, the application features an intuitive user interface and comprehensive functionality, delivering a seamless shopping experience for users",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "jayavardhan2039.github.io/On-Market/",
    github: "https://github.com/JayaVardhan2039/On-Market",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition:{delay:2.4,duration:0.4,ease:"easeIn"},
    }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"> {project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent ">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"> </div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>


            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alert=""/>
                      </div>
                    </div>
                    </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"/>
                  
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Work;