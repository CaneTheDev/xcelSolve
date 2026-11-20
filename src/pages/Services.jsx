import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Globe, Share2, Sparkles, Check, ArrowRight } from 'lucide-react'
import useIsMobile from '../hooks/useIsMobile'
import ServicesMobile from './Services.mobile'

function Services() {
  const isMobile = useIsMobile()

  const serviceList = [
    {
      id: 'galleries',
      title: 'Photo-led project galleries',
      tagline: 'Let your finished work sell for you.',
      accentColor: '#0F6E56',
      accentBg: '#E7F6F1',
      icon: <Globe className="w-6 h-6" style={{ color: '#0F6E56' }} />,
      idealFor: 'Showcase your portfolio immediately.',
      features: [
        'Full-width project galleries',
        'Before/after comparison sliders',
        'Mobile-optimized photos',
        'Fast-loading images',
        'Organized by project type'
      ]
    },
    {
      id: 'contact',
      title: 'Quote request forms',
      tagline: 'Make it easy for homeowners to reach you.',
      accentColor: '#D85A30',
      accentBg: '#FDEFEA',
      icon: <Share2 className="w-6 h-6" style={{ color: '#D85A30' }} />,
      idealFor: 'Never lose a lead again.',
      features: [
        'Tap-to-call buttons everywhere',
        'Simple quote forms',
        'Direct email routing',
        'Mobile-friendly contact',
        'Quick name and project capture'
      ]
    },
    {
      id: 'performance',
      title: 'Fast, lean pages',
      tagline: 'Sites that load quickly on every device.',
      accentColor: '#534AB7',
      accentBg: '#EFEFFC',
      icon: <Sparkles className="w-6 h-6" style={{ color: '#534AB7' }} />,
      idealFor: 'Performance on weak signals.',
      features: [
        'No bloated templates',
        'Compressed images',
        'Minimal, focused design',
        'Mobile-first performance',
        'Reliable hosting'
      ]
    }
  ]

  if (isMobile) {
    return <ServicesMobile />
  }

  return (
    <>
      <Helmet>
        <title>What You Get - Premium Website Features for Kitchen & Bath Pros | xcelsolve</title>
        <meta name="description" content="Photo-led galleries, before/after sliders, quote forms, and fast-loading pages. Everything kitchen and bath remodelers need in a website." />
        <link rel="canonical" href="https://xcelsolve.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcelsolve.com/services" />
        <meta property="og:title" content="What You Get - Premium Website Features for Kitchen & Bath Pros | xcelsolve" />
        <meta property="og:description" content="Photo-led galleries, before/after sliders, quote forms, and fast-loading pages. Everything kitchen and bath remodelers need in a website." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Design for Kitchen and Bath Remodelers",
            "provider": {
              "@type": "Organization",
              "name": "xcelsolve"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Website Features",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Photo-led Project Galleries",
                    "description": "Let your finished work sell for you"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Quote Request Forms",
                    "description": "Make it effortless for homeowners to reach you"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fast, Lean Pages",
                    "description": "Sites that load quickly on every device"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <div className="bg-white py-12 sm:py-20 min-h-[calc(100vh-144px)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <polygon points="60,10 90,50 60,90 30,50" fill="#0C447C" />
              <polygon points="10,60 25,80 10,100 -5,80" fill="#0C447C" />
              <polygon points="110,60 125,80 110,100 95,80" fill="#0C447C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-pattern)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            What you get
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-loose">
            Everything a kitchen & bath remodeler needs<br className="hidden sm:block" /> to turn visitors into quote requests.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12 sm:space-y-16">
          {serviceList.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-28 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 hover:border-slate-300 hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-8 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: service.accentBg }}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Service 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                      {service.title}
                    </h2>
                    <p className="text-base sm:text-lg font-medium text-slate-700 mt-2">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all shadow-sm active:scale-[0.98]"
                    style={{ backgroundColor: service.accentColor }}
                  >
                    Get a quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                    What is included
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: service.accentBg }}
                        >
                          <Check className="w-3.5 h-3.5" style={{ color: service.accentColor }} />
                        </div>
                        <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Who this is for
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {service.idealFor}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60">
                    <p className="text-xs text-slate-500">
                      Part of every xcelsolve website.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-16 sm:mt-24 text-center bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Ready to see your homepage?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8 text-base leading-loose">
            We'll design a free preview for your business. No obligation, no pressure.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#0C447C] hover:bg-[#08335D] text-white rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            Get your free homepage preview
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
