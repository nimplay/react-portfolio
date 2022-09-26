import React from 'react';
import './Footer.css';
import TheFooter from '../../img/foot.png';

const Footer = () => {
  return ( 
    <div className="footer">
      <img src={TheFooter} alt="img" className="footer-img"/>
    </div>
   );
}
 
export default Footer;