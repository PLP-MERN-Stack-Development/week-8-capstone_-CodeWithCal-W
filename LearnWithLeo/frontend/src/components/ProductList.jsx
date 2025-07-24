import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section>
      <h2>Available Books & Activities</h2>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          listStyle: 'none',
          padding: 0,
          minHeight: '260px'
        }}
      >
        {products.map(product => (
          <li
            key={product._id}
            style={{
              border: '1px solid #eee',
              borderRadius: 8,
              padding: '1rem',
              width: 220,
              textAlign: 'center',
              background: '#fafafa',
              minHeight: '340px'
            }}
          >
            <img
              src={product.image ? `http://localhost:5000${product.image}` : '/placeholder.png'}
              alt={product.title}
              style={{
                width: '180px',
                height: '220px',
                objectFit: 'contain',
                borderRadius: 8,
                marginBottom: 8,
                background: '#fff',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              onError={e => { e.target.src = '/placeholder.png'; }}
            />
            <br />
            <strong>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </strong>
            <br />
            <span style={{ color: '#3aafa9', fontWeight: 'bold' }}>${product.price.toFixed(2)}</span>
            <br />
            <span>Age: {product.age}</span> <br />
            <span>Type: {product.type}</span>
            <br />
            <small style={{ display: 'block', margin: '0.5rem 0', color: '#555' }}>
              {product.description?.slice(0, 60)}
              {product.description && product.description.length > 60 ? '...' : ''}
            </small>
            <button
              onClick={() => addToCart(product)}
              style={{
                marginTop: 8,
                background: '#3aafa9',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: '0.5rem 1rem',
                cursor: 'pointer'
              }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
