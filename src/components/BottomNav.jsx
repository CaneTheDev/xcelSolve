import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Briefcase, User, Mail } from 'lucide-react'

function BottomNav() {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'About', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: Mail }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg md:hidden">
      <div className="flex items-center justify-around px-2 py-2 safe-bottom">
        {navItems.map((item) => {
          const IconComponent = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
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
                  <IconComponent 
                    className={`w-5 h-5 mb-1 transition-all ${
                      isActive ? 'scale-110' : ''
                    }`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className={`text-[10px] font-medium tracking-wide uppercase ${
                    isActive ? 'font-bold' : ''
                  }`}>
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNav
