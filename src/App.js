import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <About/>
    <Skills/>
    <Works/>
    <Clients/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
