import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Components/style.css";
import Hero from "./Components/Hero";
import Delivery from "./Components/Delivery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Delivery />
    </>
  );
}

export default App;
