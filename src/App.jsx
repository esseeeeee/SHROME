import { useState } from "react";
import { products, categories } from "./data/products.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CategorySection from "./components/CategorySection.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import ProductModal from "./components/ProductModal.jsx";
import ShoppingBag from "./components/ShoppingBag.jsx";
import BrandStory from "./components/BrandStory.jsx";
import Info from "./components/Info.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [bagItems, setBagItems] = useState([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Filter by category and search text
  const visibleProducts = products.filter((p) => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchSearch;
  });

  const bagCount = bagItems.reduce((sum, item) => sum + item.qty, 0);

  const handleAddToBag = (product, size) => {
    const key = `${product.id}-${size}`;
    const existing = bagItems.find((item) => item.key === key);
    if (existing) {
      setBagItems(bagItems.map((item) => (item.key === key ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setBagItems([...bagItems, { key, name: product.name, price: product.price, image: product.image, size, qty: 1 }]);
    }
    setSelectedProduct(null);
    setBagOpen(true);
  };

  const handleRemove = (key) => {
    setBagItems(bagItems.filter((item) => item.key !== key));
  };

  const handleToggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <>
      <Navbar
        bagCount={bagCount}
        onBagClick={() => setBagOpen(true)}
        query={query}
        onQueryChange={setQuery}
      />
      <main>
        <Hero />
        <section className="collection" id="collection">
          <h2 className="section-title">THE COLLECTION</h2>
          <CategorySection
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
          <ProductGrid
            products={visibleProducts}
            favorites={favorites}
            onOpen={setSelectedProduct}
            onToggleFavorite={handleToggleFavorite}
          />
        </section>
        <BrandStory />
        <Info />
      </main>
      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAdd={handleAddToBag}
        />
      )}
      {bagOpen && (
        <ShoppingBag items={bagItems} onClose={() => setBagOpen(false)} onRemove={handleRemove} />
      )}
    </>
  );
}

export default App;
