import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DineOut from "./second page/DineOut";
import Delivery from "./second page/Delivery";
import Nightlife from "./second page/Nightlife";
import NewNav from "./second page/NewNav";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dine-out" element={<DineOut />} />
      <Route path="/home-delivery" element={<Delivery />} />
      <Route path="/night-life" element={<Nightlife />} />
      <Route path="/re-home" element={<HomePage />} />
      <Route path="/dine-out" element={<NewNav />} />
      <Route path="/home-delivery" element={<NewNav />} />
      <Route path="/night-life" element={<NewNav />} />
     
    </Routes>
  );
}
