import React, { useState } from "react";
import { Link } from "react-router-dom";
// importing styles
import "./Nav.css";
import logo from "../assets/images/logo.png";
import supercellid from "../assets/images/sociallinks/logo_supercell_id.png";
import JSONDATA from "../data.json";

const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="menu-bar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="site-logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link className="link" to="/games">
            Games
          </Link>
          <div className="sub-menu-1">
            <ul>
              <li>
                <Link className="link" to="/games/hayday">
                  Hay Day
                </Link>
              </li>
              <li>
                <a
                  className="link"
                  href="https://supercell.com/en/games/clashofclans/"
                >
                  Clash of Clans
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://supercell.com/en/games/boombeach/"
                >
                  Boom Beach
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://supercell.com/en/games/clashroyale/"
                >
                  Clash Royale
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://supercell.com/en/games/brawlstars/"
                >
                  Brawl Starts
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a className="link">Careers</a>
          <div className="sub-menu-2">
            <ul>
              <li>
                <a
                  className="link"
                  href="https://supercell.com/en/careers/why-you-might-love-it-here/"
                >
                  Why You Might Love It Here
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://supercell.com/en/careers/our-offices/"
                >
                  Our Offices
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://supercell.com/en/careers/joining-supercell/"
                >
                  Joining Supercell
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://supercell.com/en/careers/living-helsinki/"
                >
                  Living in Helsinki
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://supercell.com/en/careers/living-shanghai/"
                >
                  Living in Shanghai
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://supercell.com/en/careers/#all"
                >
                  Open Positions
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a className="link" href="https://supercell.com/en/support/">
            Support
          </a>
        </li>
        <li>
          <a>
            <i class="icon-ellipsis-horizontal link"></i>
          </a>
          <div className="sub-menu-3">
            <ul>
              <li>
                <a className="link" href="https://supercell.com/en/news/">
                  News
                </a>
              </li>
              <li>
                <a className="link" href="https://supercell.com/en/our-story/">
                  Our Story
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://supercell.com/en/safe-fair-play/"
                >
                  Be Safe & Play Fair
                </a>
              </li>
              <li>
                <a className="link" href="https://supercell.com/en/for-media/">
                  For Media
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://supercell.com/en/investments/"
                >
                  Investments
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <div className="search-field">
        {/* <div className="supercell-id">
          <img src={supercellid} alt="supercell_id" />
        </div> */}

        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div className="sub-menu-4">
          {JSONDATA.filter((val) => {
            if (searchTerm == "") {
              // return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val, key) => {
            return (
              <ul className="result" key={key}>
                <li>{val.title}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
