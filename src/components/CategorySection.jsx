function CategorySection({ categories, activeCategory, onSelect }) {
  const all = ["All", ...categories];

  return (
    <section className="categories" id="shop">
      {all.map((cat) => (
        <button
          key={cat}
          className={activeCategory === cat ? "categories__btn categories__btn--active" : "categories__btn"}
          onClick={() => onSelect(cat)}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </section>
  );
}

export default CategorySection;
