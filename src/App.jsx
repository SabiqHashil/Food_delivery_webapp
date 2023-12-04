import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Components/style.css";
import Hero from "./Components/Hero";
import Delivery from "./Components/Delivery";
import Healthy from "./Components/Healthy";
import ProductSlider from "./Components/ProductSlider";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Delivery />
      <Healthy />
      <ProductSlider />
    </>
  );
}

export default App;
