import React from "react";
import "./Nightlife.css";
import "./NewNav";
import "../second page/NewNav";
import NewNav from "./NewNav";
import "../components/Collections";
import "../components/Collections";
import CollectionCards from "../components/CollectionCards";
import Collections from "../components/Collections";

const Nightlife = () => {
  return (
    <>
      <NewNav />
      <Collections />
      <CollectionCards />
    </>
  );
};

export default Nightlife;
