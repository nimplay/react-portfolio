import React from "react";
import "./Intro.css";
import FloatingDiv from "../floatingDiv/FloatingDiv";
import Github from "../../img/github.svg";
import Facebook from "../../img/facebook.svg";
import Linkedin from "../../img/linkedin.svg";
import Angelist from "../../img/angelist.svg";
import Medium from "../../img/medium.svg";
import Background from "../../img/2.png";
import Nim from "../../img/Hombre_transp.png";
import Work from "../../img/Work.png";
import ThumbsUp from "../../img/thumbs-up.png";
import VideoG from "../../img/VideoG.png";
import Nimplay from "../../img/newLogo.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 4, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id="home">
      <div className="i-left">
        <div className="i-name">
          <span
            style={{
              backgroundColor: darkMode ? "black" : "white",
              color: darkMode ? "white" : "",
            }}
          >
            Hi! I'm
          </span>
          <span>Nimrod Acosta</span>
          <span
            style={{
              backgroundColor: darkMode ? "black" : "white",
              color: darkMode ? "white" : "",
            }}
          >
            Full Stack Developer with high level of experience in the web
            designing
            <br /> and apps development. I have a passion for do Quality work
          </span>
        </div>
        <div className="i-icons">
          <a href="https://github.com/nimplay" target="_blank" rel="noreferrer">
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.facebook.com/NimplayGame"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/nimrod-acosta/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://angel.co/u/nimrod-acosta"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Angelist} alt="Angelist" />
          </a>
          <a
            href="https://medium.com/@nimrod7day"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Medium} alt="Medium" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Background} alt="Vector" className="texture" />
        <img src={Nim} alt="Boy" className="boy" />

        <motion.img
          initial={{ left: "-10%" }}
          whileInView={{ left: "-10%", top: "-27%" }}
          transition={transition}
          src={Nimplay}
          alt="img"
          className="nimplay-logo"
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ top: "-14%", left: "70%" }}
          transition={transition}
        >
          <FloatingDiv image={Work} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ top: "18rem", left: "0" }}
          whileInView={{ left: "10%" }}
          transition={transition}
        >
          <FloatingDiv image={ThumbsUp} txt1="Great Desing" txt2="Award" />
        </motion.div>

        <motion.div
          initial={{ top: "12rem", left: "20%" }}
          whileInView={{ left: "65%" }}
          transition={transition}
        >
          <FloatingDiv image={VideoG} txt1="Game" txt2="Developer" />
        </motion.div>
      </div>
      <div className="i-right2">
        <img src={Background} alt="Vector" className="texture" />
        <img src={Nim} alt="Boy" className="boy" />
        <motion.img
          initial={{ left: "-10%", top: "-70%" }}
          whileInView={{ left: "-10%", top: "-70%" }}
          transition={transition}
          src={Nimplay}
          alt="img"
          className="nimplay-logo"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ top: "-10%", left: "100%" }}
          transition={transition}
        >
          <FloatingDiv image={Work} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "22rem", left: "0" }}
          whileInView={{ left: "6%", top: "22rem" }}
          transition={transition}
        >
          <FloatingDiv image={ThumbsUp} txt1="Great Desing" txt2="Award" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
