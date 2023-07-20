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
      <div className="skills-card-img skillIcons">
        <SiJavascript className="skills-card-name" size="50px" />
      </div>
      <div className="skillIcons skills-card-img">
        <FaReact className="skills-card-name" size="50px" />
      </div>
      <div className="skillIcons skills-card-img">
        <SiRedux className="skills-card-name" size="50px" />
      </div>
      <div className="skillIcons skills-card-img">
        <SiTypescript className="skills-card-name" size="50px" />
      </div>
      <div className="skillIcons skills-card-img">
        <SiNodedotjs className="skills-card-name" size="50px" />
      </div>
      <div className="skillIcons skills-card-img">
        <SiMongodb className="skills-card-name" size="50px" />
      </div>
      <div className="skillIcons skills-card-img">
        <SiHtml5 className="skills-card-name" size="50px" />
      </div>
      <div className="skillIcons skills-card-img">
        <SiCss3 size={"50px"} />
      </div>
      <div className="skillIcons skills-card-img">
        <SiChakraui className="skills-card-name" size="50px" />
      </div>
      <div className="skillIcons skills-card-img">
        <SiTailwindcss className="skills-card-name"  size="50px" />
      </div>
      <div className="skillIcons skills-card-img">
        <SiGithub className="skills-card-name" size="50px" />
      </div>
    </div>
  );
};

export default Card;
