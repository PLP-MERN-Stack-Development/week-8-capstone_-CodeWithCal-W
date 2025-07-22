import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.quantity * (item.price || 0), 0);

  const handleCheckout = () => {
    // For now, just clear the cart and show a message
    clearCart();
    alert('Thank you for your purchase!');
    navigate('/');
  };

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
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </main>
  );
}

export default Cart;