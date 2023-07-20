import React from "react";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <h1 className="flex justify-center items-center text-center p-[5%] text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PharmEasy clone"
          des="Clone of an E-commerce website PharmEasy, an online pharmacy and healthcare platform based in India."
          src={projectOne}
          github={"https://github.com/AditiSharma00/decorous-pan-7664"}
          deployedLink={"https://pharmeasy-tan.vercel.app/"}
        />

        <ProjectsCard
          title="PharmEasy clone"
          des="Clone of an E-commerce website PharmEasy, an online pharmacy and healthcare platform based in India."
          src={projectOne}
          github={"https://github.com/AditiSharma00/decorous-pan-7664"}
          deployedLink={"https://pharmeasy-tan.vercel.app/"}
        />

        <ProjectsCard
          title="PharmEasy clone"
          des="Clone of an E-commerce website PharmEasy, an online pharmacy and healthcare platform based in India."
          src={projectOne}
          github={"https://github.com/AditiSharma00/decorous-pan-7664"}
          deployedLink={"https://pharmeasy-tan.vercel.app/"}
        />
      </div>
    </section>
  );
};

export default Projects;
