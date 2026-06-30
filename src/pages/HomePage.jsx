import Slider from "../components/Slider";
import ShopCards from "../components/ShopCards";
import ProductSection from "../components/ProductSection";
import VitaSection from "../components/VitaSection";
import NeuralSection from "../components/NeuralSection";
import FeaturedPosts from "../components/FeaturedPosts";
function HomePage() {
  return (
    <div>
      <Slider />
      <ShopCards />
      <ProductSection />
      <VitaSection />
      <NeuralSection/>
      <FeaturedPosts/>
    </div>
  );
}

export default HomePage;