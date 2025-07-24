import { Link } from 'react-router-dom';

function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#2b7a78' }}>Welcome to LearnWithLeo!</h1>
        <p style={{ fontSize: '1.3rem', margin: '1.5rem 0' }}>
          <strong>Fun, Creative, and Affordable Activities for Kids & Families</strong>
        </p>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Discover a world of easy, engaging activities and stories that spark imagination, learning, and togetherness—right at home! 
          LearnWithLeo helps parents and kids find fun things to do using everyday resources, so you can play, learn, and grow without breaking the bank.
        </p>
        <Link to="/browse-activities">
          <button style={{ margin: '1.5rem 0.5rem', padding: '1rem 2rem', fontSize: '1.1rem', background: '#3aafa9', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
            Explore Activities
          </button>
        </Link>
        <Link to="/subscription">
          <button style={{ margin: '1.5rem 0.5rem', padding: '1rem 2rem', fontSize: '1.1rem', background: '#17252a', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
            Unlock Everything
          </button>
        </Link>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#3aafa9' }}>What You’ll Find Here</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          <li>🎨 <strong>Creative Activity Ideas:</strong> Simple, fun projects and games you can do at home with what you already have.</li>
          <li>📚 <strong>Printable Activity Books:</strong> Download and print engaging activity books for hours of screen-free fun.</li>
          <li>🧠 <strong>Learning Resources:</strong> Help your child master letters, numbers, words, and more—at their own pace.</li>
          <li>💡 <strong>Money Smarts for Kids:</strong> Fun, age-appropriate ways to introduce good money habits and resourcefulness.</li>
          <li>🌍 <strong>Short Stories:</strong> Enjoy real and imaginative tales from around the world, perfect for bedtime or story time.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#3aafa9' }}>Why LearnWithLeo?</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          <li>🏠 <strong>Home-Friendly:</strong> Activities designed for apartments and small spaces—no fancy equipment needed.</li>
          <li>👨‍👩‍👧‍👦 <strong>Family Bonding:</strong> Build memories and skills together, away from screens.</li>
          <li>💸 <strong>Affordable:</strong> Make the most of what you have—no need for expensive toys or outings.</li>
          <li>🌱 <strong>Grow & Learn:</strong> Support your child’s development in fun, meaningful ways.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#3aafa9' }}>How to Get Started</h2>
        <ol style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          <li><strong>Sign Up</strong> for a free account or <Link to="/login">log in</Link> if you already have one.</li>
          <li><strong>Browse</strong> our activities, stories, and learning resources.</li>
          <li><strong>Download</strong> activity books or unlock everything with a subscription!</li>
        </ol>
      </section>

      <section style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ fontSize: '1.2rem', color: '#17252a' }}>
          Ready to make every day an adventure? <br />
          <Link to="/register">
            <button style={{ margin: '1.5rem 0.5rem', padding: '1rem 2rem', fontSize: '1.1rem', background: '#fe5f55', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
              Join Now
            </button>
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Home;