import React from "react";
import "./DownloadApp.css";

export default function DownloadApp() {
  return (
    <>
      <div className="d-container">
        <div className="mobile-photo">
          <img src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png"></img>
        </div>
        <div className="download-data">
          <h1>Get the Zomato app</h1>
          <p>
            We will send you a link, open it on your phone to download the app
          </p>

          <label>Email: </label>
          <input type="email" placeholder="Email Address"></input>

          <button className="d-button">Share App Link</button>
          <p>Download App From</p>
          <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" />
          <img
            className="img-two"
            src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
          />
        </div>
      </div>
    </>
  );
}
