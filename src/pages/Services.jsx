import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, Share2, Sparkles, Check, ArrowRight } from 'lucide-react'
import useIsMobile from '../hooks/useIsMobile'
import ServicesMobile from './Services.mobile'

function Services() {
  const isMobile = useIsMobile()

  const serviceList = [
    {
      id: 'websites',
      title: 'Websites',
      tagline: 'Simple, mobile-friendly websites built to bring in customers.',
      accentColor: '#0F6E56',
      accentBg: '#E7F6F1',
      icon: <Globe className="w-6 h-6" style={{ color: '#0F6E56' }} />,
      idealFor: 'Tradespeople, salons, cafes, clinics, and local professional services needing an effective online presence.',
      features: [
        'Designed specifically for mobile phones and tablets',
        'Fast loading speeds with zero clutter or unnecessary extras',
        'Clear call-to-action buttons for phone calls, WhatsApp, and quote requests',
        'Easy to update and maintain without technical headaches',
        'Search-friendly structure so local customers can find you easily'
      ]
    },
    {
      id: 'social-media',
      title: 'Social media marketing',
      tagline: 'Grow your local presence and stay visible to nearby customers.',
      accentColor: '#D85A30',
      accentBg: '#FDEFEA',
      icon: <Share2 className="w-6 h-6" style={{ color: '#D85A30' }} />,
      idealFor: 'Businesses wanting to stay active, build trust, and reach local clients in their immediate service area.',
      features: [
        'Targeted local visibility campaigns on Facebook and Instagram',
        'Clear, straightforward messaging tailored to your community',
        'Consistent digital presence that keeps your business top of mind',
        'Lead generation campaigns that connect you directly with interested buyers',
        'No confusing marketing jargon, just transparent progress'
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI and automation',
      tagline: 'Save time on repetitive admin and customer follow-up.',
      accentColor: '#534AB7',
      accentBg: '#EFEFFC',
      icon: <Sparkles className="w-6 h-6" style={{ color: '#534AB7' }} />,
      idealFor: 'Busy owners who spend too many evening hours answering repetitive questions and sending quotes.',
      features: [
        'Automated initial responses to new website and message inquiries',
        'Smart appointment and consultation booking reminders',
        'Automated customer follow-ups so warm leads never get lost',
        'Simple intake forms that organize your customer requests automatically',
        'Practical, easy-to-use setups without complex software overhead'
      ]
    }
  ]

  if (isMobile) {
    return <ServicesMobile />
  }

  return (
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
            Simple services built for real results
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-loose">
            Everything your business needs to attract customers,<br className="hidden sm:block" /> build credibility, and save valuable time.
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
                      Transparent pricing with zero hidden fees.
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
            Not sure which service is right for you?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8 text-base leading-loose">
            Tell us about your business and we will suggest the most practical, cost-effective setup for your goals.
          </p>
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

export default Services
