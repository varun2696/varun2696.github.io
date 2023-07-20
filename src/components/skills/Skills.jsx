import React from "react";
import Card from "./Card";
import {
  SiChakraui,
  SiCss3,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiReactrouter,
  SiRedux,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      <h1 className="flex justify-center items-center text-center p-[5%] text-4xl md:text-5xl text-gray-300 font-bold">
        My Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-6 xl:gap-10">
        <Card icon={<SiHtml5 size={"50px"} />} name={"HTML5"} />
        <Card icon={<SiCss3 size={"50px"} />} name={"CSS3"} />
        <Card icon={<SiJavascript size={"50px"} />} name={"Javascript"} />
        <Card icon={<FaReact size={"50px"} />} name={"React"} />
        <Card icon={<SiRedux size={"50px"} />} name={"Redux"} />
        <Card icon={<SiReactrouter size={"50px"} />} name={"Router"} />
        <Card icon={<SiNodedotjs size={"50px"} />} name={"Node.js"} />
        <Card icon={<SiMongodb size={"50px"} />} name={"MongoDb"} />
        <Card icon={<SiExpress size={"50px"} />} name={"Express"} />
        <Card icon={<SiChakraui size={"50px"} />} name={"Chakra"} />
        <Card icon={<SiTailwindcss size={"50px"} />} name={"Tailwind"} />
        <Card icon={<SiTypescript size={"50px"} />} name={"TypeScript"} />
        <Card icon={<SiGithub size={"50px"} />} name={"GitHub"} />
        <Card icon={<SiPostman size={"50px"} />} name={"Postman"} />
        <Card icon={<SiNpm size={"50px"} />} name={"NPM"} />
        <Card icon={<SiVisualstudiocode size={"50px"} />} name={"VSCode"} />
        <Card icon={<SiVercel size={"50px"} />} name={"Vercel"} />
        <Card icon={<SiNetlify size={"50px"} />} name={"Netlify"} />
        <Card icon={<SiRender size={"50px"} />} name={"Render"} />
      </div>
    </div>
  );
};

export default Skills;
