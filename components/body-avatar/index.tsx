import { FC } from "react";
import Avartar from "../avatar";

const BodyAvatar: FC = () => {
  const link =
    "https://i.pinimg.com/564x/ba/86/74/ba8674d8cf57d02584aafcc013699e94.jpg";
  const string = `
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    
    const classContainer = ["player-control"];
    
    const player_container = (nameClasses) => {
      const containerBLock = $("#player");
      const main = document.createElement("div");
      main.classList.add("player-container");
      const HTML = nameClasses.map(nameClass=>{
        return \`
          <div class = "\${nameClass}"></div>\`
      })
      main.innerHTML = HTML.join("");
      containerBLock.appendChild(main);
    }
    player_container(classContainer)
    
    const player_container_song = []`;
  return (
    <div className="relative flex justify-end p-4">
      <Avartar />
      <pre className="absolute top-0 left-0 z-[-2] text-[7px] text-orange-200 lg:text-[20px]">
        <code dangerouslySetInnerHTML={{ __html: string }} />
      </pre>
    </div>
  );
};
export default BodyAvatar;
