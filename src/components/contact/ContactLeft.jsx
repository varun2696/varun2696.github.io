import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Varun KR</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        {/* <p className="text-base text-gray-400 tracking-wide">
          Love to code.
        </p> */}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span id="contact-phone" className="text-lightText">+91 7259369805</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span id="contact-email" className="text-lightText">varunkr1996@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" id="contact-github">
            <a href="https://github.com/varun2696" target='_blank'>
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon" id="contact-linkedin">
            <a href="https://www.linkedin.com/in/varun-kr-875b37199/" target='_blank'>
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft