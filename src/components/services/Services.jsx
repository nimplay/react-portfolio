import React from 'react';
import './Services.css'
import Computer from '../../img/computer.png'
import Unreal from '../../img/unreal.svg'
import Work from '../../img/Work.png'
import Card from '../cardBoard/Card';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'

const Services = () => {
  const transition = {duration: 4, type: 'spring'}
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
      >My Awesome</span>
      <span>Services</span>
      <span
       style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "",
      }}
      >My services range from web development,
        mobile applications, databases,<br />
        video game development using engines
        such as Unreal Egine or Unity Engine, <br />
        Music and sound effects for web environments.
      </span>
      <a href="https://drive.google.com/file/d/1BWzm5iECNtHo7tfXQqN-qbCd-M9zxbu-/view?usp=sharing" >
        <button className="button s-button">Download CV</button>
      </a>
    </div>
    <div className="cards">
     <motion.div
     initial={{left:'20rem', top:'-3rem'}}
     whileInView={{left:'15rem'}}
     transition={transition}
     >
       <Card
       emoji={Computer}
       heading={"Frontend Development"}
       details={"I can create a beautiful and scalable SPA using HTML, CSS, Tailwind, SASS, React, Redux, Bootstrap, Material UI, etc."}
       />
     </motion.div>
     <motion.div
     initial={{left:'-20rem', top:'14rem'}}
     whileInView={{left:'-8rem', top:'14rem'}}
     transition={transition}
     >
       <Card
       emoji={Work}
       heading={"Backend Development"}
       details={"I can develop a backend using Node.js, Ruby & Rails, Ruby, MySQL, Phytom, etc."}
       />
     </motion.div>
     <motion.div
     initial={{left:'25rem', top:'20rem'}}
     whileInView={{left:'11rem', top:'18rem'}}
     transition={transition}
     >
       <Card
       emoji={Unreal}
       heading={"App & Videogames Development"}
       details={"I can develop a mobile application using React Native, Unreal engine, Unity Engine, etc."}
       />
     </motion.div>
    </div>
     {/*Mobile version*/}
<div className="Mobile-version-cards">
     <div className="mobile-card">
      <Card
        emoji={Computer}
        heading={"Frontend Development"}
        details={"I can create a beautiful and scalable SPA using HTML, CSS, Tailwind, SASS, React, Redux, Bootstrap, Material UI, etc."}
       />
     </div>
     <div className="mobile-card">
      <Card
        emoji={Work}
        heading={"Backend Development"}
        details={"I can develop a backend using Node.js, Ruby & Rails, Ruby, MySQL, Phytom, etc."}
       />
     </div>
     <div className="mobile-card">
      <Card
        emoji={Unreal}
        heading={"App & Videogames Development"}
        details={"I can develop a mobile application using React Native, Unreal engine, Unity Engine, etc."}
       />
     </div>
   </div>
  </div>
  );
}

export default Services;
