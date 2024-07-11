'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt } from "react-icons/fa";
const info=[
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"(+91) 728 707 9294", 
  },
  {
    icon:<FaEnvelope/>,
    title:"Email",
    description:"gjvardhan992003@gmail.com", 
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:"Address",
    description:"D.NO 20-4-29/1,", 
    tsp:"Pedgantyada,Visakhapatnam,530044"
  },

];
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form action="https://formsubmit.co/gjvardhan992003@email.com" method="POST" className="flex flex-col gap-4 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
              Feel free to reach out, let's create something amazing together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="fName" name="fName" placeholder="Your FirstName"/>
                <Input type="lName" name="lName" placeholder="Your LastName"/>
                <Input type="Email" name="Email" placeholder="Your Mail-id"/>
                <Input type="Phone" name="Phone" placeholder="Your Contact Number"/>
              </div>
              <Textarea rows={3} placeholder="Express your idea here">
              </Textarea>
              <Button type="submit" size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-slate-100">{item.description}</h3>
                    <h3 className="text-slate-100">{item.tsp}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;