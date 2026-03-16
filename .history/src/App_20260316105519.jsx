import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Members from "./pages/Members";
import ContributionsTable from "./pages/ContributionsTable";


function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contributions" element={<ContributionsTable />} />
          <Route path="/fines" element={<FinesTable />} />

        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;