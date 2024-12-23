import React from "react";
import "./CollectionCards.css";

export default function CollectionCards() {
  return (
    <div className="collections-cards">
      <div
        className="cc-card"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/29557951/pexels-photo-29557951/free-photo-of-culinary-team-in-open-kitchen-at-night.jpeg?auto=compress&cs=tinysrgb&w=600)`,
        }}
      >
        <div className="cc-card-overlay">
          <h2 className="cc-card-title">Top Trending Spots</h2>
          <p className="cc-card-subtitle">28 Places ▶</p>
        </div>
      </div>

      <div
        className="cc-card"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/13394035/pexels-photo-13394035.jpeg?auto=compress&cs=tinysrgb&w=600)`,
        }}
      >
        <div className="cc-card-overlay">
          <h2 className="cc-card-title">Luxury Dining</h2>
          <p className="cc-card-subtitle">15 Places ▶</p>
        </div>
      </div>

      <div
        className="cc-card"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/15337739/pexels-photo-15337739/free-photo-of-restaurant-interior.jpeg?auto=compress&cs=tinysrgb&w=600)`,
        }}
      >
        <div className="cc-card-overlay">
          <h2 className="cc-card-title">Cafes & Hangouts</h2>
          <p className="cc-card-subtitle">22 Places ▶</p>
        </div>
      </div>

      <div
        className="cc-card"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3570077/pexels-photo-3570077.jpeg?auto=compress&cs=tinysrgb&w=600)`,
        }}
      >
        <div className="cc-card-overlay">
          <h2 className="cc-card-title">Cozy Corners</h2>
          <p className="cc-card-subtitle">18 Places ▶</p>
        </div>
      </div>
    </div>
  );
}
