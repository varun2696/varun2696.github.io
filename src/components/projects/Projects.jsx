import React from "react";
import { projectOne, projectThree, projectTwo, } from "../../assets/index";
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
          title="Sephora"
          des="An e-commerce website where users can buy beauty
          based products like skin care, fragrance, hair care,
          etc."
          src={projectOne}
          github={"https://github.com/varun2696/faithful-night-9583"}
          deployedLink={"https://timely-wisp-f8d982.netlify.app/"}
          teckStack={'CSS | HTML | JavaScript'}
        />

        <ProjectsCard
          title="PharmEasy"
          des="Clone of an E-commerce website PharmEasy, an online pharmacy and healthcare platform based in India."
          src={projectTwo}
          github={"https://github.com/AditiSharma00/decorous-pan-7664"}
          deployedLink={"https://pharmeasy-tan.vercel.app/"}
          teckStack={"Javascript | CSS | HTML | React | Redx | Ckakra Ui"}
        />

        <ProjectsCard
          title="Apple.com"
          des="Clone of an Apple.com, an online platform for the multinational technology company."
          src={projectThree}
          github={"https://github.com/Sagarbisht07/Perpetual-fact-6008"}
          deployedLink={"https://matrix-opal.vercel.app/"}
          teckStack={'Javascript | React | Ckakra Ui | Node | Express | MongoDb'}
        />
      </div>
    </section>
  );
};

export default Projects;
