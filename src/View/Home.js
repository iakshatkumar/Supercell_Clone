import React from "react";
import supercell1 from "../assets/images/home/supercell1.jpg";
import supercell2 from "../assets/images/home/sc_id_front_page.jpg";
import supercell3 from "../assets/images/home/clan_wars_news_article_0.jpg";
import supercell4 from "../assets/images/home/supercell_10y_keyart_supercell_newsarticle_hero_1500x1130px.jpg";

import "./Home.css";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Button from "react-bootstrap/Button";
import Cookie from "../Components/Cookie";

const Home = () => {
  return (
    <div>
      <Nav />

      {/* hero starts*/}
      <div className="hero">
        <div className="hero-content">
          <h1>SUPERCELL</h1>
          <p>
            Makers of Hay Day, Clash of Clans, Boom Beach, Clash Royale and
            Brawl Stars.
          </p>
          <Button>SEE LATEST</Button>
        </div>
      </div>
      {/* hero end */}

      {/* archives starts */}
      <div className="archives">
        <div className="archives-tile">
          <img src={supercell1} alt="art of supercell" />
          <div className="archives-content">
            <span className="news">NEWS</span>
            <h2>The Art of Supercell Out Now</h2>
          </div>
        </div>
        <div className="archives-tile">
          <img src={supercell2} alt="art of supercell" />
          <div className="archives-content">
            <span className="news">NEWS</span>
            <h2>Supercell ID Now in Beatstar by Space Ape</h2>
          </div>
        </div>
        <div className="archives-tile">
          <img src={supercell3} alt="art of supercell" />
          <div className="archives-content">
            <span className="news">NEWS</span>
            <h2>IIkka's Take on Supercell in 2020</h2>
          </div>
        </div>
        <div className="archives-tile">
          <img src={supercell4} alt="art of supercell" />
          <div className="archives-content">
            <span className="news">NEWS</span>
            <h2>10 Learnings from 10 Years</h2>
          </div>
        </div>
      </div>
      {/* archives end */}
      <div className="extra">
        <a href="https://supercell.com/en/news/">
          <Button variant="primary">NEWS ARCHIVES</Button>
        </a>
      </div>
      {/* games starts */}
      <div className="games">
        <div className="games-content">
          <h1>GAMES</h1>
          <p>
            Our dream is to create games that are played by as <br />
            many people as possible, enjoyed for years and <br /> remembered
            forever.
          </p>
          <Button variant="light">SEE GAMES</Button>
        </div>
      </div>
      {/* games end */}
      {/* careers starts */}
      <div className="careers">
        <div className="careers-content">
          <h1>CAREERS</h1>
          <p>
            Join us and create games that are played for years <br /> and
            remembered forever.
          </p>
          <Button className="btn" variant="light">
            SEE CAREERS
          </Button>
        </div>
      </div>
      {/* careers end */}
      <Cookie />
      <Footer />
    </div>
  );
};

export default Home;
