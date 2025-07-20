function Contact() {
  return (
    <main>
      <h1>Contact Us</h1>
      <form>
        <label>
          Your Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Your Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}

export default Contact;