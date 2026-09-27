import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import Services from "../Services/Services.jsx";
import About from "../About/About.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import FAQ from "../FAQ/FAQ.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import "./App.css";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="preview-note">CALL TODAY TO GET A FREE ESTIMATE! </div>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
