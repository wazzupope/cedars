import styles from "./page.module.css";

export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
      <section style={{ marginBottom: '2rem' }}>
        <h1>Welcome to Your Telehealth Physical Therapy Solution</h1>
        <p>
          Experience expert care from the comfort of your home. Our licensed physical therapists provide personalized, evidence-based treatment plans to help you recover, manage pain, and achieve your wellness goals—all through secure video sessions.
        </p>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Convenient virtual appointments</li>
          <li>Personalized treatment plans</li>
          <li>Experienced, licensed therapists</li>
          <li>Flexible scheduling</li>
          <li>Secure and private sessions</li>
        </ul>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2>Get Started Today</h2>
        <p>
          Ready to begin your journey to better health?{' '}
          <a href="/book-appointment" style={{ color: '#0070f3', fontWeight: 'bold' }}>
            Book an appointment
          </a>{' '}
          or contact us to learn more.
        </p>
      </section>
    </main>
  );
}
