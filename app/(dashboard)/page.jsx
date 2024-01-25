
import AuthNav from "../components/HomeRightNav";
import FoodCard from "./food-card";



export default function Home() {


  return (
    <main className="px-16 py-6 bg-neutral-100 md:col-span-5">
      <AuthNav/>
      <header>
        <h2 className="text-5xl font-semibold text-neutral-600">Recipes</h2>
        <h3 className="text-xl font-semibold text-neutral-500">Healthy and Delicious Creations</h3>
      </header>
      <FoodCard/>
  </main>
  )
}
