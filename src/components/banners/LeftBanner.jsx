import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";

const LeftBanner = () => {
  
  const [text] = useTypewriter({
    words: ["Passionate Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });


  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm
          <span className="text-designColor capitalize" id="user-detail-name">
            Varun KR
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/varun-kr-fsd96/" target='_blank'>
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://github.com/varun2696"
                target="_blank"
              >
                <FaGithub />
              </a>
            </span>
          </div>
        </div>

        <div>
          <div className='resumeLi'>
            <div>
              <FaDownload />
            </div>
            <button id="resume-button-2"> 
              <a
                href="/Varun-KR-Resume.pdf"
                download="Varun-KR-Resume.pdf"
                id="resume-link-2"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner