import { Link } from 'react-router-dom';

function ProductList() {
  const products = [
    { id: 1, title: "Fun with Letters", age: "2-4", type: "Learning Book" },
    { id: 2, title: "Home Activities", age: "3-6", type: "Activity Book" },
    { id: 3, title: "Money Smart Kids", age: "4-6", type: "Money Management" },
  ];

  return (
    <section>
      <h2>Available Books & Activities</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
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