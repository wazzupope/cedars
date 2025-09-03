export default function Contact() {
  return (
    <main style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h1>Contact Us</h1>
      <p>Reach out to us for questions or to schedule a consultation.</p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <label>
          Name
          <input type="text" name="name" required style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }} />
        </label>
        <label>
          Email
          <input type="email" name="email" required style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }} />
        </label>
        <label>
          Message
          <textarea name="message" required rows={5} style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }} />
        </label>
        <button type="submit" style={{ background: '#0070f3', color: '#fff', padding: '0.75rem', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </main>
  );
}
