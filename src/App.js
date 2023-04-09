import logo from './logo.svg';
import fonts from './fontawesome-free-6.3.0-web/css/all.css';
import './fontawesome-free-6.3.0-web/css/fontawesome.css';
import './App.css';
import './components/Home.css';
import './components/Navbar.css';
import './components/Logo.css';
import './components/Logo';
import './components/Skills.css';
import './components/Footer.css';
import './components/About.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Footer';
import About from './components/About';
import image from  './components/home1.png';


function App() {
  return (
    <div className="App">
     
      <Navbar />
      {/*Stepper */}
      <Home/>
      <About/>
      {/*Navigation control */}
      <Skills/>
      <Contact/>
      
    </div>
  );
}

export default App;
