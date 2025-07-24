import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [canAccess, setCanAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(setProduct);

    // Check access
    const token = localStorage.getItem('token');
    fetch(`http://localhost:5000/api/products/access/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setCanAccess(data.access))
      .finally(() => setLoading(false));
  }, [id]);

  const handleBuy = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`http://localhost:5000/api/users/purchase/${id}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    if (res.ok) {
      alert('Purchase successful!');
      setCanAccess(true);
    } else {
      alert(data.error || 'Purchase failed');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <main>
      <h1>{product.title}</h1>
      <img
        src={product.image ? `http://localhost:5000${product.image}` : '/placeholder.png'}
        alt={product.title}
        style={{
          width: '260px',
          height: '320px',
          objectFit: 'contain',
          borderRadius: 10,
          background: '#fff',
          marginBottom: 16
        }}
        onError={e => { e.target.src = '/placeholder.png'; }}
      />
      <p>{product.description}</p>
      <p>Age: {product.age}</p>
      <p>Type: {product.type}</p>
      <p>Price: ${product.price || 0}</p>
      {canAccess ? (
        <div>
          <p>You own this product! (I plan to Show download/access button here)</p>
          <button onClick={() => alert('Download started!')}>Download</button>
        </div>
      ) : (
        <button onClick={handleBuy}>Buy Now</button>
      )}
    </main>
  );
}

export default ProductDetails;