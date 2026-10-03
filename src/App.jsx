import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { products } from "./data/products.js";
import Navbar from "./components/Navbar.jsx";
import ProductModal from "./components/ProductModal.jsx";
import ShoppingBag from "./components/ShoppingBag.jsx";
import WishlistPanel from "./components/WishlistPanel.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Collection from "./components/Collection.jsx";

function App() {
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [bagItems, setBagItems] = useState([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  // Go back to the top when the page changes
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  const handleViewFromWishlist = (product) => {
    setWishlistOpen(false);
    setSelectedProduct(product);
  };

  return (
    <>
      <Navbar
        bagCount={bagCount}
        favCount={favorites.length}
        onBagClick={() => setBagOpen(true)}
        onFavoritesClick={() => setWishlistOpen(true)}
        query={query}
        onQueryChange={setQuery}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home query={query} favorites={favorites} onOpen={setSelectedProduct} onToggleFavorite={handleToggleFavorite} />
            }
          />
          <Route
            path="/collection"
            element={
              <Collection query={query} favorites={favorites} onOpen={setSelectedProduct} onToggleFavorite={handleToggleFavorite} />
            }
          />
        </Routes>
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
      {wishlistOpen && (
        <WishlistPanel
          items={favoriteProducts}
          onClose={() => setWishlistOpen(false)}
          onRemove={handleToggleFavorite}
          onView={handleViewFromWishlist}
        />
      )}
    </>
  );
}

export default App;