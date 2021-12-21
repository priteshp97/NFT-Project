import logo from "../assets/kk-logo.png";
import discord from "../assets/discord-logo.png";
import twitterLogo from "../assets/twitter-logo.JPG";
import openseaLogo from "../assets/opensea-logo.JPG";
import nav from "../assets/mobile-icon.jpg";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  connectWallet,
  getCurrentWalletConnected, //import here
} from "../utils/interact";

const NavSection = () => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
  const [isActive, setActive] = useState(false);

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const toggle = () => {
    setActive(!isActive);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const onMintPressed = async () => {
    //TODO: implement
  };

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
          <button
            id="walletButton"
            className="btn-connect"
            onClick={connectWalletPressed}
          >
            {walletAddress.length > 0 ? (
              String(walletAddress).substring(0, 4) +
              "..." +
              String(walletAddress).substring(38)
            ) : (
              <span>Connect</span>
            )}
          </button>
        </div>
        <div className="nav-right-mobile">
          <FontAwesomeIcon
            icon={faAlignJustify}
            className="nav-mobile"
            onClick={toggle}
          />

          <ul className={isActive ? "links show-links" : "links"}>
            <li>
              <a href="#">MINT</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">TEAM</a>
            </li>
            <li>
              <a href="#">RWASTE</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
