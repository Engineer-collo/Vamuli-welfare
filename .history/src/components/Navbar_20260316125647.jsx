import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="text-xl font-bold">
          <Link to="/">Vamuli Welfare</Link>
        </h1>

        <ul className="flex gap-6 text-sm">
          <li>
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-gray-200">About</Link>
          </li>

          <li>
            <Link to="/members" className="hover:text-gray-200">Members</Link>
          </li>

          <li>
            <Link to="/constitution" className="hover:text-gray-200">Welfare-Constitution</Link>
          </li>


          <li>
            <Link to="/contributions" className="hover:text-gray-200">Contributions</Link>
          </li>

          

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;