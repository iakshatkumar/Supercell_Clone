import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Card from "../Components/Card";
// importing styles
import "./Hayday.css";
import HeroImage from "../assets/images/hayday/bg_hero_hayday.jpg";
import storeone from "../assets/images/sociallinks/footer_appstore.png";
import storetwo from "../assets/images/sociallinks/footer_googleplay.png";
import storethree from "../assets/images/sociallinks/amazon-appstore-badge-english-black.png";
// contantly evolving
import brawler from "../assets/images/fp_wmg_brawlstars.png";

// social images
import facebook from "../assets/images/sociallinks/some_facebook.png";
import instagram from "../assets/images/sociallinks/some_instagram.png";
import linkedin from "../assets/images/sociallinks/some_linkedin.png";
import twitter from "../assets/images/sociallinks/some_twitter.png";
import youtube from "../assets/images/sociallinks/some_youtube.png";
// youtube images
import yt3 from "../assets/images/youtube/games_hayday_video_grouphug_thumbnail.jpg";
import yt4 from "../assets/images/youtube/games_hayday_video_hayday360_thumbnail.jpg";
import yt1 from "../assets/images/youtube/games_hayday_video_toomuchwool_thumbnail.jpg";
import yt2 from "../assets/images/youtube/games_hayday_video_cake_thumbnail.jpg";

// importing components
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

// importing api functions
import { firstParagraph, secondParagraph } from "./helper/apicalls";

const Hayday = () => {
  const [values, setValues] = useState({
    title1: "",
    description1: "",
    title2: "",
    description2: "",
  });

  const { title1, title2, description1, description2 } = values;

  const loadData = () => {
    firstParagraph().then((data) => {
      console.log(data);
      setValues({
        ...values,
        title1: data.title,
        description1: data.desc,
      });
    });

    // secondParagraph().then((data) => {
    //   console.log(data);
    //   setValues({
    //     ...values,
    //     title2: data.title,
    //     description2: data.desc,
    //   });
    // });
  };

  // CORS ERROR ARISES
  useEffect(() => {
    // loadData();
  });

  return (
    <div>
      <Nav />
      {/* hero section starts */}
      <div className="hayday-hero">
        <img src={HeroImage} alt="hayday-hero" />
      </div>
      {/* hero section ends */}
      {/* app store starts */}
      <div className="app-store">
        <div className="row">
          <div className="column">
            <img src={HeroImage} />
          </div>
          <div className="column">
            <div className="app-store-content">
              <h1>FARM WITH FRIENDS AND FAMILY </h1>
              <p>
                You don’t have to be from a farm to be a great farmer. Hay Day
                lets you get back to nature and experience the simple life of
                working the land. It’s a special game set in a real special
                place. Food grows free, people smile and the animals are always
                happy to see you. It never rains here, but the crops never die.
                And if you’re craving a little bacon, one of the pigs will be
                happy to fry some up for you. After all, what are pigs... oops,
                we mean neighbors for?
              </p>
            </div>
            <div className="app-store-links">
              <div className="app-link">
                <Link>
                  <img src={storeone} />
                </Link>
              </div>
              <div className="app-link">
                <Link>
                  <img src={storetwo} />
                </Link>
              </div>
              <div className="app-link">
                <Link>
                  <img src={storethree} />
                </Link>
              </div>
              {/* <div className="app-link">
                <Link>
                  <img src={storeone} />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* app store ends */}
      <hr></hr>
      {/* stats starts */}
      <div className="stats">
        <div className="stats-content">
          <h1>CONSTANTLY EVOLVING</h1>
          <p>
            Hay Day has been constantly evolving to offer more user-
            <br />
            friendly, consistent and fun online experiences for <br />
            Supercell gamers. There have been countless updates
            <br /> since the game launched in 2012.
          </p>
        </div>
        <div class="brawler">
          <img src={brawler} alt="brawler" />
        </div>
      </div>
      {/* stats ends */}
      {/* uptodate starts */}
      <div className="uptodate">
        <div className="uptodate-content">
          <h1>STAY UP-TO-DATE</h1>
          <p>
            To stay on top of your game, keep an eye on the in-game
            <br /> News section. Follow us on social media for the latest <br />
            chatter and sneak peeks on what the team is working on.
            <br /> Don’t be a stranger and join the conversation.
          </p>
          <div className="social">
            <h3>FOLLOW HAY DAY ON</h3>
            <div className="social-links">
              <div className="link">
                <Link>
                  <img src={youtube} />
                </Link>
              </div>
              <div className="link">
                <Link>
                  <img src={facebook} />
                </Link>
              </div>
              <div className="link">
                <Link>
                  <img src={instagram} />
                </Link>
              </div>
              <div className="link">
                <Link>
                  <img src={twitter} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* uptodate ends */}
      {/* youtube slider starts*/}
      <div className="slider">
        <Carousel itemsToShow={2}>
          <Card
            href="https://www.youtube.com/watch?v=eL7GZYOFrDc"
            src={yt1}
            title="Too Much Wool"
          />
          <Card
            href="https://www.youtube.com/watch?v=eL7GZYOFrDc"
            src={yt2}
            title="Cake"
          />
          <Card
            href="https://www.youtube.com/watch?v=eL7GZYOFrDc"
            src={yt3}
            title="Neighborhood Group Hug"
          />
          <Card
            href="https://www.youtube.com/watch?v=eL7GZYOFrDc"
            src={yt4}
            title="360 Hug"
          />
        </Carousel>
      </div>
      {/* youtube slider ends*/}
      {/* iframe for youtube starts*/}
      <div className="youtube-iframe">
      <iframe width="100%" height="615" src="https://www.youtube.com/embed/eL7GZYOFrDc" frameborder="0" allowfullscreen></iframe>
      </div>
      {/* iframe for youtube ends */}
      <Footer />
    </div>
  );
};

export default Hayday;
