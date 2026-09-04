import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Share2, Sparkles, Check, ArrowRight, ChevronDown } from 'lucide-react'

function ServicesMobile() {
  const [expandedService, setExpandedService] = useState(null)

  const serviceList = [
    {
      id: 'websites',
      title: 'Websites',
      tagline: 'Simple, mobile-friendly websites built to bring in customers.',
      accentColor: '#0F6E56',
      accentBg: '#E7F6F1',
      icon: <Globe className="w-5 h-5" style={{ color: '#0F6E56' }} />,
      idealFor: 'Tradespeople, salons, cafes, clinics, and local professional services needing an effective online presence.',
      features: [
        'Designed specifically for mobile phones and tablets',
        'Fast loading speeds with zero clutter',
        'Clear call-to-action buttons',
        'Easy to update and maintain',
        'Search-friendly structure'
      ]
    },
    {
      id: 'social-media',
      title: 'Social media marketing',
      tagline: 'Grow your local presence and stay visible to nearby customers.',
      accentColor: '#D85A30',
      accentBg: '#FDEFEA',
      icon: <Share2 className="w-5 h-5" style={{ color: '#D85A30' }} />,
      idealFor: 'Businesses wanting to stay active, build trust, and reach local clients in their immediate service area.',
      features: [
        'Targeted local visibility campaigns',
        'Clear, straightforward messaging',
        'Consistent digital presence',
        'Lead generation campaigns',
        'Transparent progress tracking'
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI and automation',
      tagline: 'Save time on repetitive admin and customer follow-up.',
      accentColor: '#534AB7',
      accentBg: '#EFEFFC',
      icon: <Sparkles className="w-5 h-5" style={{ color: '#534AB7' }} />,
      idealFor: 'Busy owners who spend too many evening hours answering repetitive questions and sending quotes.',
      features: [
        'Automated initial responses',
        'Smart appointment reminders',
        'Automated customer follow-ups',
        'Simple intake forms',
        'Practical, easy-to-use setups'
      ]
    }
  ]

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <div className="bg-white py-8 min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mobile-services-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon points="40,5 60,30 40,55 20,30" fill="#0C447C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mobile-services-pattern)" />
        </svg>
      </div>

      <div className="px-5 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
            Simple services built for real results
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Everything your business needs to attract customers and save time.
          </p>
        </div>

        {/* Services List - Accordion Style */}
        <div className="space-y-4 mb-10">
          {serviceList.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all"
            >
              {/* Service Header - Always Visible */}
              <button
                onClick={() => toggleService(service.id)}
                className="w-full p-5 flex items-center justify-between text-left active:bg-slate-50 transition-colors"
                style={{ touchAction: 'manipulation' }}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: service.accentBg }}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-slate-900 mb-0.5">
                      {service.title}
                    </h2>
                    <p className="text-xs text-slate-600 line-clamp-1">
                      {service.tagline}
                    </p>
                  </div>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 shrink-0 ml-2 transition-transform ${
                    expandedService === service.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expandable Content */}
              {expandedService === service.id && (
                <div className="px-5 pb-5 space-y-4 animate-fadeIn">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Features */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                      What&apos;s included
                    </h3>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div
                            className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ backgroundColor: service.accentBg }}
                          >
                            <Check className="w-2.5 h-2.5" style={{ color: service.accentColor }} />
                          </div>
                          <span className="text-sm text-slate-700 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Who This Is For */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Who this is for
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {service.idealFor}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold text-sm text-white transition-all shadow-sm active:scale-[0.97]"
                    style={{ 
                      backgroundColor: service.accentColor,
                      touchAction: 'manipulation'
                    }}
                  >
                    Get a quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
            Not sure which service is right?
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            Tell us about your business and we&apos;ll suggest the most practical setup for your goals.
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

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default ServicesMobile
