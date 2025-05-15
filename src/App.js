import './App.css';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Skills />
    </div>
  );
}

export default App;

