import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import ImagePhoto from "../src/img/image12.png"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
        img={ImagePhoto}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
