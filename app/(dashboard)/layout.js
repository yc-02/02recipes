import Navbar from "../components/Navbar";


export const metadata = {
  title: "02 Recipes",
  description: "Homemade recipes",
};


export default function RootLayout({ children }) {
  return (
      <div className="grid md:grid-cols-6  text-neutral-800">
      <Navbar/>
      {children}
      </div>

  );
}
