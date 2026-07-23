// src/App.jsx
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "./components/WhatsAppButton";
import Certificates from "./components/Certificates";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* <Navbar /> */}
        <Home />
        <About />
        <Portfolio />
        <Resume/>
        <Certificates/>
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <WhatsAppButton/>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
          },
        }}
      />
    </>
  );
}

export default App;
