import { useState } from "react";
import { Link } from "react-router-dom";

const navText =
  "text-[10px] tracking-[0.2em] transition-opacity hover:opacity-50 sm:text-[11px] sm:tracking-[0.3em]";

function Navbar({ bagCount, favCount, onBagClick, onFavoritesClick, query, onQueryChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-shrome-line bg-shrome-black/90">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-[18px] py-4 md:px-8 md:py-5">
        <div className="flex items-center gap-7">
          <button className={`${navText} md:hidden`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
            <nav className="hidden gap-7 md:flex">
            <Link to="/" className={navText}>HOME</Link>
            <Link to="/collection" className={navText}>COLLECTION</Link>
          </nav>
        </div>

        <Link to="/" className="flex items-center justify-center">
          <img src="/images/logo.png" alt="SHROME" className="block h-[45px] w-auto mix-blend-screen" />
        </Link>

        <div className="flex items-center justify-end gap-3.5 md:gap-7">
          <button className={navText} onClick={() => setSearchOpen(!searchOpen)}>SEARCH</button>
          <button className={navText} onClick={onFavoritesClick} aria-label="Wishlist">♡ ({favCount})</button>
          <button className={navText} onClick={onBagClick}>BAG ({bagCount})</button>
        </div>
      </div>

      {searchOpen && (
        <div className="px-[18px] pb-3.5 md:px-8 md:pb-4">
          <input
            type="text"
            placeholder="SEARCH PRODUCTS"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            className="w-full border-0 border-b border-shrome-line bg-transparent py-3 text-xs tracking-[0.25em] text-shrome-white outline-none"
          />
        </div>
      )}

      {menuOpen && (
        <nav className="flex flex-col gap-5 border-t border-shrome-line px-8 py-6 text-[13px] tracking-[0.3em] md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>SHOP</Link>
          <Link to="/collection" onClick={() => setMenuOpen(false)}>COLLECTION</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;