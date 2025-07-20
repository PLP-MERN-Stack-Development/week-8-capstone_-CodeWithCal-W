import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import BrowseActivities from './pages/BrowseActivities';
import ProductDetails from './pages/ProductDetails';
import BrowseStories from './pages/BrowseStories';
import MoneyLessons from './pages/MoneyLessons';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/browse-activities" element={<BrowseActivities />} />
        <Route path="/browse-stories" element={<BrowseStories />} />
        <Route path="/money-lessons" element={<MoneyLessons />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;