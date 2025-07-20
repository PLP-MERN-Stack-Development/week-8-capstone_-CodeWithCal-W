function ProgressDashboard() {
  // Temporary sample progress data
  const progress = [
    { activity: "Fun with Letters", completed: true },
    { activity: "Home Activities", completed: false },
    { activity: "Money Smart Kids", completed: true },
    { activity: "Leo’s First Day at School", completed: false },
  ];

  return (
    <section>
      <h2>Progress Dashboard</h2>
      <ul>
        {progress.map((item, idx) => (
          <li key={idx}>
            {item.activity} - {item.completed ? "Completed" : "In Progress"}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProgressDashboard;