import React from "react";
import "./ExploreOptions.css";

const ExploreOptions = () => {
  return (
    <div className="explore-options">
      <h2 className="explore-heading">Explore options near me</h2>

      <div className="options-section">
        <div className="options-title">Popular Cuisines Near Me</div>
        <div className="options-content">
          Bakery near me · Beverages near me · Biryani near me · Burger near me
        </div>
      </div>

      <div className="options-section">
        <div className="options-title">Popular Restaurant Types Near Me</div>
        <div className="options-content">
          Content for this section goes here.
        </div>
      </div>

      <div className="options-section">
        <div className="options-title">Top Restaurant Chains</div>
        <div className="options-content">
          Content for this section goes here.
        </div>
      </div>

      <div className="options-section">
        <div className="options-title">Cities We Deliver To</div>
        <div className="options-content">
          Content for this section goes here.
        </div>
      </div>
    </div>
  );
};

export default ExploreOptions;
