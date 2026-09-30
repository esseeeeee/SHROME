import { useState } from "react";
import { sizes } from "../data/products.js";

function ProductModal({ product, onClose, onAdd }) {
  const [size, setSize] = useState("M");

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal__image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="modal__details">
          <p className="card__category">{product.category.toUpperCase()}</p>
          <h2 className="modal__name">{product.name}</h2>
          <p className="modal__price">₱{product.price.toLocaleString()}</p>
          <p className="modal__desc">{product.description}</p>

          <p className="modal__label">SIZE</p>
          <div className="modal__sizes">
            {sizes.map((s) => (
              <button
                key={s}
                className={size === s ? "size size--active" : "size"}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <button className="btn btn--full" onClick={() => onAdd(product, size)}>ADD TO BAG</button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
