"use client";
import React, { useState } from "react";
import style from "./header.module.css";
import { useLenis } from "@/libs/react-lenis";
import {
  useActiveLangName,
  useLang,
  useSetActiveLang,
} from "@/contexts/LangContext";
const Header = () => {
  const [bgSet, setBgSet] = useState(false);
  const lenis = useLenis(function (lenis) {
    setBgSet(!!lenis.progress);
  });
  const lang = useLang();

  const activeLangName = useActiveLangName();
  const setActiveLang = useSetActiveLang();
  return (
    <div
      className={style["header"]}
      style={{
        backgroundColor: bgSet ? "#1A1A1D60" : undefined,
      }}
    >
      <h1 className="font-bold text-xl ">
        BicherCV<span className="text-bDarkBlue">.com</span>
      </h1>
      <div className="mx-auto flex gap-10">
        <div className={style["nav-item"]}>
          <span>{lang.header.home}</span>
        </div>
        <div className={style["nav-item"]}>
          <span>{lang.header.about}</span>
        </div>
        <div className={style["nav-item"]}>
          <span>{lang.header.services}</span>
        </div>
        <div className={style["nav-item"]}>
          <span>{lang.header.projects}</span>
        </div>
        <div className={style["nav-item"]}>
          <span>{lang.header.contact}</span>
        </div>
      </div>

      <div className="flex gap-3">
        <span
          onClick={function () {
            setActiveLang("en");
          }}
          className={
            "opacity-50 p-1 px-2 rounded hover:opacity-30 cursor-pointer " +
            (activeLangName === "en" && "bg-bLightBlue opacity-100")
          }
        >
          EN
        </span>
        <span
          onClick={function () {
            setActiveLang("fr");
          }}
          className={
            "opacity-50 p-1 px-2 rounded hover:opacity-30 cursor-pointer " +
            (activeLangName === "fr" && "bg-bLightBlue opacity-100")
          }
        >
          FR
        </span>
      </div>
    </div>
  );
};

export default Header;
