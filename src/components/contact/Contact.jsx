import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <div id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <h1 className="flex justify-center items-center text-center p-[5%] text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        Contact Me
      </h1>
      <div className="text-center grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <span className="bannerIcon">
            <a
              id="contact-github"
              href="https://github.com/varun2696"
              target="_blank"
            >
              <SiGithub />
            </a>
          </span>
          <p>varun2696</p>
        </div>

        <div>
          <span className="bannerIcon">
            <a
              id="contact-linkedin"
              href="https://www.linkedin.com/in/varun-kr-875b37199/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <p>varun-kr</p>
        </div>

        <div>
          <span className="bannerIcon">
            <SiGmail />
          </span>
          <p id="contact-email">varunkr1996@gmail.com</p>
        </div>

        <div>
          <span className="bannerIcon">
            <BiPhoneCall />
          </span>
          <p id="contact-phone">+91 7259369805</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// const Contact = () =>
// {
//   const [username, setUsername] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");

//   // ========== Email Validation start here ==============
//   const emailValidation = () => {
//     return String(email)
//       .toLocaleLowerCase()
//       .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
//   };
//   // ========== Email Validation end here ================

//   const handleSend = (e) => {
//     e.preventDefault();
//     if (username === "") {
//       setErrMsg("Username is required!");
//     } else if (phoneNumber === "") {
//       setErrMsg("Phone number is required!");
//     } else if (email === "") {
//       setErrMsg("Please give your Email!");
//     } else if (!emailValidation(email)) {
//       setErrMsg("Give a valid Email!");
//     } else if (subject === "") {
//       setErrMsg("Please give your Subject!");
//     } else if (message === "") {
//       setErrMsg("Message is required!");
//     } else {
//       setSuccessMsg(
//         `Thank you dear ${username}, Your Messages has been sent Successfully!`
//       );
//       setErrMsg("");
//       setUsername("");
//       setPhoneNumber("");
//       setEmail("");
//       setSubject("");
//       setMessage("");
//     }
//   };
//   return (
//     <section
//       id="contact"
//       className="w-full py-20 border-b-[1px] border-b-black"
//     >
//       <div className="flex justify-center items-center text-center">
//         <Title title="CONTACT" des="Contact With Me" />
//       </div>
//       <div className="w-full">
//         <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
//           <ContactLeft />
//           <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
//             <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
//               {errMsg && (
//                 <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
//                   {errMsg}
//                 </p>
//               )}
//               {successMsg && (
//                 <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
//                   {successMsg}
//                 </p>
//               )}
//               <div className="w-full flex flex-col lgl:flex-row gap-10">
//                 <div className="w-full lgl:w-1/2 flex flex-col gap-4">
//                   <p className="text-sm text-gray-400 uppercase tracking-wide">
//                     Your name
//                   </p>
//                   <input
//                     onChange={(e) => setUsername(e.target.value)}
//                     value={username}
//                     className={`${
//                       errMsg === "Username is required!" &&
//                       "outline-designColor"
//                     } contactInput`}
//                     type="text"
//                   />
//                 </div>
//                 <div className="w-full lgl:w-1/2 flex flex-col gap-4">
//                   <p className="text-sm text-gray-400 uppercase tracking-wide">
//                     Phone Number
//                   </p>
//                   <input
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     value={phoneNumber}
//                     className={`${
//                       errMsg === "Phone number is required!" &&
//                       "outline-designColor"
//                     } contactInput`}
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-4">
//                 <p className="text-sm text-gray-400 uppercase tracking-wide">
//                   Email
//                 </p>
//                 <input
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}
//                   className={`${
//                     errMsg === "Please give your Email!" &&
//                     "outline-designColor"
//                   } contactInput`}
//                   type="email"
//                 />
//               </div>
//               <div className="flex flex-col gap-4">
//                 <p className="text-sm text-gray-400 uppercase tracking-wide">
//                   Subject
//                 </p>
//                 <input
//                   onChange={(e) => setSubject(e.target.value)}
//                   value={subject}
//                   className={`${
//                     errMsg === "Plese give your Subject!" &&
//                     "outline-designColor"
//                   } contactInput`}
//                   type="text"
//                 />
//               </div>
//               <div className="flex flex-col gap-4">
//                 <p className="text-sm text-gray-400 uppercase tracking-wide">
//                   Message
//                 </p>
//                 <textarea
//                   onChange={(e) => setMessage(e.target.value)}
//                   value={message}
//                   className={`${
//                     errMsg === "Message is required!" && "outline-designColor"
//                   } contactTextArea`}
//                   cols="30"
//                   rows="8"
//                 ></textarea>
//               </div>
//               <div className="w-full">
//                 <button
//                   onClick={handleSend}
//                   className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
//                 >
//                   Send Message
//                 </button>
//               </div>
//               {errMsg && (
//                 <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
//                   {errMsg}
//                 </p>
//               )}
//               {successMsg && (
//                 <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
//                   {successMsg}
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
