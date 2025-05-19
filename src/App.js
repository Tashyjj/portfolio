import './App.css';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

