"use client";

import React, { FC, useState, useEffect } from "react";
import Logo from "../logo";
import MenuIcon from "../icon-menu";
import Nav from "../nav";
import Link from "next/link";

const Header: FC = () => {
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
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
        <Link href={"/"}>
          <Logo />
        </Link>
        <MenuIcon
          checked={checked}
          callback={(text: boolean) => setChecked(text)}
        />
        <Nav callback={(text: boolean) => setChecked(text)} checked={checked} />
      </div>
    </div>
  );
};

export default Header;
