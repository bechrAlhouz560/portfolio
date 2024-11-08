"use client";
import React, { useState } from "react";
import { useLenis } from "@/libs/react-lenis";
import { animated, useSpring } from "@react-spring/web";
const About = () => {
  const lenis = useLenis(function (lenis) {
    setOpacity(lenis.progress);
  });
  const [opacity, setOpacity] = useState(0);
  return (
    <animated.div
      className=" bg-white text-bDarkGray p-10 flex flex-col gap-5"
      style={{
        opacity,
      }}
    >
      <h1 className="text-[70px] font-bold text-bDarkBlue">About Me</h1>

      <h1 className="text-3xl  font-semibold">Summary</h1>
      <p
        className="text-justify  opacity-70 text-2xl "
        style={{
          lineHeight: 1.5,
        }}
      >
        My name is Bicher, and I am a web developer with over three years of
        experience in the industry. I hold a degree in Full Stack Web
        Development, which has equipped me with the skills necessary to create
        high-quality, business-level products. My journey in programming began
        at the age of 16 with foundational languages like Python, and by 18, I
        transitioned into freelance work. During this time, I successfully
        managed and executed various projects for clients globally, focusing on
        delivering solutions that drive business success. I am passionate about
        leveraging my expertise to develop impactful products that meet the
        evolving needs of businesses and contribute to their growth.
      </p>
      <h1 className="text-3xl font-semibold">Education</h1>
      <p
        className="text-justify  opacity-70 text-2xl "
        style={{
          lineHeight: 1.5,
        }}
      ></p>
    </animated.div>
  );
};

export default About;
