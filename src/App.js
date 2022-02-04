import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import ImagePhoto from "../src/img/katie-zaferes.png";
import data from "./data.js"

function App() {

  const cards = data.map(instance => 
  <Card 
    key={instance.id}
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
      <section className="cards-list">
        {cards}
      </section>
      
    </div>
  );
}

export default App;
