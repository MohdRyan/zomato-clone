import React from "react";
import "./Localities.css";

export default function Localities() {
  return (
    <div className="localities-container">
      <h2 className="localities-heading">
        Popular localities in and around{" "}
        <span className="highlight">Bengaluru</span>
      </h2>
      <div className="localities-grid">
        <div className="locality-card">
          <h3 className="locality-name">Indiranagar</h3>
          <p className="locality-places">616 places</p>
        </div>
        <div className="locality-card">
          <h3 className="locality-name">Marathahalli</h3>
          <p className="locality-places">1056 places</p>
        </div>
        <div className="locality-card">
          <h3 className="locality-name">Whitefield</h3>
          <p className="locality-places">1096 places</p>
        </div>
        <div className="locality-card">
          <h3 className="locality-name">Koramangala 5th Block</h3>
          <p className="locality-places">320 places</p>
        </div>
        <div className="locality-card">
          <h3 className="locality-name">HSR</h3>
          <p className="locality-places">1021 places</p>
        </div>
        <div className="locality-card">
          <h3 className="locality-name">Jayanagar</h3>
          <p className="locality-places">657 places</p>
        </div>
        <div className="locality-card">
          <h3 className="locality-name">JP Nagar</h3>
          <p className="locality-places">777 places</p>
        </div>
        <div className="locality-card">
          <h3 className="locality-name">Sarjapur Road </h3>
          <p className="locality-places">832 places</p>
        </div>
        <div className="locality-card">
          <h3 className="locality-name">See More &#9660;</h3>
        </div>
      </div>
    </div>
  );
}
