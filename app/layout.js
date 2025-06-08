// app/layout.js

import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CustomCursor from '@/components/common/CustomCursor'; // <-- 1. IMPORT

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
        <CustomCursor /> {/* <-- 2. ADD THE COMPONENT HERE */}
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
