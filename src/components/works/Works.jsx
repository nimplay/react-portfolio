import React from 'react';
import './Works.css';
import Work from '../../img/Work.png'
import Background from '../../img/2.png'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'

const Works = () => {
  const transition = {duration: 4, type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return ( 
    <div className="works">
      <div className="awesome">
      <span
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "",
      }}
      >I work for all these</span>
      <span>Brands & clients</span>
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
      <button className="button s-button">Hire me</button>
    </div>
    <div className="w-right">
      <motion.div 
      initial={{rotate: 60}}
      whileInView={{rotate: 0}}
      viewport={{margin:'-40px'}}
      transition={transition}
      className="w-mainCircle">
        <div className="w-secCircle">
          <img src={Work} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Work} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Work} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Work} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Work} alt="" />
        </div>
      </motion.div>
      <img src={Background} alt="" className="w-backCircle blueCircle"/>
    </div>
    </div>
   );
}
 
export default Works;