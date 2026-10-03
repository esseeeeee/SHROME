function WishlistPanel({ items, onClose, onRemove, onView }) {
  return (
    <div className="fixed inset-0 z-[90] flex justify-end bg-black/60" onClick={onClose}>
      <aside
        className="flex h-full w-full max-w-[420px] flex-col border-l border-shrome-line bg-shrome-dark"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-shrome-line p-6">
          <h2 className="font-serif text-lg font-normal tracking-[0.3em]">WISHLIST ({items.length})</h2>
          <button className="text-lg" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {items.length === 0 ? (
          <div className="px-6 py-[60px] text-center">
            <p className="text-xs tracking-[0.3em] text-shrome-light">YOUR WISHLIST IS EMPTY.</p>
            <p className="mt-3 text-[11px] tracking-[0.1em] text-shrome-light/70">
              Tap the heart on a piece to save it here.
            </p>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto">
            {items.map((item) => (
              <li key={item.id} className="grid grid-cols-[70px_1fr_auto] items-center gap-4 border-b border-shrome-line px-6 py-5">
                <img src={item.image} alt={item.name} className="aspect-[4/5] w-full object-cover grayscale" />
                <div className="min-w-0">
                  <p className="mb-1.5 text-[10px] tracking-[0.3em] text-shrome-light">{item.category.toUpperCase()}</p>
                  <p className="mb-1.5 text-[11px] tracking-[0.15em]">{item.name}</p>
                  <p className="text-[11px] tracking-[0.1em] text-shrome-light">₱{item.price.toLocaleString()}</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <button
                    className="text-[9px] tracking-[0.25em] transition-opacity hover:opacity-50"
                    onClick={() => onView(item)}
                  >
                    VIEW
                  </button>
                  <button
                    className="text-[9px] tracking-[0.25em] text-shrome-light hover:text-shrome-white"
                    onClick={() => onRemove(item.id)}
                  >
                    REMOVE
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}

export default WishlistPanel;