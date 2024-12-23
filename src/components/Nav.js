import React from "react";
import "./Nav.css";



export default function Nav() {
  return (
    <>
      <div className="container">
        <div className="top-container">


          <div className="top-left-container">Get the App</div>


          <div className="top-right-container">
            <div>Investor Relations</div>
            <div>Add Restaurent</div>
            <div>Log in</div>
            <div>Sign up</div>
          </div>
        </div>

        <div className="bottom-container">
          <div className="heading"> zomato</div>
          <div className="heading-text">
            Discover the best food & drinks in Bengaluru
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search restaurents, foods and more"
            />
          </div>
        </div>
      </div>
    </>
  );
}
