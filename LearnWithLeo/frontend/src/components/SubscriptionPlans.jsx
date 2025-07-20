function SubscriptionPlans() {
  const plans = [
    { name: "Monthly", price: "$5", features: ["Access to all books", "New stories monthly", "Progress dashboard"] },
    { name: "Yearly", price: "$50", features: ["All monthly features", "2 months free", "Priority support"] },
    { name: "Free Trial", price: "$0", features: ["Limited access", "Try before you buy"] },
  ];

  return (
    <section>
      <h2>Subscription Plans</h2>
      <div style={{ display: "flex", gap: "2rem" }}>
        {plans.map(plan => (
          <div key={plan.name} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", minWidth: "180px" }}>
            <h3>{plan.name}</h3>
            <p><strong>{plan.price}</strong></p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button>Choose</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SubscriptionPlans;