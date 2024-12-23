import React from "react";
import "./NewNav.css";
import { NavLink } from "react-router-dom";

const NewNav = () => {
  return (
    <>
      <div className="newpage-nav-container">
        <NavLink to="/re-home">
          <div className="zomato-img">
            {" "}
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"></img>
          </div>
        </NavLink>

        <div className="input-search">
          {" "}
          <input
            type="text"
            placeholder="Search for restaurent cuisine or a dish"
          />{" "}
        </div>
        <div className="btns">
          <button className="btn-login">Log in</button>
          <button className="btn-signup">Sign up</button>
        </div>
      </div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home /</li>
          <li className="breadcrumb-item">India /</li>
          <li className="breadcrumb-item">Bengaluru Resraurents</li>
        </ol>
      </nav>
      <div className="bottom-nav">
        <NavLink to="/dine-out">
          <div className="bottom-nav-one">
            <img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp"></img>
            <div>Dining Out</div>
          </div>
        </NavLink>
        <NavLink to="/home-delivery">
          <div className="bottom-nav-two">
            <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp"></img>
            <div>Delivery</div>
          </div>
        </NavLink>
        <NavLink to="/night-life">
          <div className="bottom-nav-three">
            <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"></img>
            <div>Nightlife</div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default NewNav;
