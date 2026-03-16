import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Members from "./pages/Members";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contributions" element={Co />} />

        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;