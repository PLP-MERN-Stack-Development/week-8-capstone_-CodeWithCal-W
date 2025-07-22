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
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <br />
            <strong>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </strong>
            <br />
            <span>Age: {product.age}</span> <br />
            <span>Type: {product.type}</span>
            <br />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;