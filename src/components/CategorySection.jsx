function CategorySection({ categories, activeCategory, onSelect }) {
  const all = ["All", ...categories];

  return (
    <section id="shop" className="mb-12 flex flex-wrap justify-center gap-x-9 gap-y-2 border-y border-shrome-line p-5">
      {all.map((cat) => (
        <button
          key={cat}
          className={
            "border-b py-2 text-[11px] tracking-[0.3em] transition-colors " +
            (activeCategory === cat
              ? "border-shrome-white text-shrome-white"
              : "border-transparent text-shrome-light hover:text-shrome-white")
          }
          onClick={() => onSelect(cat)}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </section>
  );
}

export default CategorySection;