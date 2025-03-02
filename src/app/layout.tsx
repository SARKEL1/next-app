import { Inter } from 'next/font/google';
import Header from "./header/Header";
import "./styles/globals.css";
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        <Header />
        
        <main>{children}</main>

        <footer>(c) 2025 Firma XYZ</footer>
      </body>
    </html>
  );
}
