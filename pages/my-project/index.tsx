import { FC } from "react";

const MyProject: FC = () => {
  return (
    <div
      id="my-project"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h2 className="font-incon text-orange-400 font-bold text-center text-3xl my-10">
        My Project
      </h2>
      <ul className="flex flex-col flex-wrap justify-center items-center font-incon sm:flex-row">
        <li className="m-4 w-80 bg-[#21201D] p-4 flex flex-col items-center rounded-[6px]">
          <h2 className="text-orange-400 font-bold text-2xl my-2">New blogs</h2>
          <span className="uppercase my-2">Html css js</span>
          <hr className="w-[80%] border-orange-400" />
          <p className="text-justify my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eligendi omnis id eos ex dolore soluta consectetur sit aliquam
            repudiandae, qui commodi assumenda nemo cupiditate sed! Sed
            accusantium explicabo doloribus!
          </p>
          <button className="bg-black px-4 py-2 rounded-xl hover:text-orange-400">
            see more
          </button>
        </li>
        <li className="m-4 w-80 bg-[#21201D] p-4 flex flex-col items-center rounded-[6px]">
          <h2 className="text-orange-400 font-bold text-2xl my-2">New blogs</h2>
          <span className="uppercase my-2">Html css js</span>
          <hr className="w-[80%] border-orange-400" />
          <p className="text-justify my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eligendi omnis id eos ex dolore soluta consectetur sit aliquam
            repudiandae, qui commodi assumenda nemo cupiditate sed! Sed
            accusantium explicabo doloribus!
          </p>
          <button className="bg-black px-4 py-2 rounded-xl hover:text-orange-400">
            see more
          </button>
        </li>
        <li className="m-4 w-80 bg-[#21201D] p-4 flex flex-col items-center rounded-[6px]">
          <h2 className="text-orange-400 font-bold text-2xl my-2">New blogs</h2>
          <span className="uppercase my-2">Html css js</span>
          <hr className="w-[80%] border-orange-400" />
          <p className="text-justify my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eligendi omnis id eos ex dolore soluta consectetur sit aliquam
            repudiandae, qui commodi assumenda nemo cupiditate sed! Sed
            accusantium explicabo doloribus!
          </p>
          <button className="bg-black px-4 py-2 rounded-xl hover:text-orange-400">
            see more
          </button>
        </li>
      </ul>
    </div>
  );
};
export default MyProject;
