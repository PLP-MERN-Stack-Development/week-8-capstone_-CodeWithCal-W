import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import BrowseActivities from './pages/BrowseActivities';
import ProductDetails from './pages/ProductDetails';
import BrowseStories from './pages/BrowseStories';
import MoneyLessons from './pages/MoneyLessons';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;