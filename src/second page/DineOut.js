import React from "react";
import NewNav from "./NewNav";
import "../components/Collections";
import Collections from "../components/Collections";
import CollectionCards from "../components/CollectionCards";
import "./DineOut.css";

const DineOut = () => {
  return (
    <>
      <NewNav />
      <div className="cc-bg">
        <div className="cc-design">
          <Collections />
          <CollectionCards />
        </div>
      </div>
    </>
  );
};

export default DineOut;
