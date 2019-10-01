import React from 'react';
import Intro from './components/Intro/intro.js';
import About from './components/About/about';
import Social from './components/Social/social';
import Email from './components/Email/email';
import Work from './components/Work/work';
import Featured from './components/Featured/featured'
import Projects from './components/Projects/projects'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="App">
      <Intro />

      <About />
      <Work />
      <Featured />
      <Projects />
      <Contact />
      <Footer />
      <Social />
      <Email />
    </div>
  );
}

export default App;
