import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Mail, Phone } from 'lucide-react'
import BrandIcon from './BrandIcon.jsx'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-slate-200 relative overflow-hidden hidden md:block">
      {/* Geometric Line Pattern Background */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="line-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Diagonal lines */}
              <line x1="0" y1="0" x2="100" y2="100" stroke="#0C447C" strokeWidth="1.5" />
              <line x1="0" y1="100" x2="100" y2="0" stroke="#0C447C" strokeWidth="1.5" />
              {/* Horizontal and vertical lines */}
              <line x1="0" y1="50" x2="100" y2="50" stroke="#0C447C" strokeWidth="1" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="#0C447C" strokeWidth="1" />
              {/* Corner lines */}
              <line x1="0" y1="25" x2="25" y2="0" stroke="#0C447C" strokeWidth="1" />
              <line x1="75" y1="0" x2="100" y2="25" stroke="#0C447C" strokeWidth="1" />
              <line x1="0" y1="75" x2="25" y2="100" stroke="#0C447C" strokeWidth="1" />
              <line x1="75" y1="100" x2="100" y2="75" stroke="#0C447C" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#line-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <BrandIcon className="w-8 h-8 shrink-0" />
              <span className="text-xl font-bold tracking-tight text-slate-900 lowercase">
                xcelsolve
              </span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              Simple, fast, affordable websites built for UK tradespeople and local businesses.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-6">
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Get In Touch</h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-md">
              Ready to take your business online? Get in touch with us today for a quick chat about your project.
            </p>
            
            {/* Contact Methods */}
            <div className="space-y-3">
              <a 
                href="mailto:info@xcelsolve.com" 
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 transition-colors group"
              >
                <div className="w-9 h-9 bg-slate-100 group-hover:bg-slate-200 rounded flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-slate-700" />
                </div>
                info@xcelsolve.com
              </a>
              
              <a 
                href="https://wa.me/message/CCYY5ZK3RKITJ1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 transition-colors group"
              >
                <div className="w-9 h-9 bg-slate-100 group-hover:bg-slate-200 rounded flex items-center justify-center transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#0F6E56]" />
                </div>
                Chat on WhatsApp
              </a>
              
              <a 
                href="tel:+447520682782" 
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 transition-colors group"
              >
                <div className="w-9 h-9 bg-slate-100 group-hover:bg-slate-200 rounded flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 text-slate-700" />
                </div>
                +44 7520 682782
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">
            © {currentYear} xcelsolve. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            Built for UK small businesses
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
