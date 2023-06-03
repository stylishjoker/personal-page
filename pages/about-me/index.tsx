import { FC } from "react";
import BodyAvatar from "@/components/body-avatar";
import { GiNinjaStar } from "react-icons/gi";

const AboutMe: FC = () => {
  return (
    <div className="flex mt-10 flex-col justify-center">
      <div className="flex flex-col sm:flex-row">
        <div className="font-incon flex flex-col items-center justify-center sm:w-[45%]">
          <h2 className="uppercase text-orange-400 font-bold text-2xl lg:text-4xl">
            Hi i'm Phan Trung Kiên
          </h2>
          <h2 className="text-2xl lg:text-3xl">Front end developer</h2>
          <p className="w-[70%] lg:text-xl">
            Front end developer looking for ideas and project himself and others
          </p>
        </div>
        <BodyAvatar />
      </div>
      <div className="mt-10 flex flex-col items-center justify-center p-4 md:flex-row ">
        <GiNinjaStar className="w-10 h-10 text-red-400 my-2 md:mr-4" />
        <p className="font-incon block text-justify md:w-[60%]">
          A few years ago, I became interested in developing websites and
          interfaces. Since then, I have been steadily improving my skills. Now
          I am developing websites and web applications to order or for myself.
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
