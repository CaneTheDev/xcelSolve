import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, Share2, Sparkles, ArrowRight } from 'lucide-react'

function HomeMobile() {
  const services = [
    {
      id: 'websites',
      title: 'Websites',
      description: 'Simple, mobile-friendly websites built to bring in customers.',
      icon: <Globe className="w-5 h-5" />,
      accentColor: '#0F6E56',
      bgColor: '#E7F6F1',
    },
    {
      id: 'social-media',
      title: 'Social media marketing',
      description: 'Grow your local presence and stay visible to nearby customers.',
      icon: <Share2 className="w-5 h-5" />,
      accentColor: '#D85A30',
      bgColor: '#FDEFEA',
    },
    {
      id: 'ai-automation',
      title: 'AI and automation',
      description: 'Save time on repetitive admin and customer follow-up.',
      icon: <Sparkles className="w-5 h-5" />,
      accentColor: '#534AB7',
      bgColor: '#EFEFFC',
    }
  ]

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mobile-polygon-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon points="40,5 60,30 40,55 20,30" fill="#0C447C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mobile-polygon-pattern)" />
        </svg>
      </div>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative px-5 pt-10 pb-8 text-center">
        <h1 className="text-[2.5rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
          Websites that bring UK small businesses online
        </h1>

        <p className="text-base text-slate-600 leading-relaxed mb-8 px-2">
          Simple, fast, affordable websites built for tradespeople and local businesses.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 w-full max-w-xs mx-auto px-8 py-4 bg-[#0C447C] hover:bg-[#08335D] active:bg-[#062949] text-white rounded-full font-bold text-base transition-all shadow-lg active:scale-[0.97]"
        >
          Get a free quote
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Service Tags - Horizontal Scroll */}
      <section className="relative px-5 py-6">
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="flex-shrink-0 px-5 py-2.5 bg-slate-100 active:bg-slate-200 text-slate-700 rounded-full font-medium text-sm transition-all shadow-sm whitespace-nowrap"
              style={{ touchAction: 'manipulation' }}
            >
              {service.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Service Cards Section - Mobile Stacked */}
      <section className="relative px-5 pb-12 space-y-4">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services#${service.id}`}
            className="block bg-white rounded-2xl border-2 border-slate-200 active:border-slate-300 p-6 transition-all shadow-sm active:shadow-md"
            style={{ touchAction: 'manipulation' }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: service.bgColor }}
              >
                <div style={{ color: service.accentColor }}>
                  {service.icon}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end text-sm font-semibold" style={{ color: service.accentColor }}>
              Learn more
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </Link>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="relative px-5 pb-12">
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
            Contact us now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default HomeMobile
