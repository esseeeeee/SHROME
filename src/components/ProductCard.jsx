import { useState } from "react";

function ProductCard({ product, isFavorite, onOpen, onToggleFavorite }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group relative bg-shrome-black pb-6">
      <div className="aspect-[4/5] cursor-pointer overflow-hidden bg-shrome-dark" onClick={() => onOpen(product)}>
        {imageFailed ? (
          <div className="flex h-full items-center justify-center font-serif tracking-[0.4em] text-shrome-gray">
            SHROME
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover brightness-[0.85] contrast-[1.1] grayscale transition duration-700 group-hover:scale-105 group-hover:brightness-100"
          />
        )}
      </div>
      <button
        className={"absolute right-4 top-3.5 text-xl " + (isFavorite ? "text-[#b3b3b3]" : "text-shrome-white")}
        onClick={() => onToggleFavorite(product.id)}
        aria-label="Favorite"
      >
        {isFavorite ? "♥" : "♡"}
      </button>
      <div className="cursor-pointer px-5 pt-5 text-center" onClick={() => onOpen(product)}>
        <p className="mb-2.5 text-[10px] tracking-[0.35em] text-shrome-light">{product.category.toUpperCase()}</p>
        <h3 className="mb-2 text-xs font-normal tracking-[0.2em]">{product.name}</h3>
        <p className="font-serif text-[15px] text-shrome-light">₱{product.price.toLocaleString()}</p>
      </div>
    </article>
  );
}

export default ProductCard;