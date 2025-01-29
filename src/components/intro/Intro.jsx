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
import HTML from "../../img/HTML.svg";
import Css from "../../img/css.svg";
import BoostrapIcon from "../../img/boostrap.svg";
import Tailwind from "../../img/tailwind.svg";
import Javascript from "../../img/javascript.svg";
import ReactIcon from "../../img/react.svg";
import Typescript from "../../img/typescript.svg";
import Flowbite from "../../img/flowbite-logo.png";
import Angular from "../../img/angular.svg";
import Figma from "../../img/figma.svg";
import NodeIcon from "../../img/node.svg";
import Python from "../../img/python.svg";
import Django from "../../img/django.svg";
import Flask from "../../img/flask.svg";
import FastApi from "../../img/fastapi.svg";
import Ruby from "../../img/ruby.svg";
import RubyOnRails from "../../img/Ruby-on-Rails-Logo-2004.png";
import Swagger from "../../img/swagger.svg";
import Unreal from "../../img/unreal.svg";
import Unity from "../../img/unity.svg";

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
          <div className="i-icons">
            <a
              href="https://github.com/nimplay"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} className="skill-icon" alt="Github" />
            </a>
            <a
              href="https://www.facebook.com/NimplayGame"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Facebook} className="skill-icon" alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/nimrod-acosta/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} className="skill-icon" alt="Linkedin" />
            </a>
            <a
              href="https://angel.co/u/nimrod-acosta"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Angelist} className="skill-icon" alt="Angelist" />
            </a>
            <a
              href="https://medium.com/@nimrod7day"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Medium} className="skill-icon" alt="Medium" />
            </a>
          </div>
          <span
            style={{
              backgroundColor: darkMode ? "black" : "white",
              color: darkMode ? "white" : "",
            }}
          >
            Highly Skilled FullStack Developer | Specialized in Node.js, Ruby on
            Rails, Python, Django, Fast-api, Flask, MySQL, MongoDB, PostgresQL,
            Javascript, React, Typescript, Tailwind, Boostrap & Figma.
          </span>
        </div>
        <div>
          <span className="portfolio-subtitle">My Skills</span>
          <div>
            <span>Frontend</span>
            <div>
              <img src={HTML} className="skill-icon" alt="HTML" />
              <img src={Css} className="skill-icon" alt="CSS" />
              <img src={BoostrapIcon} className="skill-icon" alt="bosstrap" />
              <img src={Tailwind} className="skill-icon" alt="tailwind" />
              <img src={Javascript} className="skill-icon" alt="Javascript" />
              <img src={ReactIcon} className="skill-icon" alt="React" />
              <img src={Typescript} className="skill-icon" alt="Typescript" />
              <img src={Flowbite} className="skill-icon" alt="flowbite" />
              <img src={Angular} className="skill-icon" alt="Angular" />
              <img src={Figma} className="skill-icon" alt="Figma" />
            </div>
          </div>
          <div>
            <span>Backend</span>
            <div>
              <img src={NodeIcon} className="skill-icon" alt="Node" />
              <img src={Python} className="skill-icon" alt="Python" />
              <img src={Ruby} className="skill-icon" alt="Ruby" />
              <img src={Typescript} className="skill-icon" alt="Typescript" />
              <img src={Django} className="skill-icon" alt="Django" />
              <img src={Flask} className="skill-icon" alt="Flask" />
              <img src={FastApi} className="skill-icon" alt="React" />
              <img src={RubyOnRails} className="skill-icon" alt="RubyOnRails" />
              <img src={Swagger} className="skill-icon" alt="Swagger" />
            </div>
          </div>
          <div>
            <span>Game Development</span>
            <div>
              <img src={Unreal} className="skill-icon" alt="Unreal" />
              <img src={Unity} className="skill-icon" alt="Unity" />
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Background} alt="Vector" className="texture" />
        <img src={Nim} alt="Boy" className="boy" />

        <motion.img
          initial={{ left: "-10%" }}
          whileInView={{ left: "-10%", top: "-6%" }}
          transition={transition}
          src={Nimplay}
          alt="img"
          className="nimplay-logo"
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ top: "2%", left: "70%" }}
          transition={transition}
        >
          <FloatingDiv image={Work} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ top: "60%", left: "0" }}
          whileInView={{ top: "65%", left: "10%" }}
          transition={transition}
        >
          <FloatingDiv image={ThumbsUp} txt1="Great Desing" txt2="Award" />
        </motion.div>

        <motion.div
          initial={{ top: "50%", left: "20%" }}
          whileInView={{ top: "60%", left: "65%" }}
          transition={transition}
        >
          <FloatingDiv image={VideoG} txt1="Game" txt2="Developer" />
        </motion.div>
      </div>
      <div className="i-right3">
        <img src={Background} alt="Vector" className="texture" />
        <img src={Nim} alt="Boy" className="boy" />

        <motion.img
          initial={{ left: "-10%" }}
          whileInView={{ left: "-10%", top: "-6%" }}
          transition={transition}
          src={Nimplay}
          alt="img"
          className="nimplay-logo"
        />

        <motion.div
          initial={{ top: "-4%", left: "60%" }}
          whileInView={{ top: "2%", left: "50%" }}
          transition={transition}
        >
          <FloatingDiv image={Work} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ top: "20rem%", left: "0" }}
          whileInView={{ top: "25rem", left: "-5%" }}
          transition={transition}
        >
          <FloatingDiv image={ThumbsUp} txt1="Great Desing" txt2="Award" />
        </motion.div>

        <motion.div
          initial={{ top: "18rem", left: "10%" }}
          whileInView={{ top: "22rem", left: "45%" }}
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
          whileInView={{ left: "-10%", top: "-60%" }}
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
