import logo from "../assets/kk-logo.png";
import discord from "../assets/discord-logo.png";
import twitterLogo from "../assets/twitter-logo.JPG";
import openseaLogo from "../assets/opensea-logo.JPG";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavSection = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <img src={logo} alt="" />
        </div>
        <div className="nav-center">
          <a href="#">MINT</a>
          <a href="#">ABOUT</a>
          <a href="#">TEAM</a>
          <a href="#">RWASTE</a>
        </div>
        <div className="nav-right">
          <img src={discord} alt="" />
          <img src={twitterLogo} alt="" />
          <img src={openseaLogo} alt="" />
          <button className="btn-connect">CONNECT</button>
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
