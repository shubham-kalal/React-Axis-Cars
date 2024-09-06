import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Collection from "./Components/Collection";
import Service from "./Components/Service";
import Slider from "./Components/Slider";
import Facility from "./Components/Facility";
import Performence from "./Components/Performence";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Collection />
      <Service />
      <Slider />
      <Facility />
      <Performence />
      <Footer />
    </div>
  );
}

export default App;
