import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import RangeOfKWS from "./components/range/RangeOfKWS";
import Footer from "./components/Footer/Footer";
import GalleryOfImages from "./components/about/GalleryofImages"
// import Gallery from "./components/library/Gallery";
// import CategoryPage from "./components/library/CategoryPage";
import WhatsappForm from "./components/form/WhatsappForm";
import PriceCalculator from "./components/PriceCalculator/PriceCalculator";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,        // slow & luxury
      easing: "ease-in-out",
      once: true,            // animation only once
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/range" element={<RangeOfKWS />} />
        <Route path="/gallery" element={<GalleryOfImages />} />
        {/* <Route path="/gallery/:categoryId" element={<CategoryPage />} /> */}
        <Route path="/form" element={<WhatsappForm />} />
        <Route path="/calculator" element={<PriceCalculator />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
