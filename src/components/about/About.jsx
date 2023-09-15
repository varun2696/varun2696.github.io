import React from "react";

export const About = () => {
  return (
    <div
      id="about"
      className="about section w-[80%] m-auto  py-5 justify-center items-center"
    >
      <h1 className="flex justify-center items-center text-center p-[5%] text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        About Me
      </h1>
      <p className="text-xl font-bodyFont pb-[5%] leading-9">
        Hello, I am <span className="text-designColor">Varun KR</span> from{" "}
        <span className="text-designColor">Karnataka.</span> I have completed my
        graduation in Bachelor of Science (PCM) from Davanagere University.
      </p>
      <p
        id="user-detail-intro"
        className="text-xl font-bodyFont leading-9 tracking-wide"
      >
        "As a passionate coder, I've undergone comprehensive Full Stack Web Development training at
        <span className="p-2 text-designColor"> Masai School , </span>
        accumulating over 1000 hours of hands-on coding experience. During my journey, I successfully developed and launched more than 10 websites. Proficient in the
        <span className="text-designColor"> MERN</span> stack (MongoDB, Express.js, React.js, Node.js), my dedication to coding makes me a valuable asset to any development team."
      </p>
    </div>
  );
};
