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
                <Link className="link">Clash of Clans</Link>
              </li>
              <li>
                <Link className="link">Boom Beach</Link>
              </li>
              <li>
                <Link className="link">Clash Royale</Link>
              </li>
              <li>
                <Link className="link">Brawl Starts</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link className="link">Careers</Link>
          <div className="sub-menu-2">
            <ul>
              <li>
                <Link className="link">Why You Might Love It Here</Link>
              </li>
              <li>
                <Link className="link">Our Offices</Link>
              </li>
              <li>
                <Link className="link">Joining Supercell</Link>
              </li>
              <li>
                <Link className="link">Living in Helsinki</Link>
              </li>
              <li>
                <Link className="link">Living in Shanghai</Link>
              </li>
              <li>
                <Link className="link">Open Positions</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link className="link">Support</Link>
        </li>
        <li>
          <Link>
            <i class="icon-ellipsis-horizontal link"></i>
          </Link>
          <div className="sub-menu-3">
            <ul>
              <li>
                <Link className="link">News</Link>
              </li>
              <li>
                <Link className="link">Our Story</Link>
              </li>
              <li>
                <Link className="link">Be Safe & Play Fair</Link>
              </li>
              <li>
                <Link className="link">For Media</Link>
              </li>
              <li>
                <Link className="link">Investments</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <div className="search-field">
        <div className="supercell-id">
          <img src={supercellid} alt="supercell_id" />
        </div>

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
