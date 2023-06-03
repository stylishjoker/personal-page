import { FC } from "react";
import { TfiHtml5 } from "react-icons/tfi";
import { DiReact, DiCss3 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { AiFillGithub, AiFillGitlab } from "react-icons/ai";

const MySkills: FC = () => {
  return (
    <div>
      <h2 className="font-incon text-orange-400 font-bold text-center text-3xl my-10">
        My Skills
      </h2>
      <ul className="flex flex-row flex-wrap justify-center items-center">
        <li className="m-2 group bg-[#21201D] rounded-[3px] flex flex-col items-center p-4">
          <TfiHtml5 className="w-20 h-20 group-hover:text-orange-600" />
          <span className="uppercase my-2 font-bold font-incon">HTML</span>
        </li>
        <li className="m-2 group bg-[#21201D] rounded-[3px] flex flex-col items-center p-4">
          <DiReact className="w-20 h-20 group-hover:text-blue-400" />
          <span className="uppercase my-2 font-bold font-incon">ReactJs</span>
        </li>
        <li className="m-2 group bg-[#21201D] rounded-[3px] flex flex-col items-center p-4">
          <TbBrandNextjs className="w-20 h-20" />
          <span className="uppercase my-2 font-bold font-incon">nextjs</span>
        </li>
        <li className="m-2 group bg-[#21201D] rounded-[3px] flex flex-col items-center p-4">
          <SiTailwindcss className="w-20 h-20 group-hover:text-blue-500" />
          <span className="uppercase my-2 font-bold font-incon">tailwind</span>
        </li>
        <li className="m-2 group bg-[#21201D] rounded-[3px] flex flex-col items-center p-4">
          <SiJavascript className="w-20 h-20 group-hover:text-yellow-400" />
          <span className="uppercase my-2 font-bold font-incon">
            javascript
          </span>
        </li>
        <li className="m-2 group bg-[#21201D] rounded-[3px] flex flex-col items-center p-4">
          <DiCss3 className="w-20 h-20 group-hover:text-blue-500" />
          <span className="uppercase my-2 font-bold font-incon">css</span>
        </li>
        <li className="m-2 group bg-[#21201D] rounded-[3px] flex flex-col items-center p-4">
          <SiRedux className="w-20 h-20 group-hover:text-indigo-700" />
          <span className="uppercase my-2 font-bold font-incon">redux</span>
        </li>
        <li className="m-2 group bg-[#21201D] rounded-[3px] flex flex-col items-center p-4">
          <SiFirebase className="w-20 h-20 group-hover:text-yellow-400" />
          <span className="uppercase my-2 font-bold font-incon">firebase</span>
        </li>
        <li className="m-2 group bg-[#21201D] rounded-[3px] flex flex-col items-center p-4">
          <SiTypescript className="w-20 h-20 group-hover:text-blue-500" />
          <span className="uppercase my-2 font-bold font-incon">
            typescript
          </span>
        </li>
        <li className="m-2 group bg-[#21201D] rounded-[3px] flex flex-col items-center p-4">
          <AiFillGithub className="w-20 h-20" />
          <span className="uppercase my-2 font-bold font-incon">github</span>
        </li>
        <li className="m-2 group bg-[#21201D] rounded-[3px] flex flex-col items-center p-4">
          <AiFillGitlab className="w-20 h-20 group-hover:text-orange-400" />
          <span className="uppercase my-2 font-bold font-incon">gitlab</span>
        </li>
      </ul>
    </div>
  );
};
export default MySkills;
