"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../../../public/landing-img.jpg";
import personalPhoto from "../../../public/personal-photo.jpg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useLenis } from "@/libs/react-lenis";
import { BiPaperclip } from "react-icons/bi";
import { useSpring, animated } from "@react-spring/web";
import { useLang } from "@/contexts/LangContext";
const Home = () => {
  const [spring, api] = useSpring(function () {
    return {
      from: {
        opacity: 0,
      },
      delay: 1000,
      config: {
        duration: 3000,
      },
    };
  });

  const [percent, setPercent] = useState(100);

  const lenis = useLenis(function (l) {
    console.log("calc = ", 100 + l.progress * 100);
    setPercent(100 + l.progress * 100);
  });

  const lang = useLang();

  useEffect(function () {
    api.start({
      to: {
        opacity: 1,
      },
    });
  }, []);
  return (
    <>
      <style>
        {`
        .home:before {
          background-image: url(${img.src});
          width: ${percent}%;
          height: ${percent}%;

        }
        
        `}
      </style>
      <div className="home overflow-hidden">
        <div className="h-[70px]" />

        <animated.div
          style={{
            height: "calc(100% - 80px)",
            zIndex: 99,

            ...spring,
          }}
          className="flex  items-center px-10 relative"
        >
          <div className=" flex flex-col w-[60%]">
            <h1
              className="font-bold text-[80px] "
              style={{
                lineHeight: 1.3,
              }}
            >
              Hello, I'm <span className="text-bDarkBlue">Bicher</span> <br />
              Full Stack Dev.
            </h1>
            <span className="opacity-50 text-justify">
              {lang.home.description}
            </span>
            <div className="flex gap-5">
              <button className="button flex items-center gap-3 mt-7">
                <BiPaperclip size={20} />
                {lang.home.resume}
              </button>
              <button
                className="button flex border text-bDarkBlue border-bLightBlue items-center gap-3 mt-7"
                style={{
                  background: "transparent",
                }}
              >
                <IoArrowForwardCircleOutline size={20} />
                {lang.home.viewMore}
              </button>
            </div>
          </div>

          <div className="w-[40%] flex items-center justify-center">
            <div
              className="w-[350px] rounded-full items-center flex justify-center overflow-hidden h-[350px] relative"
              style={{
                boxShadow: "0px 0px 20px 6px #1f1f1f",
              }}
            >
              <Image
                src={personalPhoto}
                alt=""
                className=" w-[120%] h-[120%] object-cover absolute left-0 top-0"
              ></Image>
            </div>
          </div>
        </animated.div>
        {/* <div className="w-full overflow-hidden h-full absolute left-0 right-0 z-0 ">
        <Image
          src={img}
          alt=""
          className=" w-[120%] h-[120%] object-cover opacity-50"
        ></Image>
      </div> */}
      </div>
    </>
  );
};

export default Home;
