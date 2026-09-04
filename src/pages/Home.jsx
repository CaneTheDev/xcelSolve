import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Globe, Share2, Sparkles } from 'lucide-react'
import useIsMobile from '../hooks/useIsMobile'
import HomeMobile from './Home.mobile'

function Home() {
  const isMobile = useIsMobile()

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

  if (isMobile) {
    return <HomeMobile />
  }

  return (
    <>
      <Helmet>
        <title>xcelsolve | Simple, Fast Websites for UK Small Businesses</title>
        <meta name="description" content="Simple, fast, affordable websites built for tradespeople and UK small businesses. Get a clean, mobile-friendly website that brings in customers." />
        <link rel="canonical" href="https://xcelsolve.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcelsolve.com/" />
        <meta property="og:title" content="xcelsolve | Simple, Fast Websites for UK Small Businesses" />
        <meta property="og:description" content="Simple, fast, affordable websites built for tradespeople and UK small businesses. Get a clean, mobile-friendly website that brings in customers." />
        <meta property="og:image" content="https://xcelsolve.com/images/card.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "xcelsolve",
            "url": "https://xcelsolve.com",
            "logo": "https://xcelsolve.com/xcelsolvs-icon.svg",
            "description": "Simple, fast, affordable websites built for tradespeople and UK small businesses",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GB"
            },
            "sameAs": []
          })}
        </script>
      </Helmet>
      <div className="bg-white min-h-[calc(100vh-144px)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="polygon-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <polygon points="60,10 90,50 60,90 30,50" fill="#0C447C" />
              <polygon points="10,60 25,80 10,100 -5,80" fill="#0C447C" />
              <polygon points="110,60 125,80 110,100 95,80" fill="#0C447C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#polygon-pattern)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-4xl mx-auto px-6 sm:px-8 pt-20 pb-16 sm:pt-32 sm:pb-20 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
          Websites that bring UK small businesses online
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-12 leading-loose">
          Simple, fast, affordable websites built for<br className="hidden sm:block" /> tradespeople and local businesses.
        </p>

        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-[#0C447C] hover:bg-[#08335D] text-white rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg active:scale-[0.98] mb-12"
        >
          Get a free quote
        </Link>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-3">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-medium text-sm transition-all shadow-sm hover:shadow-md"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="relative max-w-6xl mx-auto px-6 sm:px-8 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="group bg-white rounded-3xl border-2 border-slate-200 hover:border-slate-300 p-8 transition-all hover:shadow-lg"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105"
                style={{ backgroundColor: service.bgColor }}
              >
                <div style={{ color: service.accentColor }}>
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0C447C] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}

export default Home