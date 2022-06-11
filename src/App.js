import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import NoMatch from "./NoMatch/NoMatch";
import Blog from "./components/Blog";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ backgroundColor: '#11365E' }} className="mh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects/:projectId' element={<ProjectDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
