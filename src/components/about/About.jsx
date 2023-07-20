import React from "react";

export const About = () => {
  return (
    <div
      id="about"
      className="about section w-[80%] m-auto justify-center items-center"
    >
      <h1 className="flex justify-center items-center text-center p-[5%] text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        ABOUT ME
      </h1>
      <p className="text-xl font-bodyFont p-[2%]">
        Hello, I am <span className="text-designColor">Varun KR</span> from{" "}
        <span className="text-designColor">Karnataka</span>. I have completed my
        graduation in Bachelor of Science (PCM) from Davanagere University.
      </p>
      <p
        id="user-detail-intro"
        className="text-xl font-bodyFont leading-6 tracking-wide p-[2%]"
      >
        A passionate coder who has studied Full Stack Web Development at{" "}
        <span className="text-designColor">Masai School</span> and gained over
        1000 hours of coding experience. With my knowledge and skills, I have
        built more than 10 websites. My proficiency in the{" "}
        <span className="text-designColor">MERN</span> stack and my passion for
        coding make me a valuable asset in any development team.
      </p>
    </div>
  );
};
