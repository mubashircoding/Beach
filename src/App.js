import React from 'react';
import Carousel from './components/Carousel.jsx';
import Destinations from './components/Destinations';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Selects from './components/Selects';
function App() {
  //
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Selects/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
