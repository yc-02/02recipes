
import SubNav from "../components/SubNav";
import FoodCard from "../(dashboard)/food-card";
import HomepageNavbar from "../components/HomepageNav";
import Footer from "../components/Footer";


export default async function Home() {

  return (
    <div className="grid md:grid-cols-6 text-neutral-800">
    <HomepageNavbar/>
    <main className="px-16 py-6 bg-neutral-100 md:col-span-5">
      <SubNav/>
      <header>
        <h2 className="text-5xl font-semibold text-neutral-600">Recipes</h2>
        <h3 className="text-xl font-semibold text-neutral-500">Healthy and Delicious Creations</h3>
      </header>
      <div className="py-14 relative">
      <FoodCard/>
      <Footer/>
      </div>
  </main>
  </div>
  )
}
