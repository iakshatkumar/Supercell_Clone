import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer class="main" role="contentinfo" data-swiftype-index="false">
      <nav class="menu social-media-menu">
        <div class="social">
          <h5>Follow us on</h5>
          <ul class="links">
            <li class="menu-193268 first">
              <a href="#" class="youtube">
                YouTube
              </a>
            </li>
            <li class="menu-922">
              <a
                href="#"
                title="Supercell on Facebook"
                class="facebook"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li class="#">
              <a href="#" title="Supercell on Instagram" class="instagram">
                Instagram
              </a>
            </li>
            <li class="#">
              <a
                href="#"
                title="Supercell on Twitter"
                class="twitter"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li class="#">
              <a href="#" title="Supercell on LinkedIn" class="linkedin">
                LinkedIn
              </a>
            </li>
            <li class="# last">
              <a href="#" class="glassdoor">
                Glassdoor
              </a>
            </li>
          </ul>
        </div>
        <div class="app-stores">
          <h5>Download our games from</h5>
          <a href="https://supr.cl/appstorescgames" class="appstore">
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/dev?id=6715068722362591614&hl=en"
            class="googleplay"
          >
            Google Play
          </a>
        </div>
      </nav>

      <nav class="menu secondary secondary-menu">
        <ul id="footer-menu" class="links">
          <li class="first">
            <a href="#">Terms of Service</a>
          </li>
          <li class="#">
            <a href="#">Privacy Policy</a>
          </li>
          <li class="#">
            <a href="#">Parent&#039;s Guide</a>
          </li>
          <li class="last">
            <a href="#">Safe and Fair Play Policy</a>
          </li>
        </ul>
      </nav>

      <div class="footer-end">
        <div class="mail">
          <address>
            <span>Supercell Oy</span>
            <span>Jätkäsaarenlaituri 1</span>
            <span>00180 Helsinki</span>
            <span>Finland</span>
          </address>
        </div>
        <div class="logo">
          <a href="#" title="Front page">
            Supercell
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
