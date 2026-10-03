import { useState } from "react";
import { Link } from "react-router-dom";
import { products, categories, filterProducts } from "../data/products.js";
import CategorySection from "../components/CategorySection.jsx";
import ProductGrid from "../components/ProductGrid.jsx";

function Collection({ query, favorites, onOpen, onToggleFavorite }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const featuredProducts = products.slice(0, 4);
  const visibleProducts = filterProducts(products, activeCategory, query);

  return (
    <>
      <section className="border-b border-shrome-line px-6 pb-[90px] pt-[120px] text-center">
        <p className="mb-6 text-[11px] tracking-[0.5em] text-shrome-light">VOLUME 01</p>
        <h1 className="font-serif text-[length:clamp(40px,10vw,110px)] font-normal leading-none tracking-[0.15em]">
          THE COLLECTION
        </h1>
        <p className="mx-auto mt-8 max-w-[560px] text-[13px] leading-[1.9] tracking-[0.08em] text-shrome-light">
          Heavy fabrics, dark chrome and pieces made to be worn your own way.
          Every piece is released in a small run.
        </p>
      </section>

      <section>
        <h2 className="px-5 pb-10 pt-[90px] text-center text-xs tracking-[0.5em] text-shrome-light">FEATURED PIECES</h2>
        <ProductGrid
          products={featuredProducts}
          favorites={favorites}
          onOpen={onOpen}
          onToggleFavorite={onToggleFavorite}
        />
      </section>

      <section className="pb-5">
        <h2 className="px-5 pb-10 pt-[90px] text-center text-xs tracking-[0.5em] text-shrome-light">ALL PIECES</h2>
        <CategorySection categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />
        <ProductGrid
          products={visibleProducts}
          favorites={favorites}
          onOpen={onOpen}
          onToggleFavorite={onToggleFavorite}
        />
      </section>

      <section className="border-t border-shrome-line px-6 py-[90px] text-center">
        <p className="mb-10 font-serif text-[length:clamp(22px,3.4vw,40px)] tracking-[0.1em]">BUILT BY YOURSELF.</p>
        <Link
          to="/"
          className="inline-block border border-shrome-white px-10 py-4 text-xs uppercase tracking-[0.3em] transition-colors hover:bg-shrome-white hover:text-shrome-black"
        >
          BACK TO HOME
        </Link>
      </section>
    </>
  );
}

export default Collection;