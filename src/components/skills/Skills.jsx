import React from "react";
import Card from "./Card";

const Skills = () => {
  return (
    <div id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      <h1 className="flex justify-center items-center text-center p-[5%] text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        MY SKILLS
      </h1>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Skills;
