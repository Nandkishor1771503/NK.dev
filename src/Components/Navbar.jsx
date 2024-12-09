import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <div className="lg:sticky lg:top-0 z-50 shadow-inner">
        <div className="flex justify-between gap-10 lg:gap-[22%] md:gap-[8%] sticky top-0 ">
          {" "}
          <h1 className="m-4 md:ml-3 font-sans">NK.dev</h1>
          <nav className="md:flex hidden items-center justify-center lg:gap-12 md:gap-5 lg:text-2xl md:text-xl lg:px-12 md:px-10  rounded-b-full  bg-white/5 backdrop-blur-md backdrop-opacity-60 list-none ">
            <Link to="home" smooth={true} duration={500}>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3, damping: 2 }}
              className="cursor-pointer active:underline"
              
            >
              Home
            </motion.li>
            
            </Link>
            <Link to="about" smooth={true} duration={700}>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3, damping: 2 }}
              className="cursor-pointer active:underline"
              
            >
              About
            </motion.li>


            </Link>
            <Link to="projects" smooth={true} duration={600}>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3, damping: 2 }}
              className="cursor-pointer active:underline"
              
            >
              Project
            </motion.li>
            
            </Link>
            <Link to="contact" smooth={true} duration={1000}>
              <motion.li
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.3, damping: 2 }}
                className="cursor-pointer active:underline"
              >
                Contact
              </motion.li>
            </Link>
          </nav>
          <div className="md:flex hidden items-center justify-center md:w-[30%] md:gap-5 md:text-3xl">
            <a href="https://www.instagram.com/nktechsolutions24/" target="__blank__">
            
            <FaInstagram />
            </a>
            <a href="https://x.com/Nk_Dev07">
            
            <FaXTwitter />
            </a>
            <FaLinkedinIn />
          </div>
        </div>
        <div className="w-full bg-gray-600 opacity-65 h-[.1px] mt-2 shadow-2xl">
          <motion.div
            className="bg-yellow-500 shadow-neon-gold  h-[2px] w-[8px]  rounded-full "
            initial={{ x: "0%", opacity: 0.8 }}
            animate={{ x: "100vw", opacity: 1 }}
            transition={{ duration: 2.5 }}
          ></motion.div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
