// src/app/layout.js
// Keep your existing imports: Geist, Inter, NavBar, Footer, globals.css
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import NavBar from '@/components/navBar'; // Assuming this path is correct
import Footer from '@/components/footer'; // Assuming this path is correct
import './globals.css';
import { ActiveSectionProvider } from './ActiveSectionContext'; // Adjust path if needed

// Keep your font initializations (inter, geistSans, geistMono)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'khpa-portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      {/* <head> content should be automatically handled by Next.js unless specific tags are needed here */}
      {/* <link rel="stylesheet" href="https://use.typekit.net/qbe1xrn.css" /> -> this can go into metadata or a <Head> component if needed */}
      <body>
        <ActiveSectionProvider>
          {' '}
          {/* <--- WRAPPER START */}
          <NavBar /> {/* NavBar can now consume the context */}
          <main className="antialiased relative ">{children}</main>{' '}
          {/* page.js content will be here */}
          <Footer />
        </ActiveSectionProvider>{' '}
        {/* <--- WRAPPER END */}
      </body>
    </html>
  );
}
