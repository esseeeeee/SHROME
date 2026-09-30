import ProductCard from "./ProductCard.jsx";

function ProductGrid({ products, favorites, onOpen, onToggleFavorite }) {
  if (products.length === 0) {
    return <p className="grid__empty">NO PIECES FOUND.</p>;
  }

  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onOpen={onOpen}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
