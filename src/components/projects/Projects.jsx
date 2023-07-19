import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PharmEasy clone"
          des="Clone of an E-commerce website PharmEasy, an online pharmacy and healthcare platform based in India."
          src={projectOne}
          github={'https://github.com/AditiSharma00/decorous-pan-7664'}
          deployedLink={'https://pharmeasy-tan.vercel.app/'}
        />

        <ProjectsCard
          title="PharmEasy clone"
          des="Clone of an E-commerce website PharmEasy, an online pharmacy and healthcare platform based in India."
          src={projectOne}
          github={'https://github.com/AditiSharma00/decorous-pan-7664'}
          deployedLink={'https://pharmeasy-tan.vercel.app/'}
        />

        <ProjectsCard
          title="PharmEasy clone"
          des="Clone of an E-commerce website PharmEasy, an online pharmacy and healthcare platform based in India."
          src={projectOne}
          github={'https://github.com/AditiSharma00/decorous-pan-7664'}
          deployedLink={'https://pharmeasy-tan.vercel.app/'}
        />
      </div>
    </section>
  );
}

export default Projects


{/* <ProjectsCard
title="E-commerce Website"
des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
src={projectTwo}
github={'https://github.com/AditiSharma00/decorous-pan-7664'}
deployedLink={'https://pharmeasy-tan.vercel.app/'}
/>
<ProjectsCard
title="Chatting App"
des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
src={projectThree}
github={'https://github.com/AditiSharma00/decorous-pan-7664'}
deployedLink={'https://pharmeasy-tan.vercel.app/'}
/> */}