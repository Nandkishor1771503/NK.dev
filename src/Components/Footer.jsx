import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Logo from "../images/Logo12.png";

function Footer() {
  return (
    <footer className=" bg-white/5 backdrop-blur-md backdrop-opacity-60 mt-14 lg:mt-20 py-6 md:h-80 lg:h-80">
      <div className="flex flex-col md:flex-row gap-12 p-2 items-center justify-center">
        {/* <h1 className="md:text-8xl ">NK.dev</h1> */}
        <img
          src={Logo}
          alt=""
          className="w-[80%] md:w-[45%] lg:w-[25%] md:h-64 rounded-2xl lg:mx-[10%] shadow-2xl"
        />
        <div className="">
          <h2 className="text-xl md:text-2xl lg:text-3xl md:mb-14 mb-8">
            One click uplifts your brand, vibrant and unique.
          </h2>{" "}
          <hr className="my-4 md:my-6" />
          {/*One click make your brand higher & colourful*/}
          <div className="flex text-5xl items-center justify-center md:text-6xl gap-10">
            <a href="" alt="instagram">
              <FaInstagram />
            </a>
            <a href="" alt="twitter">
              <FaXTwitter />
            </a>
            <a href="" alt="linkedin">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
