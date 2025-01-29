import React from "react";
import "./Services.css";
import Computer from "../../img/computer.png";
import Unreal from "../../img/unreal.svg";
import Work from "../../img/Work.png";
import Card from "../cardBoard/Card";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 4, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="services">
      <div className="awesome">
        <span
          style={{
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "",
          }}
        >
          My Awesome
        </span>
        <span>Services</span>
        <span
          style={{
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "",
          }}
        >
          I offer a wide range of services, including web development, <br/>mobile
          applications, and database management, ensuring scalable <br/> and
          high-performance solutions. Additionally, I specialize in video game <br/>
          development using powerful engines like Unreal Engine and Unity, <br/>
          handling everything from game mechanics to immersive visuals.
        </span>
        <a href="https://drive.google.com/file/d/1YcaC-Bxcye0H1xLjyx70woIAl8UZH3c4/view?usp=sharing">
          <button className="button s-button">View CV</button>
        </a>
      </div>
      <div className="cards">
        <motion.div
          className="box"
          initial={{ left: "20rem", top: "10rem" }}
          whileInView={{ left: "10rem", top: "16rem" }}
          transition={transition}
        >
          <Card
            emoji={Computer}
            heading={"Frontend Development"}
            details={
              "I can create a beautiful and scalable SPA using HTML, CSS, Tailwind, SASS, React, Redux, Bootstrap, Agular, Flowbite, Tailwind etc."
            }
          />
        </motion.div>
        <motion.div
          className="box"
          initial={{ left: "-35rem", top: "14rem" }}
          whileInView={{ left: "-30rem", top: "16rem" }}
          transition={transition}
        >
          <Card
            emoji={Work}
            heading={"Backend Development"}
            details={
              "I can develop a backend using Node.js, Ruby & Rails, Ruby, TypeScript, MySQL, Phytom, Django, Flask, etc."
            }
          />
        </motion.div>
        <motion.div
          className="box"
          initial={{ left: "0rem", top: "15rem" }}
          whileInView={{ left: "-10rem", top: "16rem" }}
          transition={transition}
        >
          <Card
            emoji={Unreal}
            heading={"App & Videogames Development"}
            details={
              "I can develop a mobile application using React Native, Unreal engine, Unity Engine, etc."
            }
          />
        </motion.div>
      </div>
      {/*Mobile version*/}
      <div className="Mobile-version-cards">
        <div className="mobile-card">
          <Card
            emoji={Computer}
            heading={"Frontend Development"}
            details={
              "I can create a beautiful and scalable SPA using HTML, CSS, Tailwind, SASS, React, Redux, Bootstrap, Material UI, etc."
            }
          />
        </div>
        <div className="mobile-card">
          <Card
            emoji={Work}
            heading={"Backend Development"}
            details={
              "I can develop a backend using Node.js, Ruby & Rails, Ruby, MySQL, Phytom, etc."
            }
          />
        </div>
        <div className="mobile-card">
          <Card
            emoji={Unreal}
            heading={"App & Videogames Development"}
            details={
              "I can develop a mobile application using React Native, Unreal engine, Unity Engine, etc."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
