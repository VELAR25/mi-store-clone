import React from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/HotAss.css";

const HotAss = () => {
  return (
    <div className="hotass_main">
      <HashLink className="links" to="/music">
        Music Store
      </HashLink>
      <HashLink className="links" to="/smartDevice">
        Smart Devices
      </HashLink>
      <HashLink className="links" to="/home">
        Home
      </HashLink>
      <HashLink className="links" to="/lifeStyle">
        Lifestyle
      </HashLink>
      <HashLink className="links" to="mobileAccessories">
        Mobile Accessories
      </HashLink>
    </div>
  );
};

export default HotAss;
