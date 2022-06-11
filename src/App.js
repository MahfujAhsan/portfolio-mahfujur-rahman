import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Modal from "./components/Modal";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import NoMatch from "./NoMatch/NoMatch";



function App() {
  return (
    <div style={{ backgroundColor: '#11365E' }} className="mh-100">
      <Navbar />
      <Routes>
        <Route path="*" element={<NoMatch/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path='/projects/:projectId' element={<ProjectDetails/>} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;
