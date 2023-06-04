import Logo from "@/components/logo";
import { FC } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { BsTwitch } from "react-icons/bs";

const Contacts: FC = () => {
  return (
    <div
      id="contacts"
      className="flex flex-col items-center justify-center md:flex-row"
    >
      <div className="flex flex-col items-center justify-center p-4 text-center">
        <Logo />
        <p>
          If you liked my work and you need me, I&apos;m ready to talk to you
        </p>
      </div>
      <div>
        <h2 className="font-incon text-orange-400 font-bold text-center text-3xl my-4">
          Contacts
        </h2>
        <ul>
          <li className="flex my-4 items-center">
            <HiOutlineMailOpen className="w-7 h-7" />
            <span className="text-orange-400 ml-4">animetplink@gmail.com</span>
          </li>
          <li className="flex my-4 items-center">
            <AiFillGithub className="w-7 h-7" />
            <a
              className="text-orange-400 ml-4"
              href="https://github.com/stylishjoker"
            >
              stylishjoker
            </a>
          </li>
          <li className="flex my-4 items-center">
            <AiFillFacebook className="w-7 h-7" />
            <a
              className="text-orange-400 ml-4"
              href="https://www.facebook.com/nobless.anime/"
            >
              Kiên Phan
            </a>
          </li>
          <li className="flex my-4 items-center">
            <BsTwitch className="w-7 h-7" />
            <a
              className="text-orange-400 ml-4"
              href="https://www.twitch.tv/phankienepu"
            >
              Kiên Phan
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contacts;
