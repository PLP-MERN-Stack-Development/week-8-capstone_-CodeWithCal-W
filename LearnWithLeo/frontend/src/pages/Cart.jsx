import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.quantity * (item.price || 0), 0);

  return (
    <main>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item._id}>
                {item.title} x {item.quantity} - ${item.price || 0}
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total}</p>
          <button onClick={clearCart}>Clear Cart</button>
          {/* Checkout button will go here */}
        </>
      )}
    </main>
  );
}

export default Cart;