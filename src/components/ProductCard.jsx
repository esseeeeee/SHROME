import { useState } from "react";

function ProductCard({ product, isFavorite, onOpen, onToggleFavorite }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="card">
      <div className="card__media" onClick={() => onOpen(product)}>
        {imageFailed ? (
          <div className="card__fallback">SHROME</div>
        ) : (
          <img src={product.image} alt={product.name} onError={() => setImageFailed(true)} />
        )}
      </div>
      <button
        className={isFavorite ? "card__fav card__fav--on" : "card__fav"}
        onClick={() => onToggleFavorite(product.id)}
        aria-label="Favorite"
      >
        {isFavorite ? "♥" : "♡"}
      </button>
      <div className="card__info" onClick={() => onOpen(product)}>
        <p className="card__category">{product.category.toUpperCase()}</p>
        <h3 className="card__name">{product.name}</h3>
        <p className="card__price">₱{product.price.toLocaleString()}</p>
      </div>
    </article>
  );
}

export default ProductCard;
