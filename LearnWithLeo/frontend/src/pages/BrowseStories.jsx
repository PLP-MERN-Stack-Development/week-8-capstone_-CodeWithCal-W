function BrowseStories() {
  // Temporary sample stories
  const stories = [
    { id: 1, title: "The Lion and the Mouse", summary: "A story about kindness and helping others." },
    { id: 2, title: "Leo’s First Day at School", summary: "Leo learns new things and makes friends." },
    { id: 3, title: "The Clever Rabbit", summary: "A rabbit uses his wits to solve problems." },
  ];

  return (
    <main>
      <h1>Browse Short Stories</h1>
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            <strong>{story.title}</strong>
            <br />
            <span>{story.summary}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default BrowseStories;