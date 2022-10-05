import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Event from "./pages/Event"
import Registration from "./pages/Registration";
import About from "./pages/About";
import Result from "./pages/Result";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:name" element={<Event />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={< About />}  />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
