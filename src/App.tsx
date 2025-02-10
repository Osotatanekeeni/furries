import CategorySection from "./Components/CategorySection";
import DealSection from "./Components/DealSection";
import HeroSection from "./Components/HeroSection";
import PicksSection from "./Components/PicksSection";
import ProductsSection from "./Components/ProductsSection";
import PetCare from "./assets/Images/PetCare.svg";


function App() {
  return (
    <div className="w-screen bg-furriesBackground">
      <HeroSection />
      <CategorySection />
      <PicksSection />
        <div className="pb-10 sm:py-10">
        <img src={PetCare} alt="Pet Care" className="w-screen" />
        </div>
        <ProductsSection />
        <DealSection />
    </div>
  );
}

export default App;
