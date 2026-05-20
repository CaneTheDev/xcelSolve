import React from 'react'
import { Link } from 'react-router-dom'
import { Eye, Award, Activity, Check, ArrowRight, Zap, Database, Cpu, TrendingUp, Monitor } from 'lucide-react'

function About() {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.15]" style={{ color: '#000' }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="about-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full uppercase tracking-wider">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            We Build Systems for
            <br className="hidden sm:inline" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 px-3">Modern Growth</span>
              <span className="absolute inset-0 bg-emerald-300 -skew-y-1 transform"></span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            XcelSolve is a tech-focused agency built to help businesses attract more customers, establish strong digital trust, and operate at maximum efficiency.
          </p>
        </div>

        {/* The Vision Section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left side: Core Philosophy details */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 text-emerald-600 mb-4">
                <Eye className="w-6 h-6" />
                <span className="font-bold uppercase tracking-wider text-sm">The Vision</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Core Philosophy
              </h2>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                At XcelSolve, we believe technology should be an accelerator, not a bottleneck. We stand for simple, high-performing systems that deliver clear results removing complexity so your business can focus on what it does best.
              </p>

              {/* Grid of philosophy cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: <Zap className="w-5 h-5 text-emerald-600" />,
                    title: "Simplicity First",
                    desc: "We build intuitive solutions. No over-engineered bloat, just systems that work."
                  },
                  {
                    icon: <Activity className="w-5 h-5 text-blue-600" />,
                    title: "Tangible ROI",
                    desc: "We focus on real metrics: hours saved, leads captured, and conversion rates."
                  },
                  {
                    icon: <Database className="w-5 h-5 text-purple-600" />,
                    title: "Rapid Execution",
                    desc: "We deliver quickly, communicate transparently, and iterate in real-time."
                  }
                ].map((pill, idx) => (
                  <div key={idx} className="p-5 bg-gray-50 border border-gray-150 rounded-xl hover:border-gray-300 transition-colors flex flex-col">
                    <div className="mb-3 p-2 bg-white rounded-lg border border-gray-200/60 inline-self-start self-start">
                      {pill.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{pill.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed flex-grow">{pill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Stand For list */}
            <div className="lg:col-span-4 bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 relative overflow-hidden self-start">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-full filter blur-xl opacity-40 -mr-6 -mt-6"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">What We Stand For</h3>
              <ul className="space-y-4">
                {[
                  "Result-oriented systems",
                  "Mobile-first, conversion-focused design",
                  "Eliminating repetitive manual labor",
                  "Fast delivery and transparent iterations"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs sm:text-sm text-gray-700">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* How We Drive Growth (Pillars Grid) */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wider">
              Our Capabilities
            </span>
            <h3 className="text-3xl font-bold text-gray-900 mt-3">How We Drive Growth</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
                title: "Performance Ads",
                desc: "High-yield paid campaigns targeting qualified buyers on Facebook, Instagram, and LinkedIn."
              },
              {
                icon: <Monitor className="w-6 h-6 text-blue-600" />,
                title: "Snappy Interfaces",
                desc: "Mobile-optimized, conversion-focused custom websites built for lightning-fast speeds."
              },
              {
                icon: <Cpu className="w-6 h-6 text-purple-600" />,
                title: "Smart Workflows",
                desc: "AI chatbots, automated scheduling, and auto-sync systems to manage leads."
              },
              {
                icon: <Award className="w-6 h-6 text-indigo-600" />,
                title: "Unified Team",
                desc: "A singular partner handling design, development, and marketing from end to end."
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="mb-4 p-3 bg-gray-50 rounded-xl border border-gray-100 inline-self-start self-start">
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed flex-grow">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden border border-gray-800">
          <div className="absolute inset-0 opacity-[0.05]" style={{ color: '#fff' }}>
            <svg width="100%" height="100%">
              <rect width="100%" height="100%" fill="url(#about-grid)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to accelerate your operations?</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
              Let's craft the modern systems and campaigns your business needs to grow. Our team is ready to analyze your processes and build for scale.
            </p>
            <Link to="/contact" className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-bold transition-all inline-flex items-center gap-2 text-base">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
