import React from 'react'
import { Link } from 'react-router-dom'
import { 
  TrendingUp, Monitor, Cpu, Zap, Sparkles, Layers, ShieldCheck, 
  ArrowRight, Quote, CheckCircle2 
} from 'lucide-react'

function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.15]" style={{ color: '#000' }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="home-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#home-grid)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pb-24 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full uppercase tracking-wider">
            Now Launching AI Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mt-6 mb-6 leading-tight">
            Helping Businesses Grow Through
            <br className="hidden sm:inline" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 px-3 text-gray-900">Marketing, Websites & AI</span>
              <span className="absolute inset-0 bg-emerald-300 -skew-y-1 transform"></span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We help businesses attract customers, build strong online presence, and automate repetitive work using smart systems and AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-bold text-base transition-all inline-flex items-center justify-center gap-2 shadow-md"
            >
              Book a Call
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-lg font-bold text-base border-2 border-gray-900 transition-all shadow-sm"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-12">
        <div className="border-t border-b border-gray-200 py-10 bg-white/40 backdrop-blur-sm rounded-2xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="px-4">
              <div className="text-3xl font-extrabold text-gray-900 mb-2">Built for Scale</div>
              <p className="text-sm sm:text-base text-gray-500 font-medium">Enterprise-grade infrastructure from day one</p>
            </div>
            <div className="px-4">
              <div className="text-3xl font-extrabold text-gray-900 mb-2">Modern Systems</div>
              <p className="text-sm sm:text-base text-gray-500 font-medium font-medium">Integrating cutting-edge OpenAI & Anthropic tech</p>
            </div>
            <div className="px-4">
              <div className="text-3xl font-extrabold text-gray-900 mb-2">Efficiency First</div>
              <p className="text-sm sm:text-base text-gray-500 font-medium">Replacing hours of manual spreadsheets with code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Service Cards */}
      <section className="relative z-10 bg-white border-t border-b border-gray-200 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Transformative Digital Services
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Choose the solution that aligns with your current company constraints and goals.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            {/* Social Media Marketing */}
            <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-8 hover:border-gray-900 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Social Media Marketing
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 flex-grow">
                We create targeted Facebook & Instagram ad campaigns, develop content strategies, and generate high-intent leads to grow your brand.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Facebook & Instagram Ads
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Lead Generation Campaigns
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Content Growth Strategy
                </li>
              </ul>
              <Link 
                to="/services#marketing" 
                className="w-full py-3 bg-white border border-gray-300 hover:border-gray-900 text-gray-900 rounded-lg text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Website Design */}
            <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-8 hover:border-gray-900 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Website Design & Dev
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 flex-grow">
                We build modern, responsive business websites and landing pages that are fast, visually appealing, and optimized for conversions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  Modern Business Websites
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  High-Converting Landing Pages
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  Mobile-First Snippy UI
                </li>
              </ul>
              <Link 
                to="/services#web-design" 
                className="w-full py-3 bg-white border border-gray-300 hover:border-gray-900 text-gray-900 rounded-lg text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* AI & Software Automation */}
            <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-8 hover:border-gray-900 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI & Software Automation
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 flex-grow">
                We build smart workflows and AI agents that reduce manual work and help businesses operate faster through intelligent automation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500" />
                  AI Chatbots & Support Agents
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500" />
                  Automated Scheduling & CRM
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500" />
                  Workflow & Invoicing Automations
                </li>
              </ul>
              <Link 
                to="/services#automation" 
                className="w-full py-3 bg-white border border-gray-300 hover:border-gray-900 text-gray-900 rounded-lg text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="relative z-10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              We aren't just another agency. We combine technical automation skills with advertising expertise.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                icon: <Zap className="w-6 h-6 text-emerald-600" />, 
                title: "Fast Delivery", 
                desc: "We get projects done quickly and transparently without sacrificing high standards." 
              },
              { 
                icon: <Sparkles className="w-6 h-6 text-blue-600" />, 
                title: "Modern Systems", 
                desc: "We use the latest technologies like Next.js, OpenAI, and cloud-native serverless workflows." 
              },
              { 
                icon: <Cpu className="w-6 h-6 text-purple-600" />, 
                title: "Automation-Focused", 
                desc: "We specialize in removing repetitive manual office work so you scale without staff overload." 
              },
              { 
                icon: <Layers className="w-6 h-6 text-rose-600" />, 
                title: "Built for Growth", 
                desc: "Our systems and sites are created strictly to drive client metrics and conversion rates." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4 border border-gray-100">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Results */}
      <section className="relative z-10 bg-white border-t border-b border-gray-200 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Client Outcomes
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              See how our digital solutions and smart integrations create measurable business improvement.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            {[
              {
                quote: "XcelSolve completely overhauled our lead generation. We've seen a massive surge in qualified bookings online.",
                client: "Sarah Jenkins, Director of Operations"
              },
              {
                quote: "The landing page is lightning fast and conversion went from 3% to nearly 8% in the first week. Incredible design work.",
                client: "David Vance, Founder"
              },
              {
                quote: "We replaced our manual spreadsheet copying with an automated system. We save over 10 hours of staff labor every week.",
                client: "Marcus Cole, COO"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 relative flex flex-col justify-between">
                <Quote className="w-8 h-8 text-gray-300 mb-4 shrink-0" />
                <p className="italic text-gray-700 text-base leading-relaxed mb-6">
                  "{item.quote}"
                </p>
                <div className="border-t border-gray-200/60 pt-4 text-sm font-semibold text-gray-500">
                  {item.client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 bg-gray-900 text-white border-b border-gray-800 py-20 sm:py-28 overflow-hidden">
        {/* Subtle inner grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ color: '#fff' }}>
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" fill="url(#home-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's work together to attract more customers, upgrade your online presence, and automate your manual workflows with smart systems.
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-bold text-base transition-all inline-flex items-center gap-2 shadow-lg"
          >
            Let's Work Together
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home