import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrowseSkills from './pages/BrowseSkills';
import MySkills from './pages/MySkills';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/browse" element={<BrowseSkills />}/>
        <Route path="/my-skills" element={<MySkills />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
