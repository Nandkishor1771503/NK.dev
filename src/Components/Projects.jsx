import React from "react";
import { motion } from "motion/react";
import fash1 from "../images/fash1.png";
import fash2 from "../images/fash2.png";
import fash3 from "../images/fash3.png";
import res1 from "../images/res1.png";
import res2 from "../images/res2.png";
import res3 from "../images/res3.png";

function Projects() {
  const imgLeft = {
    animate: {
      rotate: -12,
      transition: { duration: 0.5, damping: 100, stiffness: 200, delay: 0.5 },
    },
  };
  const imgRight = {
    animate: {
      rotate: 12,
      transition: { duration: 0.5, damping: 100, stiffness: 200, delay: 0.5 },
    },
  };

  return (
    <>
      <div className="flex flex-col items-center  justify-center lg:gap-8">
        <div className="mb-20 lg:flex md:my-[15%] lg:mb-36 lg:my-[5%]">
          <div className="flex items-center justify-center lg:w-[100%] lg:mr-16 mb-10 gap-7 md:gap-0 lg:gap-5 mx-auto p-2">
            {" "}
            {/*Square card   lg:flex img */}
            <motion.img
              style={{ transformOrigin: "bottom" }}
              variants={imgLeft}
              whileInView="animate"
              viewport={{ once: true }}
              src={fash2}
              alt="middle"
              className="w-[45%] md:w-[40%] h-80 relative -top-2 left-40 rounded-xl"
            />
            <motion.img
              src={fash1}
              alt="right"
              className="w-[50%] md:w-[45%] h-80  z-50 rounded-xl"
            />
            <motion.img
              style={{ transformOrigin: "bottom" }}
              variants={imgRight}
              whileInView="animate"
              viewport={{ once: true }}
              src={fash3}
              alt="left"
              className="w-[45%] md:w-[40%] h-80 relative -top-2 right-40 rounded-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl mx-4 my-4 md:mt-16 md:mb-5">
              Shopping site
            </h2>
            <p className="text-xl md:text-2xl mx-4 my-4">
              This e-commerce website showcases the store's products,
              highlighting their pricing, quality, and size to provide customers
              with a wide range of options. It enhances the brand’s market
              presence with a unique design while boosting sales and ensuring an
              excellent shopping experience. Check out the link below to explore
              the site I created!
            </p>
            <a
              href="https://fashclub2.netlify.app/"
              className="text-xl md:text-2xl mx-4 my-4 underline"
              target="__blank__"
            >
              Fash Club
            </a>
          </div>
        </div>

        <div className="mb-20 lg:flex">
          <div className="flex items-center justify-center mr-10 mb-10 lg:w-[100%] gap-7 md:gap-0 lg:gap-5 p-2">
            {" "}
            {/*Square card   lg:flex img */}
            <motion.img
              style={{ transformOrigin: "bottom" }}
              variants={imgLeft}
              whileInView="animate"
              viewport={{ once: true }}
              src={res1}
              alt="middle"
              className="w-[45%] md:w-[40%] h-80 relative -top-2 left-40 rounded-xl"
            />
            <motion.img
              src={res2}
              alt="right"
              className="w-[50%] md:w-[45%] h-80  z-50 rounded-xl border-black border"
            />
            <motion.img
              style={{ transformOrigin: "bottom" }}
              variants={imgRight}
              whileInView="animate"
              viewport={{ once: true }}
              src={res3}
              alt="left"
              className="w-[45%] md:w-[40%] h-80 relative -top-2 right-40 rounded-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl mx-4 my-4 md:mt-16 md:mb-5">
              Resturant
            </h2>
            <p className="text-xl md:text-2xl mx-4 my-4">
              This project is a game-changer for small restaurants, offering
              their customers the convenience of browsing and ordering food
              directly from the website. It allows customers to select the
              quantity of their desired dishes and functions similarly to
              platforms like Swiggy or Zomato, showcasing the restaurant’s
              available menu items. Check out the link below to explore
              the site I created! 
            </p>
            <a
              href="https://jawlefoods.netlify.app/"
              className="text-xl md:text-2xl mx-4 my-4 underline"
              target="__blank__"
            >
              Resturant
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
