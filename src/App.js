import './App.css';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Socialbar from './components/Socialbar';

import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Socialbar />
      <Navbar />
      <LandingPage />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

