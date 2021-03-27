import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import {
  FaGithub,
  FaLinkedinIn,
  FaGooglePlusG,
  FaUserGraduate,
} from "react-icons/fa";

// This class manages the headers (social profiles, and copyrights)
function Header() {
  return (
    <div>
      <div className="social">
        <ul>
          <a
            href="https://www.linkedin.com/in/saneel-daniel/"
            class="icon-block"
          >
            <FaLinkedinIn size={30} style={{ fill: "black" }} />
          </a>
          <a href="https://github.com/SaneelDaniel" class="icon-block">
            <FaGithub size={30} style={{ fill: "black" }} />
          </a>
          <a href="mailto:saneel.daniel07@gmail.com" class="icon-block">
            <FaGooglePlusG size={30} style={{ fill: "black" }} />
          </a>
          <a
            href="http://danielsaneeldennis--portfolio.web.app/"
            class="icon-block"
          >
            <FaUserGraduate size={30} style={{ fill: "black" }} />
          </a>
        </ul>
      </div>

      <ul className="copyright">
        <span>&copy; 2021 Saneel Daniel </span>
      </ul>
    </div>
  );
}

export default Header;
