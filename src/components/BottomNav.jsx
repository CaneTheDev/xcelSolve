import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Home, Briefcase, Phone } from 'lucide-react'

function BottomNav() {
  const navigate = useNavigate()

  const handleContactClick = (e) => {
    e.preventDefault()
    navigate('/')
    // Scroll to bottom after navigation
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }, 100)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg md:hidden">
      <div className="flex items-center justify-around px-2 py-2 safe-bottom">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center px-4 py-2 rounded-xl min-w-[70px] transition-all ${
              isActive
                ? 'text-[#0C447C] bg-slate-50'
                : 'text-slate-500'
            }`
          }
          style={{ touchAction: 'manipulation' }}
        >
          {({ isActive }) => (
            <>
              <Home 
                className={`w-5 h-5 mb-1 transition-all ${
                  isActive ? 'scale-110' : ''
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-[10px] font-medium tracking-wide uppercase ${
                isActive ? 'font-bold' : ''
              }`}>
                Home
              </span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center px-4 py-2 rounded-xl min-w-[70px] transition-all ${
              isActive
                ? 'text-[#0C447C] bg-slate-50'
                : 'text-slate-500'
            }`
          }
          style={{ touchAction: 'manipulation' }}
        >
          {({ isActive }) => (
            <>
              <Briefcase 
                className={`w-5 h-5 mb-1 transition-all ${
                  isActive ? 'scale-110' : ''
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-[10px] font-medium tracking-wide uppercase ${
                isActive ? 'font-bold' : ''
              }`}>
                Services
              </span>
            </>
          )}
        </NavLink>

        <button
          onClick={handleContactClick}
          className="flex flex-col items-center justify-center px-4 py-2 rounded-xl min-w-[70px] text-slate-500 transition-all active:text-[#0C447C] active:bg-slate-50"
          style={{ touchAction: 'manipulation' }}
        >
          <Phone className="w-5 h-5 mb-1" strokeWidth={2} />
          <span className="text-[10px] font-medium tracking-wide uppercase">
            Contact
          </span>
        </button>
      </div>
    </nav>
  )
}

export default BottomNav
