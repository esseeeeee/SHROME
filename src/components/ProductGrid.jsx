import ProductCard from "./ProductCard.jsx";

function ProductGrid({ products, favorites, onOpen, onToggleFavorite }) {
  if (products.length === 0) {
    return <p className="px-5 py-20 text-center text-xs tracking-[0.3em] text-shrome-light">NO PIECES FOUND.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-px border-y border-shrome-line bg-shrome-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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