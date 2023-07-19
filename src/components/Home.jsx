import React from "react";
import LeftBanner from "./banners/LeftBanner";
import RightBanner from "./banners/RightBanner";
const Home = () => {
  return (
    <div
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
      <RightBanner />
    </div>
  );
};

export default Home;
