import "./globals.css";
import {Assistant} from 'next/font/google'

const flower = Assistant({subsets:[]})

export const metadata = {
  title: "02 Recipes",
  description: "Homemade recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={flower.className}>{children}</body>
    </html>
  );
}
