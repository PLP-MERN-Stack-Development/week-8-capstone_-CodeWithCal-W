import LessonDetails from './pages/LessonDetails';
import StoryDetails from './pages/StoryDetails';
import Admin from './pages/Admin';
import Progress from './pages/Progress';
import Subscription from './pages/Subscription';
import Footer from './components/Footer';
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
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/story/:id" element={<StoryDetails />} />
        <Route path="/lesson/:id" element={<LessonDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;