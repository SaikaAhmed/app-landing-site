import React from 'react';
import './App.css';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
    <Header/>
    <Feature/>
    <About image={aboutimage} title='Come and Grabe yours one for your daily life' button='Get the App'/>
    <Presentation/>
    <About image={aboutimage1} title='Download And Get the App Now' button='Get the App'/>
    <Contact/>
    </div>
    
  );
}

export default App;
