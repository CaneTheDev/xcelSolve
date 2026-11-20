import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Globe, Share2, Sparkles } from 'lucide-react'
import useIsMobile from '../hooks/useIsMobile'
import HomeMobile from './Home.mobile'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

function Home() {
  const isMobile = useIsMobile()

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

  if (isMobile) {
    return <HomeMobile />
  }

  return (
    <>
      <Helmet>
        <title>xcelsolve | Premium Websites for Kitchen & Bath Remodelers</title>
        <meta name="description" content="Fast, premium websites built exclusively for kitchen and bath remodelers across the US. See your homepage preview before you pay." />
        <link rel="canonical" href="https://xcelsolve.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcelsolve.com/" />
        <meta property="og:title" content="xcelsolve | Premium Websites for Kitchen & Bath Remodelers" />
        <meta property="og:description" content="Fast, premium websites built exclusively for kitchen and bath remodelers across the US. See your homepage preview before you pay." />
        <meta property="og:image" content="https://xcelsolve.com/images/card.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "xcelsolve",
            "url": "https://xcelsolve.com",
            "logo": "https://xcelsolve.com/xcelsolvs-icon.svg",
            "description": "Premium websites built exclusively for kitchen and bath remodelers",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "sameAs": []
          })}
        </script>
      </Helmet>
      <div className="bg-white min-h-[calc(100vh-144px)] relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero/kitchen.webp)' }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 w-full px-6 sm:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-white/90 font-medium mb-6 tracking-wide uppercase" style={{ fontSize: 'clamp(0.875rem, 1vw, 1.125rem)' }}>
              For kitchen & bath pros across the US
            </p>
            
            <h1 className="font-black text-white tracking-tight leading-[1.15] mb-8" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)' }}>
              Your work deserves<br />
              a better website.
            </h1>

            <p className="text-white/90 mb-12 leading-relaxed mx-auto max-w-2xl" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.375rem)' }}>
              We build fast, premium websites for kitchen and bath remodelers.<br />
              Nothing else.
            </p>

            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-white hover:bg-gray-100 text-[#0C447C] rounded-full font-bold transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              style={{ fontSize: 'clamp(0.875rem, 1vw, 1.125rem)' }}
            >
              Call
            </Link>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="relative max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
            What you get
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A site that turns visitors into quote requests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
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
            </div>
          ))}
        </div>
      </section>

      {/* Our Work Section */}
      <section className="relative max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
            Our work
          </h2>
          <p className="text-lg text-slate-600">
            See the transformation
          </p>
        </div>

        <BeforeAfterSlider
          beforeImage="/images/work/Mr. Bath before.webp"
          afterImage="/images/work/Mr. Bath after.webp"
          laptopFrame={true}
        />

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">Mr. Bath - Complete bathroom redesign with modern gallery</p>
          <Link
            to="/services"
            className="inline-block px-8 py-4 bg-[#0C447C] hover:bg-[#08335D] text-white rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            See what you get →
          </Link>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
            Why xcelsolve
          </h2>
          <p className="text-lg text-slate-600">
            One focus, done properly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Only kitchen & bath
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We don't build for every industry. We know what remodelers need from a site.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Preview before you pay
            </h3>
            <p className="text-slate-600 leading-relaxed">
              See your own homepage first. If you don't love it, you owe nothing.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Honest from day one
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We're a new studio in this niche, so we show our work instead of making claims.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative max-w-4xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.1] mb-4">
            Want to see your homepage first?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Send a few details. We'll design a free preview for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+12099332393"
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              Call +1 (209) 933-2393
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Home