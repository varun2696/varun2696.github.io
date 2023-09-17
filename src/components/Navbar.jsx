import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { bannerImg } from "../assets/index";
import { navLinks } from "../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      id="nav-menu"
      className="w-[98%] h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600"
    >
      <div>
        <h1 className="text-2xl font-bold text-white">VKR</h1>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <Link
              activeClass="active"
              to={"home"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link home"
            >
              {"Home"}
            </Link>
          </li>

          <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <Link
              activeClass="active"
              to={"about"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link about"
            >
              {"About"}
            </Link>
          </li>

          <li className="nav-link skills text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <Link
              activeClass="active"
              to={"skills"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {"Skills"}
            </Link>
          </li>

          <li className="nav-link projects text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <Link
              activeClass="active"
              to={"projects"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {"Projects"}
            </Link>
          </li>

          <li className="nav-link contact text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <Link
              activeClass="active"
              to={"contact"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {"Contact"}
            </Link>
          </li>

          <li className="nav-link resume text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <button id="resume-button-1">
              <a
                href="/Varun-KR-Resume.pdf"
                download="Varun-KR-Resume.pdf"
                id="resume-link-1"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1kZ12BmKJCJWiRh3YbND2zncih26N4j9h/view?usp=sharing"
                  );
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
          </li>
        </ul>


    {/* for mobile view */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-[25%] rounded-full" src={"https://avatars.githubusercontent.com/u/110106484?v=4"} alt="profile" />
                <p className="text-sm text-gray-400 mt-2">
                  Full Stack Developer
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="nav-link resume text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                  <Link
                    activeClass="active"
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1kZ12BmKJCJWiRh3YbND2zncih26N4j9h/view"
                      );
                    }}
                    target="_blank"
                  >
                    {"Resume"}
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
