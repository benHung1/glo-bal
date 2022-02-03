import React from "react";
import "./FooterStyles.scss";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#f8f8f8", marginRight: "2rem" }}
            />
            <div>
              <p>3-1-2 AKA SKR Houston,SL</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#f8f8f8", marginRight: "2rem" }}
              />
              +886 96741469
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#f8f8f8", marginRight: "2rem" }}
              />
              ga2006206521@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
            Reprehenderit sit quo beatae tenetur repellendus, neque voluptatum!
            Explicabo, eos.
          </p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#f8f8f8", marginRight: "2rem" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#f8f8f8", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "#f8f8f8", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
