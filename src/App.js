import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Modal from "./components/Modal";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";


function App() {
  return (
    <div style={{ backgroundColor: '#11365E' }} className="mh-100">
      <Navbar />
      <Routes>
        <Route path='/project/:id' element={<Modal />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      <Home />
      <About />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
