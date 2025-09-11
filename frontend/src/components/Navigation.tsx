import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";

import { CgProfile } from "react-icons/cg";
import { PowerOffIcon } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  

  return (
    <nav className="bg-white border-b border-brand-lightgray sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-brand-dark">AutoExchange</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-brand-dark hover:text-brand-blue transition-colors">Home</Link>
            <Link to="/inventory" className="text-brand-dark hover:text-brand-blue transition-colors">Inventory</Link>
            <Link to="/about" className="text-brand-dark hover:text-brand-blue transition-colors">About</Link>
            <Link to="/blog" className="text-brand-dark hover:text-brand-blue transition-colors">Blog</Link>
            <Link to="/contact" className="text-brand-dark hover:text-brand-blue transition-colors">Contact</Link>

            {/* Search button (desktop) */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 text-brand-dark hover:text-brand-blue transition-colors"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Search
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ">
            <Link
              to="/contact"
              className="bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>

            <button
              onClick={()=> navigate("/login")}
              className="bg-transparent px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <PowerOffIcon width={30} fill="white"/>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-brand-lightgray">
              <Link to="/" className="block px-3 py-2 text-brand-dark hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/inventory" className="block px-3 py-2 text-brand-dark hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Inventory</Link>
              <Link to="/about" className="block px-3 py-2 text-brand-dark hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/blog" className="block px-3 py-2 text-brand-dark hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <Link to="/contact" className="block px-3 py-2 text-brand-dark hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link to="/login" className="block px-3 py-2 text-brand-dark hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

              {/* Search button (mobile) */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="block w-full text-left px-3 py-2 text-brand-dark hover:text-brand-blue transition-colors"
              >
                Search
              </button>

              <Link
                to="/contact"
                className="block mx-3 mt-4 bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal open={isModalOpen} cancelFn={() => setIsModalOpen(false)} titleContent="Search cars" />
    </nav>
  );
};

export default Navigation;
