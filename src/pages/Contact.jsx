import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, MessageCircle, Phone, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import useIsMobile from '../hooks/useIsMobile'
import ContactMobile from './Contact.mobile'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isMobile = useIsMobile()

  const validate = () => {
    let tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = "Please enter your name"
    if (!formData.email.trim()) {
      tempErrors.email = "Please enter your email address"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address"
    }
    if (!formData.message.trim()) tempErrors.message = "Please enter a message"
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitting(true)
      
      fetch("https://formsubmit.co/ajax/info@xcelsolve.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: formData.message
        })
      })
      .then(response => response.json())
      .then(data => {
        setIsSubmitting(false)
        if (data.success === "true" || data.success === true) {
          setSubmitted(true)
          setFormData({
            name: '',
            email: '',
            message: ''
          })
        } else {
          setErrors({ submit: "Something went wrong. Please try again or reach out via WhatsApp or email directly." })
        }
      })
      .catch(() => {
        setIsSubmitting(false)
        setErrors({ submit: "Network error. Please reach out via WhatsApp or email directly." })
      })
    }
  }

  if (isMobile) {
    return <ContactMobile />
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Get a Free Quote | xcelsolve</title>
        <meta name="description" content="Get in touch for a free quote on web design, social media marketing, or AI automation. Message us on WhatsApp, email, or call +44 7520 682782." />
        <link rel="canonical" href="https://xcelsolve.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcelsolve.com/contact" />
        <meta property="og:title" content="Contact Us - Get a Free Quote | xcelsolve" />
        <meta property="og:description" content="Get in touch for a free quote on web design, social media marketing, or AI automation. Message us on WhatsApp, email, or call +44 7520 682782." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "xcelsolve",
              "email": "info@xcelsolve.com",
              "telephone": "+447520682782",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+447520682782",
                "contactType": "Customer Service",
                "areaServed": "GB",
                "availableLanguage": "en"
              }
            }
          })}
        </script>
      </Helmet>
      <div className="bg-white py-12 sm:py-20 min-h-[calc(100vh-144px)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <polygon points="60,10 90,50 60,90 30,50" fill="#0C447C" />
              <polygon points="10,60 25,80 10,100 -5,80" fill="#0C447C" />
              <polygon points="110,60 125,80 110,100 95,80" fill="#0C447C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-pattern)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Get a free quote
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-loose">
            Message us on WhatsApp, send an email,<br className="hidden sm:block" /> or fill out the quick form below.
          </p>
        </div>

        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {/* WhatsApp Action */}
          <a
            href="https://wa.me/message/CCYY5ZK3RKITJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-5 rounded-2xl bg-[#E7F6F1] border border-[#0F6E56]/20 hover:border-[#0F6E56] hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0F6E56] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F6E56]">Fastest Response</span>
              <h3 className="font-bold text-slate-900 text-base mt-0.5">WhatsApp</h3>
              <p className="text-xs text-slate-600 mt-1">Instant chat with our team</p>
            </div>
          </a>

          {/* Email Action */}
          <a
            href="mailto:info@xcelsolve.com"
            className="flex flex-col p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0C447C] hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0C447C] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0C447C]">Email Us</span>
              <h3 className="font-bold text-slate-900 text-base mt-0.5 break-all">info@xcelsolve.com</h3>
              <p className="text-xs text-slate-600 mt-1">Replies within 24 hours</p>
            </div>
          </a>

          {/* Phone Action */}
          <a
            href="tel:+447520682782"
            className="flex flex-col p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0C447C] hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone</span>
              <h3 className="font-bold text-slate-900 text-base mt-0.5">+44 7520 682782</h3>
              <p className="text-xs text-slate-600 mt-1">UK direct line</p>
            </div>
          </a>
        </div>

        {/* Minimal Form */}
        <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 bg-[#E7F6F1] rounded-full flex items-center justify-center text-[#0F6E56] mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent</h3>
              <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm sm:text-base">
                Thank you for getting in touch. We will review your message and reply as quickly as possible.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-[#0C447C] hover:bg-[#08335D] text-white rounded-xl text-sm font-semibold transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Send a message
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Tell us a bit about your business or what you need.
                </p>
              </div>

              {errors.submit && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium">
                  {errors.submit}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white text-slate-900 transition-all ${
                      errors.name ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:border-[#0C447C] focus:ring-2 focus:ring-[#0C447C]/10'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white text-slate-900 transition-all ${
                      errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:border-[#0C447C] focus:ring-2 focus:ring-[#0C447C]/10'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help your business?"
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white text-slate-900 transition-all ${
                    errors.message ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:border-[#0C447C] focus:ring-2 focus:ring-[#0C447C]/10'
                  }`}
                ></textarea>
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-center gap-2 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#0F6E56] shrink-0" />
                <p className="text-xs text-slate-500">
                  No spam. We will only reply regarding your request.
                </p>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-[#0C447C] hover:bg-[#08335D] disabled:bg-slate-400 text-white rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2 text-base shadow-sm active:scale-[0.98]"
              >
                {isSubmitting ? "Sending..." : "Get a free quote"}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
