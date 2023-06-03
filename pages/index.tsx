import { FC } from "react";
import AboutMe from "./about-me";
import MySkills from "./my-skills";

const Home: FC = () => {
  return (
    <main className="p-4 container m-auto">
      <AboutMe />
      <MySkills />
    </main>
  );
};
export default Home;
