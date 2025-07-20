function MoneyLessons() {
  // Temporary sample lessons
  const lessons = [
    { id: 1, title: "Saving Basics", summary: "Learn why saving is important." },
    { id: 2, title: "Needs vs Wants", summary: "Understand the difference between needs and wants." },
    { id: 3, title: "Smart Spending", summary: "Tips for making good choices with money." },
  ];

  return (
    <main>
      <h1>Money Management Lessons</h1>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson.id}>
            <strong>{lesson.title}</strong>
            <br />
            <span>{lesson.summary}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default MoneyLessons;