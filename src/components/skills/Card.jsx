import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiChakraui,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Card = ({ title, des, icon }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-6 xl:gap-10">
      <div className="skillIcons">
        <SiJavascript size="50px" />
      </div>
      <div className="skillIcons">
        <FaReact size="50px" />
      </div>
      <div className="skillIcons">
        <SiRedux size="50px" />
      </div>
      <div className="skillIcons">
        <SiTypescript size="50px" />
      </div>
      <div className="skillIcons">
        <SiNodedotjs size="50px" />
      </div>
      <div className="skillIcons">
        <SiMongodb size="50px" />
      </div>
      <div className="skillIcons">
        <SiHtml5 size="50px" />
      </div>
      <div className="skillIcons">
        <SiCss3 size={"50px"} />
      </div>
      <div className="skillIcons">
        <SiChakraui size="50px" />
      </div>
      <div className="skillIcons">
        <SiTailwindcss size="50px" />
      </div>
      <div className="skillIcons">
        <SiGithub size="50px" />
      </div>
    </div>
  );
};

export default Card;
