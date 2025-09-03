import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cedars PT",
  description: "Mobile physical therapy in Portland, OR and surrounding areas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          background: '#f5f5f5',
          borderBottom: '1px solid #ddd',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Image src="/logo.png" alt="Cedars PT Logo" width={40} height={40} style={{ marginRight: '1rem' }} />
            <span className="brand">Cedars PT</span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</a>
              <a href="/services" style={{ textDecoration: 'none', color: '#333' }}>Services</a>
              <a href="/about" style={{ textDecoration: 'none', color: '#333' }}>About</a>
              <a href="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a>
              <a href="/patient-portal" style={{ textDecoration: 'none', color: '#333' }}>Patient Portal</a>
            </div>
          </div>
          <a href="/book-appointment" style={{
            background: '#0070f3',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}>Book Appointment</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
