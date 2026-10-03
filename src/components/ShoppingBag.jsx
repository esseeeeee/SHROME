function ShoppingBag({ items, onClose, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="fixed inset-0 z-[90] flex justify-end bg-black/60" onClick={onClose}>
      <aside
        className="flex h-full w-full max-w-[420px] flex-col border-l border-shrome-line bg-shrome-dark"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-shrome-line p-6">
          <h2 className="font-serif text-lg font-normal tracking-[0.3em]">BAG</h2>
          <button className="text-lg" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {items.length === 0 ? (
          <p className="px-6 py-[60px] text-center text-xs tracking-[0.3em] text-shrome-light">YOUR BAG IS EMPTY.</p>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto">
              {items.map((item) => (
                <li key={item.key} className="grid grid-cols-[70px_1fr_auto] items-center gap-4 border-b border-shrome-line px-6 py-5">
                  <img src={item.image} alt={item.name} className="aspect-[4/5] w-full object-cover grayscale" />
                  <div className="min-w-0">
                    <p className="mb-1.5 text-[11px] tracking-[0.15em]">{item.name}</p>
                    <p className="mt-[3px] text-[11px] tracking-[0.1em] text-shrome-light">SIZE {item.size} · QTY {item.qty}</p>
                    <p className="mt-[3px] text-[11px] tracking-[0.1em] text-shrome-light">₱{(item.price * item.qty).toLocaleString()}</p>
                  </div>
                  <button
                    className="text-[9px] tracking-[0.25em] text-shrome-light hover:text-shrome-white"
                    onClick={() => onRemove(item.key)}
                  >
                    REMOVE
                  </button>
                </li>
              ))}
            </ul>
            <div className="border-t border-shrome-line p-6">
              <p className="mb-5 flex justify-between text-[13px] tracking-[0.2em]">
                <span>TOTAL</span>
                <span>₱{total.toLocaleString()}</span>
              </p>
              <button className="w-full border border-shrome-white px-10 py-4 text-xs uppercase tracking-[0.3em] transition-colors hover:bg-shrome-white hover:text-shrome-black">
                CHECKOUT (DEMO)
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default ShoppingBag;