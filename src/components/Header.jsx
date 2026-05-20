import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center space-x-2 shrink-0">
            <Zap className="w-6 h-6 text-gray-900 fill-emerald-300" />
            <span className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">XcelSolve</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center shrink-0">
            <Link 
              to="/contact" 
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold transition-all shadow-sm"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md transition-all">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                    isActive
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 px-4">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full text-center py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-all shadow-sm"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header