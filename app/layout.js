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
          alignItems: 'center',
          padding: '1rem 2rem',
          background: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}>
          <Image
            src="/exercise.png"
            alt="Logo"
            width={48}
            height={48}
            style={{ marginRight: '1rem', borderRadius: '8px' }}
          />
          <span className="brand">Cedars PT</span>
          <div style={{ display: 'flex', gap: '1.5rem', marginLeft: 'auto' }}>
            <a href="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</a>
            <a href="/services" style={{ textDecoration: 'none', color: '#333' }}>Services</a>
            <a href="/about" style={{ textDecoration: 'none', color: '#333' }}>About</a>
            <a href="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a>
            <a href="/patient-portal" style={{ textDecoration: 'none', color: '#333' }}>Patient Portal</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
