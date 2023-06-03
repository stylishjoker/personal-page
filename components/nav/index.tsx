import React, { FC } from "react";
import Link from "next/link";

interface Props {
  checked: boolean;
}

const Nav: FC<Props> = ({ checked }) => {
  return (
    <ul
      className={`${
        checked ? "left-0 delay-300" : `left-[-500px]`
      } absolute top-0  bg-[#1b1a17] w-screen h-screen flex flex-col z-6 items-center justify-center vm:static vm:flex-row vm:h-[auto] vm:w-[auto] ms:text-xl md:text-2xl`}
    >
      <li className="my-2 font-incon text-orange-50 capitalize vm:mx-2 hover:text-orange-400 md:mx-4">
        <Link href="/about-me">about me</Link>
      </li>
      <li className="my-2 font-incon text-orange-50 capitalize vm:mx-2 hover:text-orange-400 md:mx-4">
        <Link href="/my-skills">my skills</Link>
      </li>
      <li className="my-2 font-incon text-orange-50 capitalize vm:mx-2 hover:text-orange-400 md:mx-4">
        <Link href="/project">project</Link>
      </li>
      <li className="my-2 font-incon text-orange-50 capitalize vm:mx-2 hover:text-orange-400 md:mx-4">
        <Link href="/contacts">contact me</Link>
      </li>
    </ul>
  );
};
export default Nav;