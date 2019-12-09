import React from 'react';
import Projects from "./Projects";
import Header from './Header'
import Footer from './Footer'
import About from "./About";

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
