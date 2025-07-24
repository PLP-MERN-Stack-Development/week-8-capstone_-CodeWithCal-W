import React from 'react';

function About() {
  return (
    <main style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ color: '#2b7a78' }}>About LearnWithLeo</h1>
      <section style={{ margin: '2rem 0' }}>
        <p style={{ fontSize: '1.15rem', color: '#333' }}>
          <strong>LearnWithLeo</strong> was born from a simple idea: to help parents and kids discover fun, creative, and affordable activities they can do together at home. As a parent myself, I saw how easy it is for kids to get glued to screens—especially in places where outdoor play isn’t always possible. I wanted to create a space where families could find inspiration, connect, and learn in meaningful ways.
        </p>
        <p style={{ fontSize: '1.15rem', color: '#333', marginTop: '1.5rem' }}>
          Our platform offers a mix of hands-on activities, printable books, learning resources, and short stories from around the world. We believe that every child deserves the chance to play, learn, and grow—no matter where they live or what resources they have.
        </p>
        <p style={{ fontSize: '1.15rem', color: '#333', marginTop: '1.5rem' }}>
          We also know how important it is to teach kids about money and resourcefulness from a young age. That’s why we include fun, age-appropriate lessons on money management and smart habits—so kids can build confidence and skills for life.
        </p>
      </section>
      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ color: '#3aafa9' }}>Our Mission</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          <li>🌟 Inspire creativity and learning through simple, home-friendly activities.</li>
          <li>👨‍👩‍👧‍👦 Strengthen family bonds and encourage quality time together.</li>
          <li>💡 Make learning fun, practical, and accessible for every child.</li>
          <li>💸 Empower kids with good money habits and resourcefulness.</li>
        </ul>
      </section>
      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ color: '#3aafa9' }}>Join Our Community</h2>
        <p style={{ fontSize: '1.1rem', color: '#333' }}>
          Whether you’re a parent, guardian, or educator, we invite you to explore, share, and grow with us. Together, we can make every day an adventure—full of learning, laughter, and love.
        </p>
      </section>
    </main>
  );
}

export default About;