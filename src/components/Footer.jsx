import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center shrink-0 group">
              <span className="font-outfit text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                <span className="text-2xl sm:text-3xl font-black bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-500 bg-clip-text text-transparent mr-[2px] transition-all duration-300 group-hover:from-emerald-400 group-hover:to-teal-400 inline-block transform group-hover:scale-105">X</span>
                celSolve
              </span>
            </Link>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              We help businesses attract customers, build strong online presence, and automate repetitive office tasks using smart systems and AI.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#marketing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services#web-design" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Website Design & Dev
                </Link>
              </li>
              <li>
                <Link to="/services#automation" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  AI & Software Automation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            &copy; {currentYear} XcelSolve. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/xcelsolve?igsh=MTRpY2c4aG9xZmY5cQ%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
