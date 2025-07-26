import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.quantity * (item.price || 0), 0);

  const handleCheckout = () => {
    clearCart();
    alert('Thank you for your purchase!');
    navigate('/');
  };

  return (
    <main style={{
      minHeight: '80vh',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #fff 100%)',
      padding: '2rem 0'
    }}>
      <section style={{
        background: '#fff',
        maxWidth: 600,
        margin: '0 auto',
        borderRadius: 14,
        boxShadow: '0 2px 16px rgba(60, 170, 169, 0.10)',
        padding: '2rem'
      }}>
        <h1 style={{
          color: '#3aafa9',
          textAlign: 'center',
          fontSize: '2rem',
          marginBottom: '1.2rem'
        }}>
          Your Cart
        </h1>
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#555', fontSize: '1.1rem' }}>
            <p>Your cart is empty.</p>
            <p>
              <span role="img" aria-label="empty cart" style={{ fontSize: '2rem' }}>🛒</span>
            </p>
            <p>
              <button
                style={{
                  background: '#3aafa9',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '0.7rem 2rem',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginTop: '1rem',
                  boxShadow: '0 2px 8px rgba(60, 170, 169, 0.08)'
                }}
                onClick={() => navigate('/browse-activities')}
              >
                Browse Activities
              </button>
              <button
                style={{
                  background: '#3aafa9',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '0.7rem 2rem',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginTop: '1rem',
                  marginLeft: '1rem',
                  boxShadow: '0 2px 8px rgba(60, 170, 169, 0.08)'
                }}
                onClick={() => navigate('/browse-stories')}
              >
                Browse Stories
              </button>
            </p>
          </div>
        ) : (
          <>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
              {cart.map(item => (
                <li key={item._id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.7rem 0',
                  borderBottom: '1px solid #e0f7fa'
                }}>
                  <span>
                    <strong>{item.title}</strong> <span style={{ color: '#888' }}>x {item.quantity}</span>
                  </span>
                  <span style={{ color: '#3aafa9', fontWeight: 'bold' }}>${item.price || 0}</span>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    style={{
                      background: '#fe2c55',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 6,
                      padding: '0.3rem 1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      marginLeft: '1rem'
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p style={{
              textAlign: 'right',
              fontSize: '1.15rem',
              color: '#333',
              marginBottom: '1.2rem'
            }}>
              <strong>Total:</strong> <span style={{ color: '#3aafa9' }}>${total}</span>
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button
                onClick={clearCart}
                style={{
                  background: '#b2dfdb',
                  color: '#333',
                  border: 'none',
                  borderRadius: 8,
                  padding: '0.7rem 1.5rem',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(60, 170, 169, 0.08)'
                }}
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                style={{
                  background: '#3aafa9',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '0.7rem 1.5rem',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(60, 170, 169, 0.08)'
                }}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Cart;