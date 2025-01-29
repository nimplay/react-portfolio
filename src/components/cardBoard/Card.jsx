import React from "react";
import "./Card.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Card = ({ emoji, heading, details }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="card"
      style={{
        backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
        color: darkMode ? "white" : "",
      }}
    >
      <img src={emoji} alt="img" className="img" />
      <span>{heading}</span>
      <span
        style={{
          color: darkMode ? "white" : "",
        }}
      >
        {details}
      </span>
      <button className="c-button">Learn more</button>
    </div>
  );
};

export default Card;
