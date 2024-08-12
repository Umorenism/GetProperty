import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import { Hero } from "./component/Hero/Hero";
import { Footer } from "./component/Footer/Footer";
import { PopularProperties } from "./component/popularProperties/PopularProperties";
import { FeaturedProperties } from "./component/FeaturedProperties/FeaturedProperties";
import { NewsLetter } from "./component/Newsletter/NewsLetter";

import { Properties } from "./component/Properties/Properties";
import { PropertyDetail } from "./component/PropertyDetail/PropertyDetail";

import { FashionSlide } from "./component/FashionSlide";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <PopularProperties />
              <FeaturedProperties />
              <NewsLetter />
              <FashionSlide />
              <Footer />
            </>
          }
        />
        <Route
          path="/popularproperty"
          element={
            <>
              <Navbar />
              <PopularProperties />
              <Footer />
            </>
          }
        />
        <Route
          path="/featured"
          element={
            <>
              <Navbar />
              <FeaturedProperties />
              <Footer />
            </>
          }
        />
        <Route
          path="/newsletter"
          element={
            <>
              <Navbar />
              <NewsLetter />
              <Footer />
            </>
          }
        />
        <Route
          path="/fashionslide"
          element={
            <>
              <Navbar />
              <FashionSlide />
              <Footer />
            </>
          }
        />
        

        <Route
          path="/properties"
          element={
            <>
              <Navbar />
              <Properties />
              <Footer />
            </>
          }
        />
        <Route
          path="/propertyDetail/:id"
          element={
            <>
              <Navbar />
              <PropertyDetail />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
