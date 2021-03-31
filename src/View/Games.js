import React from "react";
import { Link } from "react-router-dom";
import Cookie from "../Components/Cookie";


import gameone from "../assets/images/hayday/games_thumbnail_hayday.jpg";
import gametwo from "../assets/images/hayday/games_thumbnail_clashofclans.jpg";
import gamethree from "../assets/images/hayday/games_thumbnail_boombeach.jpg";
import gamefour from "../assets/images/hayday/games_thumbnail_clashroyale.jpg";
import gamefive from "../assets/images/hayday/games_thumbnail_brawlstars.jpg";

// importing styles
import "./Games.css";
// importing components
import Button from "react-bootstrap/Button";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import HeroSection from "../Components/HeroSection";
const Games = () => {
  return (
    <div>
      <Nav />
      {/* hero starts */}
      <div className="hero">
        <div className="hero-content">
          <h1>GAMES</h1>
          <h4>Farm, Clash, Boom, Battle, Brawl!</h4>
          <Button>SEE LATEST</Button>
        </div>
      </div>
      {/* hero ends */}
      {/* games starts */}

      <div className="archives">
        <Link to="/games/hayday">
          <div className="archives-tile">
            <img src={gameone} alt="art of supercell" />
            <div className="archives-content">
              <span className="news">FARM WITH FRIENDS AND FAMILY</span>
              <h2>Hay Day</h2>
            </div>
          </div>
        </Link>

        <a href="https://supercell.com/en/games/clashofclans/">
          <div className="archives-tile">
            <img src={gametwo} alt="art of supercell" />
            <div className="archives-content">
              <span className="news">LEAD YOUR CLAN TO VICTORY</span>
              <h2>Clash of Clans</h2>
            </div>
          </div>
        </a>

        <a href="https://supercell.com/en/games/boombeach/">
          <div className="archives-tile">
            <img src={gamethree} alt="art of supercell" />
            <div className="archives-content">
              <span className="news">BUILD. PLAN. BOOM!</span>
              <h2>Boom Beach</h2>
            </div>
          </div>
        </a>

        <a href="https://supercell.com/en/games/clashroyale/">
          <div className="archives-tile">
            <img src={gamefour} alt="art of supercell" />
            <div className="archives-content">
              <span className="news">EPIC REAL-TIME CARD BATTLES</span>
              <h2>Clash Royale</h2>
            </div>
          </div>
        </a>

        <a href="https://supercell.com/en/games/brawlstars/">
          <div className="archives-tile">
            <img src={gamefive} alt="art of supercell" />
            <div className="archives-content">
              <span className="news">3v3 AND BATTLE ROYALE</span>
              <h2>Brawl Stars</h2>
            </div>
          </div>
        </a>
      </div>
      {/* games end */}
      <Cookie />
      <Footer />
    </div>
  );
};

export default Games;
