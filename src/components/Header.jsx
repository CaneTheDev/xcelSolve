import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import BrandIcon from './BrandIcon.jsx'
import useIsMobile from '../hooks/useIsMobile'
import HeaderMobile from './Header.mobile.jsx'

function Header() {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)

  if (isMobile) {
    return <HeaderMobile />
  }

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5 group">
            <BrandIcon className="w-8 h-8 shrink-0 transition-transform group-hover:scale-105" />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0C447C] font-outfit lowercase">
              xcelsolve
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#0C447C] bg-slate-100 font-semibold'
                      : 'text-slate-600 hover:text-[#0C447C] hover:bg-slate-50'
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
              className="px-5 py-2.5 bg-[#0C447C] hover:bg-[#08335D] text-white rounded-lg text-sm font-semibold transition-all shadow-sm active:scale-[0.98]"
            >
              Get a free quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-slate-700 hover:text-[#0C447C] hover:bg-slate-100 rounded-lg focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg transition-all">
          <div className="px-4 pt-3 pb-5 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base transition-colors ${
                    isActive
                      ? 'text-[#0C447C] bg-slate-100 font-semibold'
                      : 'text-slate-700 hover:text-[#0C447C] hover:bg-slate-50 font-medium'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-3">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full text-center py-3.5 bg-[#0C447C] hover:bg-[#08335D] text-white rounded-lg font-semibold transition-all shadow-sm"
              >
                Get a free quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header