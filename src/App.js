import React from 'react';
import Intro from './components/Intro/intro.js';
import About from './components/About/about';
import Social from './components/Social/social';
import Email from './components/Email/email';
import Work from './components/Work/work';
import Featured from './components/Featured/featured'

function App() {
  return (
    <div className="App">
      <Intro/>
      
      <About/>
      <Work/>
      <Featured/>
      <Social/>
      <Email/>
    </div>
  );
}

export default App;
