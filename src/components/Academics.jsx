import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import gcek from '../assets/images/gcek.webp';
import ssm from '../assets/images/ssm.webp';
import dghss from '../assets/images/dghss.jpg';
import khmhss from '../assets/images/khmhss.webp';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Academics = () => {
  const academics = [
    {
      img: gcek,
      name: "Government College of Engineering, Kannur",
      year: "2016- 2020",
      course: "B.Tech in Computer Science and Engineering",
    }, 
    {
      img: ssm ,
      name: "Seethi Sahib Memorial Polytechnic College, Tirur",
      year: "2013- 2016",
      course: "Diploma in Computer Engineering",
    },
    {
      img: dghss,
      name: "Devadhar Govt. Higher Secondary School, Tanur",
      year: "2011- 2013",
      course: "Higher Secondary- Biology Science",
    },
    {
      img: khmhss,
      name: "Kunjimon Haji Memorial HSS, Alathiyur",
      year:"2010- 2011",
      course: "High School- SSLC",
    },
  ];
  return (
    <section id="education" className="py-10 text-white">
      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Academic Career</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Educational Institutes</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className=" w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
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
            {academics.map((acad_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={acad_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{acad_info.name}</h3>
                  <h3 className="text-sm my-4 text-cyan-600">{acad_info.course}</h3>
                  <div className="flex gap-3">
                    <h2
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      {acad_info.year}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Academics;
