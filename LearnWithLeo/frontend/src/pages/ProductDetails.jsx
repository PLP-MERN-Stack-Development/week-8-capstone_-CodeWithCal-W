import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  // Temporary sample data
  const products = [
    { id: 1, title: "Fun with Letters", description: "Learn letters with fun activities!", age: "2-4", type: "Learning Book" },
    { id: 2, title: "Home Activities", description: "Creative activities for kids at home.", age: "3-6", type: "Activity Book" },
    { id: 3, title: "Money Smart Kids", description: "Teach kids about money management.", age: "4-6", type: "Money Management" },
  ];

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <main><h2>Product not found</h2></main>;
  }

  return (
    <main>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Age: {product.age}</p>
      <p>Type: {product.type}</p>
    </main>
  );
}

export default ProductDetails;