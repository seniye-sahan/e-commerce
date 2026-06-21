import Slider from "../components/Slider";
import ShopCards from "../components/ShopCards";
import ProductSection from "../components/ProductSection";
import VitaSection from "../components/VitaSection";
function HomePage() {
  return (
    <div>
      <Slider />
      <ShopCards />
      <ProductSection />
      <VitaSection />
    </div>
  );
}

export default HomePage;