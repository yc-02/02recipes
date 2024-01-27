import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SmallScreenSubNav from "../components/SmallScreenSubNav";



export const metadata = {
  title: "02 Recipes",
  description: "Homemade recipes",
};


export default function RootLayout({ children }) {
  return (
      <div className="grid md:grid-cols-6  text-neutral-800">
        <div className="md:col-span-1">
        <Navbar/>
        </div>
        <div className="pb-14 md:col-span-5 relative">
        {children}
          <Footer/>
        </div>
      </div>
  );
}
