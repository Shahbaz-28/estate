'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-b from-primary to-primary/90 py-16 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <h1 className="mb-4 font-sans text-5xl font-bold sm:text-6xl">
            Get in Touch
          </h1>
          <p className="max-w-2xl font-serif text-lg text-primary-foreground/90">
            We'd love to hear from you. Contact us to learn more about our 
            premium residential projects or to schedule a site visit.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="mb-8 font-sans text-3xl font-bold">
                Contact Information
              </h2>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="rounded-sm border border-border bg-muted p-6">
                  <p className="mb-2 font-sans text-sm font-bold text-secondary">
                    PHONE
                  </p>
                  <a
                    href="tel:+911234567890"
                    className="font-serif text-lg text-foreground hover:text-secondary"
                  >
                    +91 (123) 456-7890
                  </a>
                </div>

                {/* Email */}
                <div className="rounded-sm border border-border bg-muted p-6">
                  <p className="mb-2 font-sans text-sm font-bold text-secondary">
                    EMAIL
                  </p>
                  <a
                    href="mailto:info@adiyogiblossm.com"
                    className="font-serif text-lg text-foreground hover:text-secondary"
                  >
                    info@adiyogiblossm.com
                  </a>
                </div>

                {/* Address */}
                <div className="rounded-sm border border-border bg-muted p-6">
                  <p className="mb-2 font-sans text-sm font-bold text-secondary">
                    ADDRESS
                  </p>
                  <p className="font-serif text-foreground">
                    123 Premium Lane
                    <br />
                    New Delhi - 110001
                    <br />
                    India
                  </p>
                </div>

                {/* Hours */}
                <div className="rounded-sm border border-border bg-muted p-6">
                  <p className="mb-2 font-sans text-sm font-bold text-secondary">
                    OFFICE HOURS
                  </p>
                  <div className="space-y-1 font-serif text-foreground/80">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

          
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-sm border border-border bg-muted p-8 sm:p-12">
                <h2 className="mb-8 font-sans text-3xl font-bold">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <div className="min-h-96 flex items-center justify-center rounded-sm bg-accent p-8 text-center text-accent-foreground">
                    <div>
                      <p className="mb-2 font-sans text-2xl font-bold">
                        Thank You!
                      </p>
                      <p className="font-serif">
                        We've received your message and will get back to you soon.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="mb-2 block font-sans font-bold text-foreground">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 font-serif text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-2 block font-sans font-bold text-foreground">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 font-serif text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-2 block font-sans font-bold text-foreground">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 font-serif text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="+91 (123) 456-7890"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="mb-2 block font-sans font-bold text-foreground">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 font-serif text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="">Select a subject</option>
                        <option value="Project Inquiry">Project Inquiry</option>
                        <option value="Site Visit">Schedule Site Visit</option>
                        <option value="Investment">Investment Query</option>
                        <option value="General">General Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-2 block font-sans font-bold text-foreground">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 font-serif text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="flex-1 rounded-sm bg-secondary px-8 py-3 font-sans font-bold text-primary transition-transform hover:scale-105"
                      >
                        Send Message
                      </button>
                      <Link
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-sm border-2 border-secondary px-8 py-3 text-center font-sans font-bold text-secondary transition-colors hover:bg-secondary hover:text-primary"
                      >
                        WhatsApp
                      </Link>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
