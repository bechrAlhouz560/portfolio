import React from "react";
import style from "./header.module.css";
const Header = () => {
  return (
    <div className={style["header"]}>
      <h1 className="font-bold text-xl ">
        BicherCV<span className="text-bDarkBlue">.com</span>
      </h1>
      <div className="mx-auto flex gap-10">
        <div>
          <span>Home</span>
        </div>
        <div>
          <span>About</span>
        </div>
        <div>
          <span>Services</span>
        </div>
        <div>
          <span>Projects</span>
        </div>
        <div>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
