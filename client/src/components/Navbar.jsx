import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-orange-100 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-800 flex items-center">
          <span className="text-4xl mr-2">&#2350;</span> Hidden Heritage
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-orange-600 text-orange-700">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-600 text-orange-700">About</Link></li>
          <li><Link to="/stories" className="hover:text-orange-600 text-orange-700">Stories</Link></li>
          <li><Link to="/cultural-map" className="hover:text-orange-600 text-orange-700">Cultural Map</Link></li>
          <li><Link to="/get-involved" className="hover:text-orange-600 text-orange-700">Get Involved</Link></li>
          <li><Link to="/contact" className="hover:text-orange-600 text-orange-700">Contact</Link></li>
        </ul>
        <button className="md:hidden">☰</button>
      </div>
    </nav>
  );
}
