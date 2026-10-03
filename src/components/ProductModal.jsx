import { useState } from "react";
import { sizes } from "../data/products.js";

function ProductModal({ product, onClose, onAdd }) {
  const [size, setSize] = useState("M");

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5" onClick={onClose}>
      <div
        className="relative grid max-h-[92vh] w-full max-w-[960px] grid-cols-1 overflow-y-auto border border-shrome-line bg-shrome-dark md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute right-[18px] top-3.5 z-10 text-lg" onClick={onClose} aria-label="Close">✕</button>
        <div>
          <img src={product.image} alt={product.name} className="h-[260px] w-full object-cover grayscale md:h-full" />
        </div>
        <div className="px-6 py-7 md:px-10 md:pb-10 md:pt-14">
          <p className="mb-2.5 text-[10px] tracking-[0.35em] text-shrome-light">{product.category.toUpperCase()}</p>
          <h2 className="mb-3 font-serif text-[26px] font-normal tracking-[0.1em]">{product.name}</h2>
          <p className="mb-6 text-lg">₱{product.price.toLocaleString()}</p>
          <p className="mb-8 text-sm leading-[1.8] text-shrome-light">{product.description}</p>

          <p className="mb-3 text-[10px] tracking-[0.35em] text-shrome-light">SIZE</p>
          <div className="mb-8 flex gap-2.5">
            {sizes.map((s) => (
              <button
                key={s}
                className={
                  "h-12 w-12 border text-xs transition-colors " +
                  (size === s
                    ? "border-shrome-white bg-shrome-white text-shrome-black"
                    : "border-shrome-line hover:border-shrome-white")
                }
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <button
            className="w-full border border-shrome-white px-10 py-4 text-xs uppercase tracking-[0.3em] transition-colors hover:bg-shrome-white hover:text-shrome-black"
            onClick={() => onAdd(product, size)}
          >
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;