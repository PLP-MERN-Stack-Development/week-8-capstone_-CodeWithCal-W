function Profile() {
  // Temporary sample user data
  const user = {
    name: "Parent Name",
    email: "parent@email.com",
    subscription: "Monthly",
    purchasedBooks: ["Fun with Letters", "Home Activities"]
  };

  return (
    <main>
      <h1>Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Subscription:</strong> {user.subscription}</p>
      <h2>Purchased Books</h2>
      <ul>
        {user.purchasedBooks.map((book, idx) => (
          <li key={idx}>{book}</li>
        ))}
      </ul>
    </main>
  );
}

export default Profile;