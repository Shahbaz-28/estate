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

                {/* Social Links */}
                <div className="border-t border-border pt-6">
                  <p className="mb-4 font-sans text-sm font-bold text-secondary">
                    FOLLOW US
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground transition-colors hover:text-secondary"
                      title="Instagram"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground transition-colors hover:text-secondary"
                      title="WhatsApp"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.14l-.46.264-3.822-.982.998 3.645-.235.467a9.9 9.9 0 001.514 5.98 9.93 9.93 0 007.956 4.03h.006c5.192 0 9.694-4.167 10.894-9.75a9.9 9.9 0 00-8.067-11.394z" />
                      </svg>
                    </a>
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

          {/* Map Section */}
          <div className="mt-20 border-t border-border pt-20">
            <h2 className="mb-8 font-sans text-3xl font-bold">Location Map</h2>
            <div className="relative h-96 overflow-hidden rounded-sm border-4 border-secondary shadow-xl">
              <div className="flex h-full items-center justify-center bg-foreground/5">
                <div className="text-center">
                  <p className="text-4xl mb-2">📍</p>
                  <p className="font-serif text-foreground/60">Interactive Map Coming Soon</p>
                  <p className="font-serif text-sm text-foreground/40">Latitude: 28.6139 | Longitude: 77.2090</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
