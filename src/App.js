import './App.css';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';

import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

