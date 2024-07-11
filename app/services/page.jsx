"use client";

import { GiArtificialHive } from "react-icons/gi";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: "Front-end development",
    description: "Crafting visually appealing and user-friendly interfaces that enhance user engagement and experience.",
    href: ""
  },
  {
    num: '02',
    title: "UI-UX,Logo design",
    description: "Designing Creating stylish UIs and logos that embody your brand's identity and resonate with your work audit.",
    href: ""
  },
  {
    num: '03',
    title: "Back-end development",
    description: "Building scalable and efficient server-side architectures to support complex business logic and data processing.",
    href: ""
  },
  {
    num: '04',
    title: "Content Creation",
    description: "Curating compelling and informative content across various mediums,includes Blog writing,Photography etc.",
    href: ""
  },
];
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">                  
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <GiArtificialHive className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p2 className="text-white/60">{service.description}</p2>
                <div className="border-b border-white/20 w-full"></div>
                </div>

            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;