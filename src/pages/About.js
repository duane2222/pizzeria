import React from "react";
import Dough from "../assets/dough.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Dough})` }}
      ></div>
      <div className="aboutBottom">
        <h1> About Us</h1>
        <p>
          Thank you for choosing Moon's Pizzeria. We are a family owned and family operated pizza parlour. We were founded in 2022 and have been serving locals since. Every pizza is order made and baked in our ovens. Thank you for choosing us. 
        </p>
      </div>
    </div>
  );
}

export default About;