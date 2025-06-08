// app/layout.js

import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer'; // <-- 1. IMPORT THE FOOTER

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Adrian Kwach | Quantitative Developer & Engineer',
  description: 'Portfolio of Adrian Kwach, showcasing projects in quantitative trading, C#, and networking.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* 2. APPLY THE NEW CLASS TO THE MAIN ELEMENT */}
        <main className="main-content">
          {children}
        </main>
        <Footer /> {/* <-- 3. ADD THE FOOTER COMPONENT HERE */}
      </body>
    </html>
  );
}