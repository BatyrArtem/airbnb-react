import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import ImagePhoto from "../src/img/katie-zaferes.png";
import data from "./data.js"

function App() {

  const dataCard = data.map(instance => 
  <Card 
    coverImg={instance.coverImg}
    rating={instance.stats.rating}
    reviewCount={instance.stats.reviewCount}
    location={instance.location}
    title={instance.title}
    price={instance.price}
  />)

  return (
    <div>
      <Navbar />
      <Hero />
      {dataCard}
    </div>
  );
}

export default App;
