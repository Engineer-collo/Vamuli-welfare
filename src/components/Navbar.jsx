import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link to="/">Vamuli Welfare</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
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
            <Link to="/constitution" className="hover:text-gray-200">
              Welfare-Constitution
            </Link>
          </li>

          <li>
            <Link to="/contributions" className="hover:text-gray-200">
              Contributions
            </Link>
          </li>

          <li>
            <Link to="/signatories" className="hover:text-gray-200">
              Signatories
            </Link>
          </li>

          <li>
            <Link to="/loan" className="hover:text-gray-200">
              Loan Form
            </Link>
          </li>

          <li>
            <Link to="/certificates" className="hover:text-gray-200">
              Membership Certificate
            </Link>
          </li>




        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-600">
          <ul className="flex flex-col items-center gap-4 py-4 text-sm">

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/members" onClick={() => setMenuOpen(false)}>
                Members
              </Link>
            </li>

            <li>
              <Link to="/constitution" onClick={() => setMenuOpen(false)}>
                Welfare-Constitution
              </Link>
            </li>

            <li>
              <Link to="/contributions" onClick={() => setMenuOpen(false)}>
                Contributions
              </Link>
            </li>

            <li>
              <Link to="/signatories" onClick={() => setMenuOpen(false)}>
                Signatories
              </Link>
            </li>

            <li>
              <Link to="/loan" onClick={() => setMenuOpen(false)}>
                Loan Form
              </Link>
            </li>

            <li>
              <Link to="/certificates" onClick={() => setMenuOpen(false)}>
                Membership Certificate
              </Link>
            </li>


          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;