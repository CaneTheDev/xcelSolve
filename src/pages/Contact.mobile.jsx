import React, { useState } from 'react'
import { Mail, MessageCircle, Phone, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'

function ContactMobile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  return (
    <div className="bg-white py-8 min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mobile-contact-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon points="40,5 60,30 40,55 20,30" fill="#0C447C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mobile-contact-pattern)" />
        </svg>
      </div>

      <div className="px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
            Get a free quote
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Message us on WhatsApp, send an email, or fill out the quick form below.
          </p>
        </div>

        {/* Quick Contact Buttons - Stacked */}
        <div className="space-y-3 mb-8">
          {/* WhatsApp Action */}
          <a
            href="https://wa.me/message/CCYY5ZK3RKITJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 rounded-xl bg-[#E7F6F1] border border-[#0F6E56]/20 active:border-[#0F6E56] active:shadow-md transition-all"
            style={{ touchAction: 'manipulation' }}
          >
            <div className="w-11 h-11 rounded-xl bg-[#0F6E56] text-white flex items-center justify-center shrink-0 shadow-sm">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0F6E56]">Fastest Response</div>
              <h3 className="font-bold text-slate-900 text-base">WhatsApp</h3>
              <p className="text-xs text-slate-600 mt-0.5">Instant chat with our team</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[#0F6E56] shrink-0" />
          </a>

          {/* Email Action */}
          <a
            href="mailto:info@xcelsolve.com"
            className="flex items-center p-4 rounded-xl bg-slate-50 border border-slate-200 active:border-[#0C447C] active:shadow-md transition-all"
            style={{ touchAction: 'manipulation' }}
          >
            <div className="w-11 h-11 rounded-xl bg-[#0C447C] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Mail className="w-5 h-5" />
            </div>
            <div className="ml-4 flex-1 min-w-0">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0C447C]">Email Us</div>
              <h3 className="font-bold text-slate-900 text-base truncate">info@xcelsolve.com</h3>
              <p className="text-xs text-slate-600 mt-0.5">Replies within 24 hours</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[#0C447C] shrink-0" />
          </a>

          {/* Phone Action */}
          <a
            href="tel:+447520682782"
            className="flex items-center p-4 rounded-xl bg-slate-50 border border-slate-200 active:border-slate-800 active:shadow-md transition-all"
            style={{ touchAction: 'manipulation' }}
          >
            <div className="w-11 h-11 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Phone className="w-5 h-5" />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone</div>
              <h3 className="font-bold text-slate-900 text-base">+44 7520 682782</h3>
              <p className="text-xs text-slate-600 mt-0.5">UK direct line</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-500 shrink-0" />
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 border-t border-slate-200"></div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Or send a message</span>
          <div className="flex-1 border-t border-slate-200"></div>
        </div>

        {/* Minimal Form */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm mb-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-[#E7F6F1] rounded-full flex items-center justify-center text-[#0F6E56] mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Thank you for getting in touch. We will review your message and reply as quickly as possible.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="w-full px-6 py-3 bg-[#0C447C] hover:bg-[#08335D] active:bg-[#062949] text-white rounded-xl text-sm font-semibold transition-all active:scale-[0.97]"
                style={{ touchAction: 'manipulation' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Send a message
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Tell us about your business or what you need.
                </p>
              </div>

              {errors.submit && (
                <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium">
                  {errors.submit}
                </div>
              )}

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
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white text-slate-900 text-base transition-all ${
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
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white text-slate-900 text-base transition-all ${
                    errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:border-[#0C447C] focus:ring-2 focus:ring-[#0C447C]/10'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
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
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white text-slate-900 text-base transition-all resize-none ${
                    errors.message ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:border-[#0C447C] focus:ring-2 focus:ring-[#0C447C]/10'
                  }`}
                ></textarea>
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-start gap-2 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#0F6E56] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  No spam. We will only reply regarding your request.
                </p>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-[#0C447C] hover:bg-[#08335D] active:bg-[#062949] disabled:bg-slate-400 text-white rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2 text-base shadow-md active:scale-[0.97]"
                style={{ touchAction: 'manipulation' }}
              >
                {isSubmitting ? "Sending..." : "Get a free quote"}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactMobile
