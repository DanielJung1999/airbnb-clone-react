import React from "react";
import './index.css';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import KatiePicture from './Images/Katie.jpg'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img = {KatiePicture}
        rating = "5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life lessons with Katie Zaferes"
        price = {136}
      />
    </div>
  );
}

export default App;
