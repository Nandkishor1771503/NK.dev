import React from "react";
import NK from "../images/NK.png";
import Paint from "../images/paint.png";
import { split } from "postcss/lib/list";
import { motion } from "motion/react";

function About_me() {
  const Tilte = "Web" + "_" + "developer";
  const dev = Tilte.split("");

  const parentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 0.7,
      transition: { staggerChildren: 0.1 },
    },
  };

  const childrenVariant = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <>
      <h1 className="mb-4 ml-4 text-gray-400 md:mt-16 mt-3 ">About me</h1>
      <motion.div className="lg:flex  bg-white/5 w-[95%] mx-auto my-14 backdrop-blur-md backdrop-opacity-60 p-10 rounded-3xl shadow-xl- z-50 " 
      initial={{y:50,opacity:.1}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:2}}
      viewport={{ once: true }}


      >
        <img src={NK} alt="Dp" className="w-[75%] lg:w-[90%] h-80 lg:h-96 m-auto order-2 " />
        <div>
        <motion.div
          className="flex  md:text-5xl text-4xl my-10 font-light  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent "
          variants={parentVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {dev.map((letter, index) => {
            return (
              <motion.h2 key={index} variants={childrenVariant}>
                {letter}
              </motion.h2>
            );
          })}
        </motion.div>
        <motion.p className="text-lg lg:text-2xl lg:leading-9 lg:w-[75%] md:my-10 md:text-2xl" initial={{opacity:0}} whileInView={{opacity:.7}} viewport={{ once: true }} transition={{duration:4.5}}> 
          <span className="text-3xl font-semibold md:text-4xl md:mb-24">Hey, </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem et accusamus commodi, iusto inventore labore tempore!
          Nesciunt voluptatum, corporis ipsam, illum quam consequuntur
          necessitatibus pariatur, magnam voluptatem earum nostrum fuga!
        </motion.p>
        </div>
      </motion.div>
    </>
  );
}

export default About_me;
