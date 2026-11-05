import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <main>
      <Header />
      <Hero />

      <div className="about-us-page">
        <Header variant="about-us" />
        <AboutUs />
      </div>

      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;