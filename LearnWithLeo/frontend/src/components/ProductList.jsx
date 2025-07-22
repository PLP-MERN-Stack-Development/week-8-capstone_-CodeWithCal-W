import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
            <strong>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </strong>
            <br />
            <span>Age: {product.age}</span> <br />
            <span>Type: {product.type}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;