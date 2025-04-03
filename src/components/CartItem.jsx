export default function CartItem({ item, updateQuantity }) {
    const price = item.price * (1 - item.discount / 100);
    const handleQtyChange = (e) => {
      const newQty = parseInt(e.target.value);
      updateQuantity(item.id, newQty);
    };
  
    return (
      <div className="flex items-center gap-4 mb-4 border-b pb-4">
        <img src={item.image} alt={item.name} className="w-24 h-24 rounded object-cover" />
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p>${price.toFixed(2)} x {item.quantity}</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQtyChange}
            className="mt-2 border p-1 w-20 rounded"
          />
        </div>
      </div>
    );
  }
  