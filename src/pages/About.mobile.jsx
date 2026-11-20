import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Zap, Headphones } from 'lucide-react'

function AboutMobile() {
  const whyChooseUs = [
    {
      title: 'Built for kitchen & bath remodelers',
      description: 'Every site is designed to showcase your projects and convert visitors into quote requests.',
      icon: <Zap className="w-5 h-5 text-[#0C447C]" />
    },
    {
      title: 'Preview before you pay',
      description: 'See your own homepage design first. If you don\'t love it, you owe nothing.',
      icon: <ShieldCheck className="w-5 h-5 text-[#0F6E56]" />
    },
    {
      title: 'Ongoing support',
      description: "We don't disappear after launch. Need updates or changes? We're just a message away.",
      icon: <Headphones className="w-5 h-5 text-[#534AB7]" />
    }
  ]

  return (
    <div className="bg-white py-8 min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mobile-about-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon points="40,5 60,30 40,55 20,30" fill="#0C447C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mobile-about-pattern)" />
        </svg>
      </div>

      <div className="px-5 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
            Premium websites for kitchen & bath pros
          </h1>
        </div>

        {/* Main Narrative Card */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 mb-8">
          <p className="text-base text-slate-800 leading-relaxed font-normal mb-4">
            xcelsolve builds premium websites exclusively for kitchen and bath remodelers across the US.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            We focus on what remodelers need: photo-led galleries, before/after sliders, quote forms that convert, and pages that load fast on every phone.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            Why choose us
          </h2>

          <div className="space-y-3">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
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
        <div className="bg-white border-2 border-[#0C447C]/15 rounded-2xl p-6 mb-10 shadow-sm">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-[#0C447C] text-white flex items-center justify-center font-bold text-2xl font-outfit shadow-sm shrink-0">
              I
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Ismail</h3>
              <p className="text-sm font-medium text-slate-500">Founder, xcelsolve</p>
            </div>
          </div>

          <blockquote className="text-base text-slate-700 italic leading-relaxed border-l-2 border-[#0C447C] pl-4">
            &quot;I started xcelsolve to focus on one industry and do it right. Kitchen and bath remodelers deserve sites that match the quality of their work—that&apos;s what we build.&quot;
          </blockquote>
        </div>

        {/* CTA */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Ready to get started?
          </h2>
          <p className="text-sm text-slate-600 mb-5 leading-relaxed">
            Get a free quote tailored to your business needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#0C447C] hover:bg-[#08335D] active:bg-[#062949] text-white rounded-xl font-semibold text-sm transition-all shadow-md active:scale-[0.97]"
            style={{ touchAction: 'manipulation' }}
          >
            Get a free quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutMobile
