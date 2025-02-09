import CategorySection from "./Components/CategorySection";
import HeroSection from "./Components/HeroSection";
import PicksSection from "./Components/PicksSection";


function App() {
  return (
    <div className="w-screen bg-furriesBackground">
      <HeroSection />
      <CategorySection />
      <PicksSection />
    </div>
  );
}

export default App;
