import assignment from "../assets/Images/Assignment.jpg";
import radiantlab from '../assets/Images/lab.jpg';
import travel from '../assets/Images/travel.jpg'
import {  motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5}}
      className="my-20 text-center text-4xl">My Projects</motion.h1>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div 
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:-100}}
           transition={{duration:1}}
          className="w-full lg:w-1/4">
            <img
              src={assignment}
              alt=""
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div 
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:100}}
           transition={{duration:1}}
          className="w-full max-w-xl lg:w-3/4">
            <p className="mb-2 font-semibold">
              Assignment Management Application
            </p>
            <p className="mb-4 text-neutral-400">
              {" "}
              An application to manage student assignments, submissions, and
              grading
            </p>
            <div>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">React</span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Node</span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Mongodb</span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Firebase</span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Tailwind</span>
            </div>
            <div className="mt-4">
              <span className="mr-4  rounded bg-neutral-900 px-2 py-1  font-bold text-red-700">
                <a target="blank" href="https://assignly-client.web.app">Live Demo</a>
              </span>
              <span className="mr-4  rounded bg-neutral-900 px-2 py-1 text-blue-500 font-bold ">
                <a target="blank" href="https://github.com/rkshawn/Assignly">Github Link</a>
              </span>
              <span className="mr-4  rounded bg-neutral-900 px-2 py-1 text-green-500 font-bold ">
                <a target="blank" href="https://github.com/rkshawn/Assignly-server">Server Link</a>
              </span>
            </div>
          </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div 
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:-100}}
           transition={{duration:1}}
          className="w-full lg:w-1/4">
            <img
              src={radiantlab}
              alt=""
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div 
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:100}}
           transition={{duration:1}}
          className="w-full max-w-xl lg:w-3/4">
            <p className="mb-2 font-semibold">
            Pathology Management Application
            </p>
            <p className="mb-4 text-neutral-400">
              {" "}
              A system to handle pathology lab operations including test management and reporting.
            </p>
            <div>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">React</span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Node</span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Mongodb</span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Firebase</span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Tailwind</span>
            </div>
            <div className="mt-4">
              <span className="mr-4  rounded bg-neutral-900 px-2 py-1  font-bold text-red-700">
                <a target="blank" href="https://radiant-lab.web.app">Live Demo</a>
              </span>
              <span className="mr-4  rounded bg-neutral-900 px-2 py-1 text-blue-500 font-bold ">
                <a target="blank" href="https://github.com/rkshawn/Radiant-Lab">Github Link</a>
              </span>
              <span className="mr-4  rounded bg-neutral-900 px-2 py-1 text-green-500 font-bold ">
                <a target="blank" href="https://github.com/rkshawn/radiantLab-server">Server Link</a>
              </span>
            </div>
          </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div 
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:-100}}
           transition={{duration:1}}
          className="w-full lg:w-1/4">
            <img
              src={travel}
              alt=""
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div 
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:100}}
           transition={{duration:1}}
          className="w-full max-w-xl lg:w-3/4">
            <p className="mb-2 font-semibold">
            Travel Management Application
            </p>
            <p className="mb-4 text-neutral-400">
              {" "}
              A comprehensive solution for managing travel bookings, itineraries, and accommodations.
            </p>
            <div>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">React</span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Node</span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Mongodb</span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Firebase</span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Tailwind</span>
            </div>
            <div className="mt-4">
              <span className="mr-4  rounded bg-neutral-900 px-2 py-1  font-bold text-red-700">
                <a target="blank" href="https://assignment-10-client-321ad.web.app">Live Demo</a>
              </span>
              <span className="mr-4  rounded bg-neutral-900 px-2 py-1 text-blue-500 font-bold ">
                <a target="blank" href="https://github.com/yourusername/travel-management">Github Link</a>
              </span>
              <span className="mr-4  rounded bg-neutral-900 px-2 py-1 text-green-500 font-bold ">
                <a target="blank" href="https://github.com/rkshawn/Travel-Hero-server">Server Link</a>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
