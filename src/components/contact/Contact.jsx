import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mf4k97g', 'template_n4cd62e', form.current, '1KCDwhIPMVYpMRVQW')
      .then((result) => {
          setDone(true); 
          e.target.reset();         
          
      }, (error) => {
        e.target.reset();  
      });
  };

  return ( 
    <div className="contact-form">
      <div className="c-left">
        <div className="awesome">
          <span
          style={{
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "",
          }}
          >Get in touch</span>
          <span>Contact Me</span>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name"/>
          <input type="text" name="user_email"  className="user" placeholder="Email"/>
          <textarea name="message" className="user-message" placeholder="Message" />
          <span>{done && 'Thanks for contacting me!'}</span>
          <input type="submit" value="Send" className="button f-button"/>
        </form>
      </div>
    </div>
   );
}
 
export default Contact;