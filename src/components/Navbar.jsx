import { useState } from "react";

function Navbar({ bagCount, onBagClick, query, onQueryChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__left">
          <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
          <nav className="navbar__links">
            <a href="#shop">SHOP</a>
            <a href="#collection">COLLECTION</a>
          </nav>
        </div>

        <a href="#top" className="navbar__logo"><img src="/images/logo.png" alt="SHROME" className="navbar__logo-img" /></a>

        <div className="navbar__right">
          <button className="navbar__btn" onClick={() => setSearchOpen(!searchOpen)}>SEARCH</button>
          <button className="navbar__btn" onClick={onBagClick}>BAG ({bagCount})</button>
        </div>
      </div>

      {searchOpen && (
        <div className="navbar__search">
          <input
            type="text"
            placeholder="SEARCH PRODUCTS"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
          />
        </div>
      )}

      {menuOpen && (
        <nav className="navbar__mobile">
          <a href="#shop" onClick={() => setMenuOpen(false)}>SHOP</a>
          <a href="#collection" onClick={() => setMenuOpen(false)}>COLLECTION</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>STORY</a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
