import { useState } from "react";
import { products, categories, filterProducts } from "../data/products.js";
import Hero from "../components/Hero.jsx";
import BrandStory from "../components/BrandStory.jsx";
import Info from "../components/Info.jsx";

function Home({ query, favorites, onOpen, onToggleFavorite }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleProducts = filterProducts(products, activeCategory, query);

  return (
    <>
      <Hero />
      <BrandStory />
      <Info />
    </>
  );
}

export default Home;