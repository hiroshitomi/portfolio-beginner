import {TypeAnimation} from "react-type-animation";
import {FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
const Main = () => {
  return (
    <div id="main">
      <img
        src="../assets/bg-desktop.jpg"
        alt="bg-dev"
        className="w-full h-screen object-cover object-left scale-x-[-1]"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700] m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Hiroshi Adauto Tomioka</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
          I'm a 
            <TypeAnimation
              sequence={[
                "Front-End Developer", // Types 'One'
                1000, // Waits 1s
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{fontSize: "1em", display: "inline-block", paddingLeft: "5px"}}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaInstagram className="cursor-pointer" size={20}/>
            <FaTwitter className="cursor-pointer" size={20}/>
            <FaLinkedin className="cursor-pointer" size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
