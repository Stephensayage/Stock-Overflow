import React from "react";
import { Link } from "react-router-dom";
import "./Shared.css";

export default function Footer() {
  return (
    <footer className="footer-ctn">
      <div className="inner-ctn">
        <div className="row">
          <div className="col-title">
            <i>Web development by Stephen Sayage</i>
          </div>
        </div>

        <div className="icon-ctn">
          <img
            alt="facebook icon"
            className="social-icon fb"
            src="https://image.flaticon.com/icons/svg/733/733547.svg"
          />
          <img
            alt="instagram icon"
            className="social-icon ig"
            src="https://image.flaticon.com/icons/svg/174/174855.svg"
          />
          <a href="https://github.com/Stephensayage" target="_blank">
            <img
              alt="github icon"
              className="social-icon git"
              src="https://image.flaticon.com/icons/svg/733/733553.svg"
            />
          </a>
          <a href="https://www.linkedin.com/in/stephen-sayage/" target="_blank">
            <img
              alt="linkedin icon"
              className="social-icon li"
              src="https://image.flaticon.com/icons/svg/733/733561.svg"
            />
          </a>
          <img
            alt="pintrest icon"
            className="social-icon pin"
            src="https://image.flaticon.com/icons/svg/733/733566.svg"
          />
          <img
            alt="twitter icon"
            className="social-icon twit"
            src="https://image.flaticon.com/icons/svg/733/733579.svg"
          />
        </div>
      </div>
    </footer>
  );
}
