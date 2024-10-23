import React from 'react';
import './Works.css';
import Msdoo from '../../img/msdoo2.png'
import Canaway from '../../img/canawaylogo.png'
import Nimplay from '../../img/nimplayLogo.jpg'
import Microverse from '../../img/microverse.png'
import Immiland from '../../img/immilandLogo.png'
import Background from '../../img/2.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
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
    </div>
    <div className="w-right">
      <motion.div
      initial={{rotate: 60}}
      whileInView={{rotate: 0}}
      viewport={{margin:'-40px'}}
      transition={transition}
      className="w-mainCircle">
        <div className="w-secCircle">
          <img src={Canaway} alt="canaway"/>
        </div>
        <div className="w-secCircle">
          <img src={Nimplay} alt="nimplay" />
        </div>
        <div className="w-secCircle">
          <img src={Msdoo} alt="nimplay" />
        </div>
        <div className="w-secCircle">
          <img src={Microverse} alt="microverse" />
        </div>
        <div className="w-secCircle">
          <img src={Immiland} alt="" />
        </div>
      </motion.div>
      <img src={Background} alt="" className="w-backCircle blueCircle"/>
    </div>
    </div>
   );
}

export default Works;
