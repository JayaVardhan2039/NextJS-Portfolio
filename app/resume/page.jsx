"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
const about = {
  title: "About me",
  description:
    "I am a dedicated and talented Front-End Developer specializing in creating user-friendly web applications. Expert in HTML5, CSS3, and JavaScript, with a strong emphasis on contemporary frameworks like React.js. Skilled in converting UI/UX concepts into dynamic and responsive web interfaces, ensuring compatibility across different browsers and optimizing for speed and efficiency.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jaya Vardhan"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 728 707 9294"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Telugu, Hindi"
    },
  ],
};
const experience = {
  icon: '/assets/resume/icon/badge.svg',
  title: "My Experience",
  description: "I don't have a prior experience, but I am willing to contribute a lot to gain collaborative experience.",
  items: [
    {
      company: "M K Technologies",
      position: "Web Developer Intern",
      durations: "May 2023 - June 2023",
    },
    {
      company: "GSSoC",
      position: "Contributor",
      durations: "May 2024 - Present",
    },
  ],
};
const education = {
  icon: '/assets/resume/icon/cap.svg',
  title: "My Education",
  description: "",
  items: [
    {
      institution: "Vignan's Institute Of Information and Technology, Duvvada",
      degree: "B.Tech",
      durations: "2021-2025",
    },
    {
      institution: "Narayana Junior College, Gajuwaka",
      degree: "Intermediate",
      durations: "2019-2021",
    },
    {
      institution: "D.A.V Centenary Public School, Ukkunagaram",
      degree: "CBSE Schooling",
      durations: "2012-2019",
    },
  ],
};
const skills = {
  title: "My Skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <DiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <VscVscodeInsiders />,
      name: "VS Code",
    },
    {
      icon: <TbSql />,
      name: "MySQL",
    },
  ],
};
const profiles = {
  title: "Profiles",
  description: "Here are some of my profiles on various platforms:",
  profileList: [
    {
      name: "CODECHEF",
      details: "3* | Solved 500+ problems | Highest rating: 1646",
      link: "https://www.codechef.com/users/jayavardhan",
    },
    {
      name: "LEETCODE",
      details: "Solved 200+ problems | Highest rating: 1606",
      link: "https://leetcode.com/jayavardhan",
    },
    {
      name: "HACKERRANK",
      details: "Hackos: 360 | Silver Badge for SQL",
      link: "https://www.hackerrank.com/jayavardhan",
    },
    {
      name: "GFG",
      details: "Solved 100+ problems",
      link: "https://auth.geeksforgeeks.org/user/jayavardhan",
    },
  ],
};

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold">Why Hire Me?</h3>
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">Here is my so far Career Milestone</p>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="profiles">Profiles</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap:1">
                        <span className="text-accent">{item.durations}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-0">
                        <span className="text-accent">{item.durations}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div>
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60"> {item.fieldName}</span>
                      <span className="text-xl"> {item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="profiles" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{profiles.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{profiles.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-4 max-w-[620px] mx-auto xl:mx-0">
                  {profiles.profileList.map((profile, index) => (
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3">
                      <a href={profile.link} target="_blank" rel="noopener noreferrer" className="text-xl text-accent ">
                        {profile.name}<FaLocationArrow />
                      </a>
                      <span className="text-white/60">{profile.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
