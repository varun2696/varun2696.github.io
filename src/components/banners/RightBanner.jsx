import React from 'react'
// import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="home-img w-[300px] h-[300px] lgl:w-[450px] lgl:h-[500px] z-10 rounded-full"
        src={"https://avatars.githubusercontent.com/u/110106484?v=4"}
        alt="profilePhoto"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-3xl"></div>
    </div>
  );
}

export default RightBanner