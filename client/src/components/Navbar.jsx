import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-100 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" onClick={() => window.location.reload()} className="text-2xl font-bold text-orange-800 flex items-center">
          <span className="text-4xl mr-2">&#2350;</span> Hidden Heritage
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" onClick={() => window.location.reload()} className="hover:text-orange-600 text-orange-700">Home</Link></li>
          <li><Link to="/about" onClick={() => window.location.reload()} className="hover:text-orange-600 text-orange-700">About</Link></li>
          <li><Link to="/stories" onClick={() => window.location.reload()} className="hover:text-orange-600 text-orange-700">Stories</Link></li>
          <li><Link to="/cultural-map" onClick={() => window.location.reload()} className="hover:text-orange-600 text-orange-700">Cultural Map</Link></li>
          <li><Link to="/get-involved" onClick={() => window.location.reload()} className="hover:text-orange-600 text-orange-700">Get Involved</Link></li>
          <li><Link to="/contact" onClick={() => window.location.reload()} className="hover:text-orange-600 text-orange-700">Contact</Link></li>
        </ul>
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            window.location.reload();
          }}
          className="md:hidden text-orange-800 hover:text-orange-600 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="bg-orange-100 px-4 py-2 space-y-2">
          <li><Link to="/" onClick={() => { setIsMenuOpen(false); window.location.reload(); }} className="block py-2 text-orange-700 hover:text-orange-600">Home</Link></li>
          <li><Link to="/about" onClick={() => { setIsMenuOpen(false); window.location.reload(); }} className="block py-2 text-orange-700 hover:text-orange-600">About</Link></li>
          <li><Link to="/stories" onClick={() => { setIsMenuOpen(false); window.location.reload(); }} className="block py-2 text-orange-700 hover:text-orange-600">Stories</Link></li>
          <li><Link to="/cultural-map" onClick={() => { setIsMenuOpen(false); window.location.reload(); }} className="block py-2 text-orange-700 hover:text-orange-600">Cultural Map</Link></li>
          <li><Link to="/get-involved" onClick={() => { setIsMenuOpen(false); window.location.reload(); }} className="block py-2 text-orange-700 hover:text-orange-600">Get Involved</Link></li>
          <li><Link to="/contact" onClick={() => { setIsMenuOpen(false); window.location.reload(); }} className="block py-2 text-orange-700 hover:text-orange-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
