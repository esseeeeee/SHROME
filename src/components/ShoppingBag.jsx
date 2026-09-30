function ShoppingBag({ items, onClose, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="bag-overlay" onClick={onClose}>
      <aside className="bag" onClick={(e) => e.stopPropagation()}>
        <div className="bag__head">
          <h2>BAG</h2>
          <button className="bag__close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {items.length === 0 ? (
          <p className="bag__empty">YOUR BAG IS EMPTY.</p>
        ) : (
          <>
            <ul className="bag__list">
              {items.map((item) => (
                <li key={item.key} className="bag__item">
                  <img src={item.image} alt={item.name} />
                  <div className="bag__info">
                    <p className="bag__name">{item.name}</p>
                    <p className="bag__meta">SIZE {item.size} · QTY {item.qty}</p>
                    <p className="bag__meta">₱{(item.price * item.qty).toLocaleString()}</p>
                  </div>
                  <button className="bag__remove" onClick={() => onRemove(item.key)}>REMOVE</button>
                </li>
              ))}
            </ul>
            <div className="bag__foot">
              <p className="bag__total"><span>TOTAL</span><span>₱{total.toLocaleString()}</span></p>
              <button className="btn btn--full">CHECKOUT (DEMO)</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default ShoppingBag;
