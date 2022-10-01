import React from 'react';
import Toggle from '../toggle/Toggle';
import './Navbar.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {Link} from 'react-scroll'


const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper"
    style={{
      backgroundColor: darkMode ? "black" : "white",
      }}
    >
      <div className="n-left">
        <div className="n-name">Nimplay</div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
          <Link spy={true} smooth={true} to="home" activeClass="activeClass">
            <li className="li">Home</li>
          </Link>
          <Link spy={true} smooth={true} to="services" activeClass="activeClass">
            <li className="li">Services</li>
          </Link>
          <Link spy={true} smooth={true} to="experience" activeClass="activeClass">
            <li className="li">Experience</li>
          </Link>
          <Link spy={true} smooth={true} to="portfolio" activeClass="activeClass">
            <li className="li">Portfolio</li>
          </Link>
          <Link spy={true} smooth={true} to="testimonial" activeClass="activeClass">
            <li className="li">Testimonial</li>
          </Link>
          </ul>
        </div>
        <Link spy={true} smooth={true} to="contact-form" activeClass="activeClass">
        <button className="button n-button">Contact Me</button>
        </Link>
      </div>
    </div>
   );
}

export default Navbar;


