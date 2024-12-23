import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
  faThreads,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faX } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.footerRow1}>
          <div className={styles.footerRow1Div1}>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"></img>
          </div>
          <div className={styles.container}>
            <div className={styles.button}>
              <img
                src="https://flagcdn.com/in.svg"
                alt="India"
                className={styles.icon}
              />
              <span className={styles.text}>India</span>
            </div>
            <div className={styles.button}>
              <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
              <span className={styles.text}>English</span>
            </div>
          </div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.footerCol}>
            <h4>ABOUT ZOMATO</h4>
            <ul className={styles.links}>
              <li>
                <NavLink to="#">Who We Are</NavLink>
              </li>
              <li>
                <NavLink to="#">BLog</NavLink>
              </li>
              <li>
                <NavLink to="#">Work With Us</NavLink>
              </li>
              <li>
                <NavLink to="#">Investor Relations</NavLink>
              </li>
              <li>
                <NavLink to="#">Report Fraud</NavLink>
              </li>
              <li>
                <NavLink to="#">Presh Kit</NavLink>
              </li>
              <li>
                <NavLink to="#">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>ZOMAVERSE</h4>
            <ul className={styles.links}>
              <li>
                <NavLink to="#">Zomato</NavLink>
              </li>
              <li>
                <NavLink to="#">Blinkit</NavLink>
              </li>
              <li>
                <NavLink to="#">District</NavLink>
              </li>
              <li>
                <NavLink to="#">Feeding India</NavLink>
              </li>
              <li>
                <NavLink to="#">HyperPure</NavLink>
              </li>
              <li>
                <NavLink to="#">Zomato Live</NavLink>
              </li>
              <li>
                <NavLink to="#">Zomaland</NavLink>
              </li>
              <li>
                <NavLink to="#">Weather Union</NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>FOR RESTAURENTS</h4>
            <ul className={styles.links}>
              <li>
                <NavLink to="#">Partner With Us</NavLink>
              </li>
              <li>
                <NavLink to="#">Apps For You</NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>LEARN MORE</h4>
            <ul className={styles.links}>
              <li>
                <NavLink to="#">Privacy</NavLink>
              </li>
              <li>
                <NavLink to="#">Secutity</NavLink>
              </li>
              <li>
                <NavLink to="#">Terms</NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>SOCIAL LINKS</h4>

            <div className={styles.icons}>
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className={styles.endBtn}>
              <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" />
              <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" />
            </div>
          </div>

          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2024 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
