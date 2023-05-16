import React from "react";
import "../styles/Footer.css";

import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";

const sync = <span class="material-symbols-outlined">sync</span>;
const shield = <span class="material-symbols-outlined">verified_user</span>;
const mapp = <span class="material-symbols-outlined">map</span>;

const Footer = ({ footer }) => {
  return (
    <div class="footer">
      <div className="PreFooter">
        <div className="pre_1">
          {sync}
          <div className="_in">
            <p>
              <b>Hassle-free Replacement</b> 10-day easy replacement policy on
              mi.com
            </p>
          </div>
        </div>
        <div className="pre_1">
          {shield}
          <div className="_in">
            <p>
              <b>100% secure payments</b>
              We support Cards, Wallets, EMI and COD
            </p>
          </div>
        </div>
        <div className="pre_1">
          {mapp}
          <div className="_in">
            <p>
              <b>Vast Service network</b>
              1000 Mi Service-centers across 600 cities
            </p>
          </div>
        </div>
      </div>
      <div className="PreFooter2">
        <div className="foot2_1">
          <h5>LET'S STAY IN TOUCH</h5>
          <p>Get updates on sales specials and more</p>
        </div>

        <div className="foot2_2">
          <input type="email" placeholder="Enter Email Address" />
          <p>Thanks. You're on our email list for special offers.</p>
        </div>

        <div className="foot2_3">
          <h5>FOLLOW MI</h5>
          <p>We want to hear from you !</p>
        </div>
        <div className="foot2_4">
          <a href="https://www.instagram.com">
            <AiFillInstagram />
          </a>
          <a href="https://www.youtube.com">
            <AiFillYoutube />
          </a>
          <a href="https://www.twitter.com">
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.facebook.com">
            <AiFillFacebook />
          </a>
        </div>
      </div>
      <div className="PreFooter3">
        <div className="foot3">
          <p>SUPPORT</p>
          {footer.support.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="foot3">
          <p>SHOP AND LEARN</p>
          {footer.shopAndLearn.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="foot3">
          <p>RETAIL STORE</p>
          {footer.retailStore.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="foot3">
          <p>ABOUT</p>
          {footer.aboutUS.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="foot3">
          <p>CONTACT US</p>
          {footer.contactUs.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="foot3_last">
          <p>Chat with our Virtual AI Bot</p>
          <p>(24/7 Live Agent Support)</p>
          <button> CHAT NOW </button>
        </div>
      </div>
      <div className="copy">
        <p>Copyright 2010-2023 Xiaomi. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
