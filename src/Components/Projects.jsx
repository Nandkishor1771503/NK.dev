import React from "react";
import { motion } from "motion/react";
import fash1 from "../images/fash1.png";
import fash2 from "../images/fash2.png";
import fash3 from "../images/fash3.png";
import res1 from "../images/res1.png"
import res2 from "../images/res2.png"
import res3 from "../images/res3.png"


function Projects() {

  const imgLeft = {
    animate : { rotate: -12 ,transition:{ duration: 0.5, damping: 100, stiffness: 200 ,delay:.2} }
  }
  const imgRight = {
    animate : { rotate: 12 ,transition:{ duration: 0.5, damping: 100, stiffness: 200 ,delay:.2} }
  }


  return (
    <>
      <div className="flex flex-col items-center justify-center lg:gap-8">
        <div className="mb-20 lg:flex md:my-[15%]  lg:my-[5%]">
          <div className="flex items-center justify-center lg:w-[100%] mb-10 gap-7 md:gap-0  mx-auto p-2">
            {" "}
            {/*Square card   lg:flex img */}
            <motion.img
              style={{ transformOrigin: "bottom" }}
              variants={imgLeft}
              whileInView="animate"
              viewport={{ once: true }}
              
              src={fash2}
              alt="middle"
              className="w-[45%] md:w-[37%] h-80 relative -top-2 left-40 rounded-xl"
            />
            <motion.img
              src={fash1}
              alt="right"
              className="w-[50%] md:w-[42%] h-80  z-50 rounded-xl"
            />
            <motion.img
              style={{ transformOrigin: "bottom" }}
              variants={imgRight}
              whileInView="animate"
              viewport={{ once: true }}
              src={fash3}
              alt="left"
              className="w-[45%] md:w-[37%] h-80 relative -top-2 right-40 rounded-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl mx-4 my-4 md:mt-16 md:mb-5">Shopping site</h2>
            <p className="text-xl md:text-2xl mx-4 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              minus itaque, accusantium a numquam hic assumenda minima et
              dolores, eveniet corporis alias, sint ipsam. Magni dolores nam
              accusantium nobis reprehenderit.
            </p>
            <a href="" className="text-xl md:text-2xl mx-4 my-4 underline">Fash Club</a>
          </div>
        </div>

        <div className="mb-20 lg:flex">
          <div className="flex items-center justify-center  mb-10 lg:w-[100%] gap-7 md:gap-0 p-2">
            {" "}
            {/*Square card   lg:flex img */}
            <motion.img
              style={{ transformOrigin: "bottom" }}
              variants={imgLeft}
              whileInView="animate"
              viewport={{ once: true }}
              src={res1}
              alt="middle"
              className="w-[45%] md:w-[37%] h-80 relative -top-2 left-40 rounded-xl"
            />
            <motion.img
              src={res2}
              alt="right"
              className="w-[50%] md:w-[42%] h-80  z-50 rounded-xl border-black border"
            />
            <motion.img
              style={{ transformOrigin: "bottom" }}
              variants={imgRight}
              whileInView="animate"
              viewport={{ once: true }}
              src={res3}
              alt="left"
              className="w-[45%] md:w-[37%] h-80 relative -top-2 right-40 rounded-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl mx-4 my-4 md:mt-16 md:mb-5">Resturant</h2>
            <p className="text-xl md:text-2xl mx-4 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              minus itaque, accusantium a numquam hic assumenda minima et
              dolores, eveniet corporis alias, sint ipsam. Magni dolores nam
              accusantium nobis reprehenderit.
            </p>
            <a href="" className="text-xl md:text-2xl mx-4 my-4 underline">Resturant</a>
          </div>
        </div>
      </div>

    </>
  );
}

export default Projects;
