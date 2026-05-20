import React from 'react'
import { Link } from 'react-router-dom'
import { TrendingUp, Monitor, Cpu, Check, ArrowRight } from 'lucide-react'

function Services() {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.15]" style={{ color: '#000' }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="services-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full uppercase tracking-wider">
            Our Expertise
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            Services Built for
            <br className="hidden sm:inline" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 px-3">Business Growth</span>
              <span className="absolute inset-0 bg-emerald-300 -skew-y-1 transform"></span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            We combine high-performance marketing, cutting-edge web experiences, and intelligent AI automation to build a scalable engine for your brand.
          </p>
        </div>

        {/* Navigation / Anchors */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          <a href="#marketing" className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-gray-900 hover:text-gray-900 shadow-sm transition-all">
            Marketing Ads
          </a>
          <a href="#web-design" className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-gray-900 hover:text-gray-900 shadow-sm transition-all">
            Website Design
          </a>
          <a href="#automation" className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-gray-900 hover:text-gray-900 shadow-sm transition-all">
            AI & Automation
          </a>
        </div>

        {/* A. Social Media Marketing */}
        <section id="marketing" className="scroll-mt-24 mb-24 bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-emerald-600 mb-4">
                <TrendingUp className="w-6 h-6" />
                <span className="font-bold uppercase tracking-wider text-sm">Growth Engine</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Social Media Marketing
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Connect directly with your ideal customers through highly tailored Facebook, Instagram, and LinkedIn ad campaigns. We handle everything from audience targeting to creative copywriting.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-3">What We Do:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Facebook & Instagram Ads",
                  "Targeted Lead Generation",
                  "Content & Creative Strategy",
                  "Brand & Engagement Growth"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Who It's For</h4>
                <p className="text-gray-700 font-medium">Businesses needing a predictable, consistent flow of new customer inquiries and online leads.</p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {[
                  { title: "Increased Brand Visibility", desc: "Show up directly in the feeds of people who are looking for you." },
                  { title: "Targeted Customer Acquisition", desc: "Don't waste budget showing ads to individuals outside your market." },
                  { title: "Measurable ROI", desc: "Clear analytics showing how much you spend and the revenue generated." },
                  { title: "Consistent Online Presence", desc: "Build authority and stay top-of-mind with prospective buyers." }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-emerald-700">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact" className="w-full py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm sm:text-base font-semibold transition-all inline-flex items-center justify-center gap-2">
                  Launch Campaign
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* B. Website Design */}
        <section id="web-design" className="scroll-mt-24 mb-24 bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 order-last lg:order-first bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {[
                  { title: "Professional Brand Image", desc: "A stunning, world-class presentation that outshines your competitors." },
                  { title: "Mobile-First Approach", desc: "Flawless rendering and snappy interaction on iPhones and Androids." },
                  { title: "Conversion-Optimized", desc: "Designed deliberately with structured call-to-actions to prompt bookings." },
                  { title: "Fast Loading Speeds", desc: "Optimized code built with Vite/React to achieve instant page loads." }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-700">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact" className="w-full py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm sm:text-base font-semibold transition-all inline-flex items-center justify-center gap-2">
                  Design Your Site
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-blue-600 mb-4">
                <Monitor className="w-6 h-6" />
                <span className="font-bold uppercase tracking-wider text-sm">Digital Presence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Website Design & Development
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Your website is your 24/7 digital storefront. We design highly-customized, lightning-fast business websites and lead-generating landing pages that build credibility and turn simple clicks into real customers.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-3">What We Do:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Custom Business Websites",
                  "High-Converting Landing Pages",
                  "Fully Responsive Layouts",
                  "Interactive UI & Smooth UX"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Who It's For</h4>
                <p className="text-gray-700 font-medium">Businesses looking to establish brand trust, upgrade their legacy websites, or drive traffic to a dedicated product release.</p>
              </div>
            </div>
          </div>
        </section>

        {/* C. AI & Software Automation */}
        <section id="automation" className="scroll-mt-24 mb-12 bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-purple-600 mb-4">
                <Cpu className="w-6 h-6" />
                <span className="font-bold uppercase tracking-wider text-sm">Smart Systems</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                AI & Software Automation
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We build smart systems that reduce manual work and help businesses operate faster. Free your staff from copying data, emailing reminders, or manually answering standard inquiries.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-3">What We Automate:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Customer Support Chatbots",
                  "Appointment Scheduling",
                  "CRM Lead Management",
                  "Invoice & Payment Tracking",
                  "Staff Workflow Approvals",
                  "Inventory Syncing Systems",
                  "Email Follow-up Workflows",
                  "Data Parsing & Reports"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Who It's For</h4>
                <p className="text-gray-700 font-medium">Businesses with repetitive manual processes looking to scale operations and reduce operational overhead.</p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {[
                  { title: "Save Dozens of Hours Weekly", desc: "Automate boring tasks and free up your staff for high-value work." },
                  { title: "Drastically Reduce Errors", desc: "Software runs accurately every time without manual entry mistakes." },
                  { title: "Scale Operations Effortlessly", desc: "Process double the volume of bookings and leads without hiring limits." },
                  { title: "Instant Customer Responses", desc: "AI bots and triggers answer inquiries in seconds, day or night." }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-purple-700">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact" className="w-full py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm sm:text-base font-semibold transition-all inline-flex items-center justify-center gap-2">
                  Request Automation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services
