import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrowseSkills from './pages/BrowseSkills';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/browse" element={<BrowseSkills />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
