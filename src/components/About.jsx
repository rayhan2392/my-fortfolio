import banner from "../assets/Images/codingbanner.jpg";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:0.5}}
          className="flex items-center justify-center">
            <img className="rounded-2xl" src={banner} alt="" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <motion.p 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:0.5}}
            className="my-2 max-w-xl py-6">
              Hello! I am a dedicated and passionate junior MERN
              stack developer currently pursuing my undergraduate degree at the
              University of Rajshahi. As a self-taught developer, I have immersed
              myself in the world of web development, mastering MongoDB,
              Express.js, React, and Node.js to create dynamic and user-friendly
              web applications. My journey in coding began with a curiosity for
              technology and a relentless drive to learn. I thrive on the
              challenge of solving complex problems and am always eager to
              explore new technologies. Whether its building a responsive
              front-end interface or optimizing back-end processes, I take pride
              in delivering high-quality solutions.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
