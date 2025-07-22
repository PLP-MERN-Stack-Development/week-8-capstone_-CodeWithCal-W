import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <main>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      <p>{product.description}</p>
      <p>Age: {product.age}</p>
      <p>Type: {product.type}</p>
    </main>
  );
}

export default ProductDetails;