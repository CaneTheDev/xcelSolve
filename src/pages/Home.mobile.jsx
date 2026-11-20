import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, Share2, Sparkles, ArrowRight } from 'lucide-react'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

function HomeMobile() {
  const services = [
    {
      id: 'galleries',
      title: 'Your projects, shown well',
      description: 'Galleries and before/after sliders that let your finished work sell for you.',
      icon: <Globe className="w-5 h-5" />,
      accentColor: '#0F6E56',
      bgColor: '#E7F6F1',
    },
    {
      id: 'contact',
      title: 'Easy to contact you',
      description: 'Quote forms and tap-to-call, so interested homeowners never have to hunt.',
      icon: <Share2 className="w-5 h-5" />,
      accentColor: '#D85A30',
      bgColor: '#FDEFEA',
    },
    {
      id: 'performance',
      title: 'Fast on every phone',
      description: 'Lean pages that load quickly, even on a weak signal.',
      icon: <Sparkles className="w-5 h-5" />,
      accentColor: '#534AB7',
      bgColor: '#EFEFFC',
    }
  ]

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Hero Section - Mobile Optimized - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero/kitchen-moblie.webp)' }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 px-5 text-center w-full">
          <p className="text-white/90 text-xs font-medium mb-3 tracking-wide uppercase">
            For kitchen & bath pros across the US
          </p>
          
          <h1 className="text-3xl font-black text-white tracking-tight leading-[1.1] mb-4">
            Your work deserves a better website.
          </h1>

          <p className="text-base text-white/90 leading-relaxed mb-8 px-2">
            We build fast, premium websites for kitchen and bath remodelers. Nothing else.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 active:bg-gray-200 text-[#0C447C] rounded-full font-bold text-base transition-all shadow-lg active:scale-[0.97]"
          >
            Call
          </Link>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="relative px-5 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-[1.1] mb-3">
            What you get
          </h2>
          <p className="text-base text-slate-600">
            A site that turns visitors into quote requests
          </p>
        </div>
      </section>

      {/* Service Cards Section - Mobile Stacked */}
      <section className="relative px-5 pb-12 space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="block bg-white rounded-2xl border-2 border-slate-200 p-6"
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
          </div>
        ))}
      </section>

      {/* Our Work Section */}
      <section className="relative px-5 py-12 bg-slate-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-[1.1] mb-3">
            Our work
          </h2>
          <p className="text-base text-slate-600">
            See the transformation
          </p>
        </div>

        <BeforeAfterSlider
          beforeImage="/images/work/Mr. Bath before.webp"
          afterImage="/images/work/Mr. Bath after.webp"
          laptopFrame={true}
        />

        <div className="text-center mt-6">
          <p className="text-sm text-slate-600 mb-4">Mr. Bath - Complete bathroom redesign</p>
        </div>
      </section>

      {/* Previous Work Section */}
      <section className="relative px-5 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-[1.1] mb-3">
            Live sites we've built
          </h2>
          <p className="text-base text-slate-600">
            Tap to explore
          </p>
        </div>

        <div className="space-y-6">
          {/* Insta Plus */}
          <a
            href="https://instaplus.ismaeelardo.workers.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl border-2 border-slate-200 overflow-hidden active:border-[#0C447C] transition-all active:shadow-lg"
            style={{ touchAction: 'manipulation' }}
          >
            <div className="aspect-video overflow-hidden bg-slate-100">
              <img
                src="/images/work/instaplus.png"
                alt="Install Plus website"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900">
                Install Plus
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Kitchen installer portfolio site
              </p>
            </div>
          </a>

          {/* NJS Installations */}
          <a
            href="https://njsinstallation.ismaeelardo.workers.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl border-2 border-slate-200 overflow-hidden active:border-[#0C447C] transition-all active:shadow-lg"
            style={{ touchAction: 'manipulation' }}
          >
            <div className="aspect-video overflow-hidden bg-slate-100">
              <img
                src="/images/work/njsinstallation.png"
                alt="NJS Installations website"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900">
                NJS Installations
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Kitchen, bathroom & building works
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative px-5 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-[1.1] mb-3">
            Why xcelsolve
          </h2>
          <p className="text-base text-slate-600">
            One focus, done properly
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Only kitchen & bath
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We don't build for every industry. We know what remodelers need from a site.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Preview before you pay
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              See your own homepage first. If you don't love it, you owe nothing.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Honest from day one
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We're a new studio in this niche, so we show our work instead of making claims.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative px-5 pb-12">
        <div className="bg-slate-900 rounded-2xl p-6 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">
            Want to see your homepage first?
          </h2>
          <p className="text-sm text-white/80 mb-5 leading-relaxed">
            Send a few details. We'll design a free preview for your business.
          </p>
          <div className="space-y-3">
            <a
              href="tel:+12099332393"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white hover:bg-gray-100 active:bg-gray-200 text-slate-900 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-[0.97]"
              style={{ touchAction: 'manipulation' }}
            >
              Call +1 (209) 933-2393
            </a>
          </div>
        </div>
      </section>

      {/* Contact Banner - Sticky at bottom for Contact nav */}
      <div id="contact-banner" className="h-20"></div>

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
