import React, { FC } from "react";
import { useRouter } from "next/router";

interface Props {
  checked: boolean;
  callback: (text: boolean) => void;
}

const Nav: FC<Props> = ({ checked, callback }) => {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <ul
      className={`${
        checked === true ? "left-0 delay-300" : `left-[-500px]`
      } absolute top-0  bg-[#1b1a17] w-screen h-screen flex flex-col z-6 items-center justify-center vm:static vm:flex-row vm:h-[auto] vm:w-[auto] ms:text-xl md:text-2xl`}
    >
      <li className="my-2 font-incon text-orange-50 capitalize vm:mx-2 hover:text-orange-400 md:mx-4">
        <a onClick={() => callback(false)} href="#about-me">
          about me
        </a>
      </li>
      <li className="my-2 font-incon text-orange-50 capitalize vm:mx-2 hover:text-orange-400 md:mx-4">
        <a onClick={() => callback(false)} href="#my-skills">
          my skills
        </a>
      </li>
      <li className="my-2 font-incon text-orange-50 capitalize vm:mx-2 hover:text-orange-400 md:mx-4">
        <a onClick={() => callback(false)} href="#my-project">
          project
        </a>
      </li>
      <li className="my-2 font-incon text-orange-50 capitalize vm:mx-2 hover:text-orange-400 md:mx-4">
        <a onClick={() => callback(false)} href="#contacts">
          contact me
        </a>
      </li>
    </ul>
  );
};
export default Nav;
