import React from "react";
import { projectOne, projectThree, projectTwo, projectFour } from "../../assets/index";
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-16">

        <ProjectsCard
          title="PharmEasy"
          des="A clone of PharmEasy, an online pharmacy and healthcare platform based in India."
          src={projectTwo}
          github={"https://github.com/varun2696/Pharmeasy-clone"}
          deployedLink={"https://pharmeasy-tan.vercel.app/"}
          teckStack={"Javascript | CSS | HTML | React | Redx | Ckakra Ui"}
        />

        <ProjectsCard
          title="Sephora"
          des="A clone of an e-commerce website where users can purchase beauty-based products such as skincare, fragrances, hair care, etc."
          src={projectOne}
          github={"https://github.com/varun2696/Sephora-clone"}
          deployedLink={"https://sephora-clone-c4ra.netlify.app/"}
          teckStack={'CSS | HTML | JavaScript'}
        />

        <ProjectsCard
          title="Apple.com"
          des="A clone of the Apple.com website where users can find Apple iPhones, iPads, and Macs."
          src={projectThree}
          github={"https://github.com/varun2696/Apple.com-clone"}
          deployedLink={"https://matrix-opal.vercel.app/"}
          teckStack={'Javascript | React | Ckakra Ui | Node | Express | MongoDb'}
        />

        <ProjectsCard
          title="Yotube"
          des="This is a simple YouTube clone built with React.js and styled using Tailwind CSS. It allows users to browse and watch YouTube videos."
          src={projectFour}
          github={"https://github.com/varun2696/youtube-clone"}
          deployedLink={"https://vkr-youtube-clone.vercel.app/"}
          teckStack={'Javascript | React | TailwindCss'}
        />

      </div>
    </section>
  );
};

export default Projects;
