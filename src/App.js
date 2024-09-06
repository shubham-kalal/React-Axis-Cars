import "./App.css";
import React, { lazy, Suspense } from 'react';

const Header = lazy(() => import("./Components/Header"));
const HeroSection = lazy(() => import("./Components/HeroSection"));
const Collection = lazy(() => import("./Components/Collection"));
const Service = lazy(() => import("./Components/Service"));
const Slider = lazy(() => import("./Components/Slider"));
const Facility = lazy(() => import("./Components/Facility"));
const Performence = lazy(() => import("./Components/Performence"));
const Footer = lazy(() => import("./Components/Footer"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading HeroSection...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Loading Collection...</div>}>
        <Collection />
      </Suspense>
      <Suspense fallback={<div>Loading Service...</div>}>
        <Service />
      </Suspense>
      <Suspense fallback={<div>Loading Slider...</div>}>
        <Slider />
      </Suspense>
      <Suspense fallback={<div>Loading Facility...</div>}>
        <Facility />
      </Suspense>
      <Suspense fallback={<div>Loading Performence...</div>}>
        <Performence />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
