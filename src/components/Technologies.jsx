import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import {  motion } from "framer-motion";
const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:100}}
       transition={{duration:1.5}}
      className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
        Technologies I am comfortable with
      </motion.h1>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
           variants={iconVariants(2.5)}
           initial='initial'
           animate='animate'
           className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-cyan-400"></FaReact>
        </motion.div>
        <motion.div 
         variants={iconVariants(3)}
         initial='initial'
         animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500"></SiMongodb>
        </motion.div>
        <motion.div 
         variants={iconVariants(5)}
         initial='initial'
         animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNode className="text-7xl text-[#339933]"></FaNode>
        </motion.div>
        <motion.div 
         variants={iconVariants(4)}
         initial='initial'
         animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-[#0EA5E9]"></RiTailwindCssFill>
        </motion.div>
        <motion.div 
         variants={iconVariants(3)}
         initial='initial'
         animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoFirebase className="text-7xl text-[#FF8F00]"></IoLogoFirebase>
        </motion.div>
        <motion.div 
         variants={iconVariants(2.5)}
         initial='initial'
         animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3 className="text-7xl text-[#2965F1]"></FaCss3>
        </motion.div>
        <motion.div 
         variants={iconVariants(2)}
         initial='initial'
         animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-[#EF652A]"></FaHtml5>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
