import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div style={{ backgroundColor: '#11365E' }} className="mh-100">
      <Navbar/>
      <Home/>
      <About/>
      <MyProjects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
