import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Convert from './Pages/Convert';
import News from './Pages/News';
import API from './Pages/API';
import Support from './Pages/Support';
import FAQs from './Pages/FAQs';
import Terms from './Pages/Terms';
import BlogPost from './Pages/BlogPost';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/convert" element={<Convert />} />
        <Route path="/news" element={<News />} />
        <Route path="/api" element={<API />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;