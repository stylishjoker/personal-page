import React, { FC, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { smoothScrollTo } from "../../utils/smoothscroll";

interface Props {
  checked: boolean;
}

const Nav: FC<Props> = ({ checked }) => {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    const target = pathname.replace("/", "");
    if (target) {
      const targetElement = document.getElementById(target);
      if (targetElement) {
        smoothScrollTo(`#${target}`);
      } else {
        console.warn(`Target element "${target}" not found.`);
      }
    }
  }, [router.pathname]);

  const handleNavClick = (target: string) => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      smoothScrollTo(`#${target}`);
      router.push(`/${target}`);
    } else {
      console.warn(`Target element "${target}" not found.`);
    }
  };

  return (
    <ul
      className={`${
        checked ? "left-0 delay-300" : `left-[-500px]`
      } absolute top-0  bg-[#1b1a17] w-screen h-screen flex flex-col z-6 items-center justify-center vm:static vm:flex-row vm:h-[auto] vm:w-[auto] ms:text-xl md:text-2xl`}
    >
      <li className="my-2 font-incon text-orange-50 capitalize vm:mx-2 hover:text-orange-400 md:mx-4">
        <a
          // onClick={() => handleNavClick("about-me")}
          href="#about-me"
        >
          about me
        </a>
      </li>
      <li className="my-2 font-incon text-orange-50 capitalize vm:mx-2 hover:text-orange-400 md:mx-4">
        <a
          // onClick={() => handleNavClick("my-skills")}
          href="#my-skills"
        >
          my skills
        </a>
      </li>
      <li className="my-2 font-incon text-orange-50 capitalize vm:mx-2 hover:text-orange-400 md:mx-4">
        <a
          // onClick={() => handleNavClick("project")}
          href="#my-project"
        >
          project
        </a>
      </li>
      <li className="my-2 font-incon text-orange-50 capitalize vm:mx-2 hover:text-orange-400 md:mx-4">
        <a
          // onClick={() => handleNavClick("contacts")}
          href="#contacts"
        >
          contact me
        </a>
      </li>
    </ul>
  );
};
export default Nav;
