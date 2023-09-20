import React from "react";
import vish from "../assets/images/vish.png";
import {
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoFacebookCircle,
  BiLogoTwitter,
} from "react-icons/bi";
import {FaSquareXTwitter} from "react-icons/fa6";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={vish} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>VISHNU KP</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            React JS Developer | Freelancer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <div className="text-gray-600 hover:text-white cursor-pointer ">
              <a href="https://www.linkedin.com/in/vishnukp-info/">
                <BiLogoLinkedinSquare />
              </a>
            </div>
            <div className="text-gray-600 hover:text-white cursor-pointer ">
              <a href="https://github.com/vishnukp29">
                <BiLogoGithub />
              </a>
            </div>
            <div className="text-gray-600 hover:text-white cursor-pointer ">
              <a href="https://www.instagram.com/wish.nuhh/">
                <BiLogoInstagram />
              </a>
            </div>
            <div className="text-gray-600 hover:text-white cursor-pointer ">
              <a href="https://www.facebook.com/vishnu.vishnu.1806">
                <BiLogoFacebookCircle />
              </a>
            </div>
            <div className="text-gray-600 hover:text-white cursor-pointer ">
              <a href="https://x.com/Vishnu980827450?s=20">
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
