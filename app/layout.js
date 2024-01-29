import "./globals.css";
import {Assistant} from 'next/font/google'
import SmallScreenSubNav from "./components/SmallScreenSubNav";

const assistant = Assistant({subsets:[]})

export const metadata = {
  title: "02 Recipes",
  description: "Homemade recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={assistant.className}>
          {children}
          <div className="md:hidden">
          <SmallScreenSubNav/>
          </div>
      </body>
    </html>
  );
}
