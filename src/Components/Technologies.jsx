import React from "react";
import { motion } from "motion/react";

function Technologies() {
  const parentVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 ,delay:0.5 } },
  };

  const childrenVariant = {
    hidden: { y: 0, opacity: 0 },
    show: { y: -100, opacity: 1 },
  };

  const imgSource = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
  ];

  return (
    <>
    <h1 className="my-7 md:ml-10 ml-5 md:text-4xl text-3xl">Technologies i use</h1>
    <motion.div
      className="grid grid-cols-2 md:p-16 lg:grid lg:grid-cols-4 items-center justify-center p-16 pb-0 lg:pl-36 gap-8 lg:gap-16  mt-[10%]"
      variants={parentVariant}
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}
    >
      {imgSource.map((src, i) => {
        return (
          <motion.img
            key={i}
            src={src}
            className=" md:h-56 h-44 mt-10 lg:p-5 lg:mt-0 shadow-xl rounded-2xl "
            alt="React"
            variants={childrenVariant}
            />
          );
      })}
    </motion.div>
    </>
  );
}

export default Technologies;
