import React from "react";

export const About = () => {
  return (
    <div
      id="about"
      className="w-[80%] m-auto justify-center items-center text-center"
    >
      <h1 className="about section flex justify-center items-center text-center p-[5%] text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        ABOUT ME
      </h1>
      <p
        id="user-detail-intro"
        className="text-xl font-bodyFont leading-6 tracking-wide"
      >
        A passionate coder who has studied MERN at Masai School and gained over
        1000 hours of coding experience. With my knowledge and skills, I have
        built more than 10 websites. My proficiency in the MERN stack and my
        passion for coding make me a valuable asset in any development team.
      </p>
    </div>
  );
};
