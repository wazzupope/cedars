import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className="hero card">
        <div className="hero-image">
          <Image
            src="/christina-wocintechchat-com-3sY92eKV6-Y-unsplash.jpg"
            alt="Physical therapy session"
            width={600}
            height={400}
            style={{
              width: "100%",
              height: "auto",
              minHeight: "250px",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        </div>
        <div className="hero-text">
          <h1>Welcome to Your Telehealth Physical Therapy Solution</h1>
          <p>
            Experience expert care from the comfort of your home. Our licensed
            physical therapists provide personalized, evidence-based treatment
            plans to help you recover, manage pain, and achieve your wellness
            goals—all through secure video sessions.
          </p>
        </div>
      </section>
      <section className="card">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Convenient virtual appointments</li>
          <li>Personalized treatment plans</li>
          <li>Experienced, licensed therapists</li>
          <li>Flexible scheduling</li>
          <li>Secure and private sessions</li>
        </ul>
      </section>
      <section className="card">
        <h2>Get Started Today</h2>
        <p>
          Ready to begin your journey to better health?{" "}
          <a href="/book-appointment" className="cta-link">
            Book an appointment
          </a>{" "}
          or contact us to learn more.
        </p>
      </section>
    </main>
  );
}
