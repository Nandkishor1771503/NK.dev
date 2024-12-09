import React from "react";
import { motion } from "motion/react";

import Skull from "../images/skull.png";

function Hero_sec() {
  const mainText = "Interactive Web Experiences with React,Framer & Tailwind";
  const split = mainText.split(" ");

  const parentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 0.7,
      transition: { staggerChildren: 0.2, duration: 0.357 },
    },
  };

  const childrenVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="md:flex  w-full mt-10 ">
        <div className="text-gray-500 w-[70%] md:w-[30%] lg:w-[25%]  lg:text-4xl md:text-3xl  text-2xl ml-4  lg:text-end lg:ml-10 lg:pt-16">
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {" "}
            {/*shadow-lg */}
            Having a vision to build our best
          </motion.p>
        </div>
        <motion.img
          src={Skull}
          alt=""
          className="md:w-[40%] lg:w-[55%]  md:mr-[4%] lg:mr-12 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, delay: 0.2 }}
        />
        <motion.h2
          className="text-gray-400 md:w-[20%] md:text-3xl lg:text-5xl text-[1.85rem] mr-6 my-4 text-end md:text-start md:pt-80 md:pr-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, delay: 0.8 }}
        >
          {" "}
          design & development
        </motion.h2>
      </div>

      <motion.div
        className=" w-[100%] h-24 mt-16 ml-4 text-xl md:hidden font-customSerif"
        initial={{ x: -100, opacity: 0.3 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <p>Interactive Web Experiences with React,Framer & Tailwind</p>
      </motion.div>

      <motion.div
        className="md:flex hidden  justify-center flex-shrink lg:w-full md:gap-3 text-center mt-28 md:mr-6 text-2xl lg:text-5xl md:text-3xl  
        md:opacity-30 "
        variants={parentVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {split.map((word, index) => {
          return (
            <motion.h2
              key={index}
              variants={childrenVariant} // initial="hidden"  animate="show" ( the main problem occured child animation overriding the parent animation)
            >
              {word}
            </motion.h2>
          );
        })}
      </motion.div>

      {/*Typing*/}
    </>
  );
}

export default Hero_sec;
