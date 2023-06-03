"use client";

import React, { FC, useState, useEffect } from "react";
import Logo from "../logo";
import MenuIcon from "../icon-menu";
import Nav from "../nav";

const Header: FC = () => {
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY);
    };
    // if (window.scrollY === 0) {
    window.addEventListener("scroll", handleScroll);
    // }
    if (window.scrollY > 1) {
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });
  return (
    <div
      className={`sticky top-0 z-[1000] bg-[#1b1a17] ${
        show !== 0 ? "border-b border-orange-200 shadow-orange-600" : ""
      }`}
    >
      <div className="flex justify-between items-center relative p-2 vm:flex-col sm:flex-row sm:justify-around sm:p-4">
        <Logo />
        <MenuIcon callback={(text: boolean) => setChecked(text)} />
        <Nav checked={checked} />
      </div>
    </div>
  );
};

export default Header;
