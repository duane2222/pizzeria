import React from "react";
import BannerImage from "../assets/pizza.jpg";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> MOON's Pizzeria </h1>
        <p> Best Pizza in Town</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
        <p> Freshly Made </p>
      </div>
      </div>

  );
}

export default Home;