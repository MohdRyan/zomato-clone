import React from "react";
import "./CardOne.css";
import { NavLink } from "react-router-dom";

export default function CardOne() {
  return (
    <div className="card-container">
      <div className="card">
        <NavLink to="/home-delivery">
          <img
            className="card-image"
            src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360"
            alt="Order Online"
          />
        </NavLink>

        <h2 className="card-header">Order Online</h2>
        <p className="card-description">Stay home and order to your doorstep</p>
      </div>

      <div className="card">
        <NavLink to="/dine-out">
          <img
            className="card-image"
            src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360"
            alt="Dining"
          />
        </NavLink>
        <h2 className="card-header">Dining</h2>
        <p className="card-description">
          View the city's favorite dining venues
        </p>
      </div>

      <div className="card">
        <NavLink to="/night-life">
          <img
            className="card-image"
            src="https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360"
            alt="Live Events"
          />
        </NavLink>
        <h2 className="card-header">Live Events</h2>
        <p className="card-description">
          Discover India's best events and concerts
        </p>
      </div>
    </div>
  );
}
