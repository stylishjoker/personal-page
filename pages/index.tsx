import { FC } from "react";
import AboutMe from "./about-me";
import MySkills from "./my-skills";
import MyProject from "./my-project";
import Contacts from "./contacts";

const Home: FC = () => {
  return (
    <main className="p-4 container m-auto font-incon">
      <AboutMe />
      <MySkills />
      <MyProject />
      <Contacts />
    </main>
  );
};
export default Home;
