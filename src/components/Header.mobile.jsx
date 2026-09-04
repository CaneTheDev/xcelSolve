import React from 'react'
import { Link } from 'react-router-dom'
import BrandIcon from './BrandIcon.jsx'

function HeaderMobile() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="px-5">
        <div className="flex justify-center items-center h-16">
          {/* Centered Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <BrandIcon className="w-7 h-7 shrink-0" />
            <span className="text-xl font-bold tracking-tight text-[#0C447C] font-outfit lowercase">
              xcelsolve
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HeaderMobile
