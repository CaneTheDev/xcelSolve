import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Zap, Headphones } from 'lucide-react'
import useIsMobile from '../hooks/useIsMobile'
import AboutMobile from './About.mobile'

function About() {
  const isMobile = useIsMobile()

  const whyChooseUs = [
    {
      title: 'Built specifically for small business needs, not bloated templates',
      description: 'We do not load down your website with complicated plug-ins or confusing dashboards. You get a clean, tailored tool that serves your customers quickly.',
      icon: <Zap className="w-5 h-5 text-[#0C447C]" />
    },
    {
      title: 'Fast turnaround and clear, honest pricing',
      description: 'We agree on scope and pricing upfront before we write a single line of code. No hidden surprise invoices or endless project delays.',
      icon: <ShieldCheck className="w-5 h-5 text-[#0F6E56]" />
    },
    {
      title: 'Ongoing support after the site goes live',
      description: 'We do not disappear once your website launches. Whenever you need updates, edits, or advice, we are just a quick message away.',
      icon: <Headphones className="w-5 h-5 text-[#534AB7]" />
    }
  ]

  if (isMobile) {
    return <AboutMobile />
  }

  return (
    <div className="bg-white py-12 sm:py-20 min-h-[calc(100vh-144px)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <polygon points="60,10 90,50 60,90 30,50" fill="#0C447C" />
              <polygon points="10,60 25,80 10,100 -5,80" fill="#0C447C" />
              <polygon points="110,60 125,80 110,100 95,80" fill="#0C447C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-pattern)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Helping UK small businesses grow online
          </h1>
        </div>

        {/* Main Narrative Card */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-7 sm:p-10 mb-12">
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal mb-6">
            xcelsolve works with small businesses across the UK (tradespeople, salons, cafes, and local professional services) to build simple, effective websites that bring in customers.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We focus on what actually works for small businesses: a clean, fast website that is easy to find, easy to update, and built to convert visitors into paying customers. No jargon, no unnecessary extras: just a site that does its job.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-14 sm:mb-18">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center sm:text-left">
            Why choose us
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-sm transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Note Card */}
        <div className="bg-white border-2 border-[#0C447C]/15 rounded-3xl p-7 sm:p-10 mb-14 shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-6">
            <div className="w-16 h-16 rounded-full bg-[#0C447C] text-white flex items-center justify-center font-bold text-2xl font-outfit shadow-sm shrink-0">
              I
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Ismail</h3>
              <p className="text-sm font-medium text-slate-500">Founder, xcelsolve</p>
            </div>
          </div>

          <blockquote className="text-base sm:text-lg text-slate-700 italic leading-relaxed border-l-2 border-[#0C447C] pl-4 sm:pl-6 my-2">
            "I started xcelsolve to help small businesses get online without the confusion or high cost that usually comes with it. Every client gets a website built around what their business actually needs."
          </blockquote>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#0C447C] hover:bg-[#08335D] text-white rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            Get a free quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
