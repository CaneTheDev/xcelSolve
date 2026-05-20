import React, { useState } from 'react'
import { 
  Mail, Phone, MessageSquare, Clock, ArrowRight, CheckCircle2, ShieldCheck, Instagram 
} from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Social Media Marketing',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    let tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = "Name is required"
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email format is invalid"
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required"
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
      
      fetch("https://formsubmit.co/ajax/ismaeelardo@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || "Not provided",
          Service: formData.service,
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
            phone: '',
            service: 'Social Media Marketing',
            message: ''
          })
        } else {
          setErrors({ submit: "Something went wrong. Please try again or email us directly." })
        }
      })
      .catch(err => {
        setIsSubmitting(false)
        setErrors({ submit: "Network error. Please try again or email us directly." })
      })
    }
  }

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.15]" style={{ color: '#000' }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="contact-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
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
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            Let's Build Something
            <br className="hidden sm:inline" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 px-3">Great Together</span>
              <span className="absolute inset-0 bg-emerald-300 -skew-y-1 transform"></span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Ready to grow your business? Reach out via the form, WhatsApp, or email, and we'll reply to schedule a strategy call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Direct Contact Options */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/2348121372207" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-white border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">Chat on WhatsApp</h3>
                  <p className="text-sm text-gray-500 mt-0.5">Instant message with our systems specialist.</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 ml-auto transition-all transform group-hover:translate-x-1" />
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email Address</h3>
                  <a href="mailto:ismaeelardo@gmail.com" className="text-sm text-blue-600 hover:underline mt-0.5 block font-semibold">
                    ismaeelardo@gmail.com
                  </a>
                  <p className="text-xs text-gray-400 mt-2">Expect a reply in under 24 hours.</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone Hotline</h3>
                  <p className="text-sm text-gray-700 mt-0.5 font-semibold">+234 812 137 2207</p>
                  <p className="text-xs text-gray-400 mt-2">Mon - Fri, 9:00 AM - 5:00 PM EST</p>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full filter blur-xl"></div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Fast Response Guarantee</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                    We hate waiting as much as you do. All inquiries received during business hours are reviewed and answered within 2 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 py-4">
              <a 
                href="https://www.instagram.com/xcelsolve?igsh=MTRpY2c4aG9xZmY5cQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 shadow-sm transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  Thank you for reaching out. We have received your inquiry and our strategy specialist will get back to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
                  <p className="text-sm text-gray-500 mt-1">Fill out the form below to get starting with your free consult call.</p>
                </div>

                {errors.submit && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-semibold">
                    {errors.submit}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white transition-all text-gray-900 ${errors.name ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-200 focus:ring-1 focus:ring-gray-900'}`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white transition-all text-gray-900 ${errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-200 focus:ring-1 focus:ring-gray-900'}`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 812 137 2207"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-gray-900 transition-all text-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <div className="relative">
                      <select 
                        id="service" 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-gray-900 transition-all text-gray-900 appearance-none cursor-pointer"
                      >
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Website Design">Website Design</option>
                        <option value="AI & Software Automation">AI & Software Automation</option>
                        <option value="Multiple Services">Multiple Services</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    How Can We Help You? <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, bottlenecks, or marketing objectives..."
                    className={`w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white transition-all text-gray-900 ${errors.message ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-200 focus:ring-1 focus:ring-gray-900'}`}
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <div className="flex items-center gap-3 py-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                  <p className="text-xs text-gray-400">
                    We value your privacy. Your information is secure and will never be shared with third parties.
                  </p>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2 text-base"
                >
                  {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
