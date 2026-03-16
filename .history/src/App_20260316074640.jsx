import Navbar from "./components/Navbar";
import MemberTable from "./components/MemberTable";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <MemberTable />
      <Footer />
    </div>
  );
}

export default App;