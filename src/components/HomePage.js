import React from "react";
import Nav from "./Nav";
import CardOne from "./CardOne";
import Collections from "./Collections";
import CollectionCards from "./CollectionCards";
import Localities from "./Localities";
import DownloadApp from "./DownloadApp";
import ExploreOptions from "./ExploreOptions";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Nav />
      <CardOne />
      <Collections />
      <CollectionCards />
      <Localities />
      <DownloadApp />
      <ExploreOptions />
      <Footer />
    </>
  );
};

export default HomePage;
