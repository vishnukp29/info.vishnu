import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import greewish from "../assets/images/greewish.png";
import devlibro from "../assets/images/devlibro.png";
import incubation from "../assets/images/incubation.png";
import netflix from "../assets/images/netflix.gif";
import vishnu from "../assets/images/vishnu.png";
import wishns from "../assets/images/wishns.png";
import tictactoe from "../assets/images/tictactoe.png";
import project_person from "../assets/images/project_person.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: greewish,
      name: "Greewish- Ecommerce",
      github_link: "https://github.com/vishnukp29/greewish",
      live_link: "",
    },
    {
      img: devlibro,
      name: "Devlibro- Blog Application",
      github_link: "https://github.com/vishnukp29/devLibro",
      live_link: "",
    },
    {
      img: incubation,
      name: "Incubation- Slot booking",
      github_link: "https://github.com/vishnukp29/Incubation",
      live_link: "",
    },
    {
      img: netflix,
      name: "Netflix Clone",
      github_link: "https://github.com/vishnukp29/nextflixCloneReact",
      live_link: "https://netflixclone-reactapp.netlify.app/",
    },
    {
      img: vishnu,
      name: "Vishnu KP- Portfolio",
      github_link: "https://github.com/vishnukp29/vishnukp",
      live_link: "https://vishnukp.netlify.app/",
    },
    {
      img: wishns,
      name: "WishNs Photography",
      github_link: "https://github.com/vishnukp29/wishns",
      live_link: "https://wishnsfotography.netlify.app/",
    },
    {
      img: tictactoe,
      name: "Tic Tac Toe",
      github_link: "https://github.com/vishnukp29/TicTacToe-Typescript",
      live_link: "https://tstictactoe.netlify.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
