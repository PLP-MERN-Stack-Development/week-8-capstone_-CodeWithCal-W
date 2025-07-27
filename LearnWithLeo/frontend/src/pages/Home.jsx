import { Link } from 'react-router-dom';
import leoNoBg from '../assets/leo-on-his-bike-no-bg.png';

function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      {/* Hero Section */}
      <section style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        marginBottom: '2.5rem',
        padding: '2rem 0',
        background: 'linear-gradient(90deg, #e0f7fa 0%, #b2dfdb 100%)',
        borderRadius: 16,
        boxShadow: '0 2px 16px rgba(60, 170, 169, 0.10)'
      }}>
        <div style={{ flex: 1, minWidth: 350, paddingLeft: '2rem' }}>
          <h1 style={{ fontSize: '2.7rem', color: '#2b7a78', marginBottom: '0.5rem', textAlign: 'left' }}>Welcome to LearnWithLeo!</h1>
          <p style={{ fontSize: '1.35rem', margin: '1.2rem 0', color: '#17252a', textAlign: 'left' }}>
            <strong>Fun, Creative, and Affordable Activities for Kids & Families</strong>
          </p>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem', textAlign: 'left' }}>
            Discover a world of easy, engaging activities and stories that spark imagination, learning, and togetherness—right at home! <br />
            LearnWithLeo helps parents and kids find fun things to do using everyday resources, so you can play, learn, and grow without breaking the bank.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <Link to="/browse-activities">
              <button style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: '#3aafa9', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(60,170,169,0.08)' }}>
                Explore Activities
              </button>
            </Link>
            <Link to="/subscription">
              <button style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: '#17252a', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(60,170,169,0.08)' }}>
                Unlock Everything
              </button>
            </Link>
          </div>
        </div>
        <div style={{ flex: 1, textAlign: 'center', minWidth: 350 }}>
          <img src={leoNoBg} alt="Leo on his bike" style={{ height: 300, borderRadius: 16, boxShadow: '0 2px 12px rgba(60,170,169,0.10)', margin: '0 auto' }} />
        </div>
      </section>

      {/* Features Section */}
      <section style={{ marginBottom: '2.5rem', background: '#fff', borderRadius: 14, boxShadow: '0 1px 8px rgba(60,170,169,0.07)', padding: '2rem' }}>
        <h2 style={{ color: '#3aafa9', marginBottom: '1rem' }}>What You’ll Find Here</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, textAlign: 'left', margin: '0 auto', maxWidth: 700 }}>
          <li>🎨 <strong>Creative Activity Ideas:</strong> Simple, fun projects and games you can do at home with what you already have.</li>
          <li>📚 <strong>Printable Activity Books:</strong> Download and print engaging activity books for hours of screen-free fun.</li>
          <li>🧠 <strong>Learning Resources:</strong> Help your child master letters, numbers, words, and more—at their own pace.</li>
          <li>💡 <strong>Money Smarts for Kids:</strong> Fun, age-appropriate ways to introduce good money habits and resourcefulness.</li>
          <li>🌍 <strong>Short Stories:</strong> Enjoy real and imaginative tales from around the world, perfect for bedtime or story time.</li>
        </ul>
      </section>

      {/* Why Section */}
      <section style={{ marginBottom: '2.5rem', background: '#fff', borderRadius: 14, boxShadow: '0 1px 8px rgba(60,170,169,0.07)', padding: '2rem' }}>
        <h2 style={{ color: '#3aafa9', marginBottom: '1rem' }}>Why LearnWithLeo?</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, textAlign: 'left', margin: '0 auto', maxWidth: 700 }}>
          <li>🏠 <strong>Home-Friendly:</strong> Activities designed for apartments and small spaces—no fancy equipment needed.</li>
          <li>👨‍👩‍👧‍👦 <strong>Family Bonding:</strong> Build memories and skills together, away from screens.</li>
          <li>💸 <strong>Affordable:</strong> Make the most of what you have—no need for expensive toys or outings.</li>
          <li>🌱 <strong>Grow & Learn:</strong> Support your child’s development in fun, meaningful ways.</li>
        </ul>
      </section>

      {/* How to Get Started Section */}
      <section style={{ marginBottom: '2.5rem', background: '#fff', borderRadius: 14, boxShadow: '0 1px 8px rgba(60,170,169,0.07)', padding: '2rem' }}>
        <h2 style={{ color: '#3aafa9', marginBottom: '1rem' }}>How to Get Started</h2>
        <ol style={{ fontSize: '1.1rem', lineHeight: 1.7, textAlign: 'left', margin: '0 auto', maxWidth: 700 }}>
          <li><strong>Sign Up</strong> for a free account or <Link to="/login">log in</Link> if you already have one.</li>
          <li><strong>Browse</strong> our activities, stories, and learning resources.</li>
          <li><strong>Download</strong> activity books or unlock everything with a subscription!</li>
        </ol>
      </section>

      {/* Testimonials Section */}
      <section style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h2 style={{ color: '#3aafa9', marginBottom: '1rem' }}>What Parents Say</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: '#e0f7fa',
            borderRadius: 10,
            padding: '1rem 1.5rem',
            maxWidth: 280,
            boxShadow: '0 1px 6px rgba(60,170,169,0.07)',
            fontStyle: 'italic'
          }}>
            “LearnWithLeo made rainy days fun and educational for my kids!”<br />
            <span style={{ color: '#2b7a78', fontWeight: 'bold' }}>— Sarah, Mom of 2</span>
          </div>
          <div style={{
            background: '#fff8e1',
            borderRadius: 10,
            padding: '1rem 1.5rem',
            maxWidth: 280,
            boxShadow: '0 1px 6px rgba(60,170,169,0.07)',
            fontStyle: 'italic'
          }}>
            “The money lessons are brilliant. My son now saves his pocket money!”<br />
            <span style={{ color: '#2b7a78', fontWeight: 'bold' }}>— James, Dad</span>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ fontSize: '1.2rem', color: '#17252a' }}>
          Ready to make every day an adventure? <br />
          <Link to="/register">
            <button style={{ margin: '1.5rem 0.5rem', padding: '1rem 2rem', fontSize: '1.1rem', background: '#3aafa9', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(60,170,169,0.08)' }}>
              Join Now
            </button>
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Home;