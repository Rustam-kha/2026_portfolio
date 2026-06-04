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
      <div>
        <Navbar />
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
      <Toaster />
    </>
  );
}

export default App;
