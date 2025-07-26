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
      <h2 style={{
        color: '#2b7a78',
        fontSize: '1.35rem',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Progress Dashboard
      </h2>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {progress.map((item, idx) => (
          <li key={idx} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: item.completed ? '#e0f7fa' : '#fff8e1',
            borderRadius: 8,
            boxShadow: '0 1px 6px rgba(60,170,169,0.07)',
            padding: '1rem 1.5rem',
            fontWeight: 'bold',
            fontSize: '1.08rem'
          }}>
            <span style={{ color: '#333' }}>{item.activity}</span>
            <span style={{
              color: item.completed ? '#3aafa9' : '#fe2c55',
              background: item.completed ? '#b2dfdb' : '#ffe0e0',
              borderRadius: 6,
              padding: '0.3rem 1rem',
              fontWeight: 'bold',
              fontSize: '0.98rem'
            }}>
              {item.completed ? "Completed ✅" : "In Progress ⏳"}
            </span>
          </li>
        ))}
      </ul>
      <div style={{
        marginTop: '2rem',
        textAlign: 'center'
      }}>
        <button
          style={{
            background: '#3aafa9',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '0.7rem 2rem',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(60, 170, 169, 0.08)'
          }}
          onClick={() => alert('Keep going! Every activity completed helps your child grow!')}
        >
          Celebrate Progress
        </button>
      </div>
    </section>
  );
}

export default ProgressDashboard;