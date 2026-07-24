// // src/App.jsx
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Experiance from "./components/Experiance";
// import Footer from "./components/Footer";
// import Contact from "./components/Contact";
// import { Toaster } from "react-hot-toast";
// import WhatsAppButton from "./components/WhatsAppButton";
// import Certificates from "./components/Certificates";
// import Resume from "./components/Resume";

// function App() {
//   return (
//     <>
//       <div className="overflow-x-hidden">
//        <Navbar />
//         <Home />
//         <About />
//         <Portfolio />
//         <Resume/>
//         <Certificates/>
//         <Experiance />
//         <Contact />
//         <Footer />
//       </div>
//       <WhatsAppButton/>
//       <Toaster 
//         position="top-right"
//         toastOptions={{
//           duration: 3000,
//           style: {
//             background: '#1a1a1a',
//             color: '#fff',
//             border: '1px solid rgba(255,255,255,0.1)',
//           },
//         }}
//       />
//     </>
//   );
// }

// export default App;

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PortfolioPage from './components/PortfolioPage';
import ServicesPage from './components/ServicesPage';
import ExperiencePage from './components/ExperiencePage';
import CertificatesPage from './components/CertificatesPage';
import ContactPage from './components/ContactPage';
import ResumePage from './components/ResumePage';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Rustam Khan - WordPress & MERN Expert | Agentic AI";
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
