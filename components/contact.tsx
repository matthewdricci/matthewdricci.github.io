"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    property: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // In a real implementation, you would send this data to a server
      // For GitHub Pages, you could use a form service like Formspree or Netlify Forms

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Success
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        property: "",
      })
    } catch (error) {
      setSubmitError("There was an error submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to maximize your rental income? Get in touch with us today.
          </p>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="property" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Level Interest
                  </label>
                  <select
                    id="property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select a service level</option>
                    <option value="daily">Daily Turnovers</option>
                    <option value="onsite">Onsite Management</option>
                    <option value="zero-touch">Near-Zero Touch</option>
                    <option value="full-control">Full Control</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  ></textarea>
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4">{submitError}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Contact</h4>
                  <p className="text-gray-700">Please use our contact form to get in touch with us.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-700">Hudson Valley, New York</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>

              <div className="space-y-4">
                <p className="text-gray-700">
                  We believe that clean sheets and towels will make or break a guest's impression of a stay. We
                  aggressively remove linens from rotation if they're discolored or worn, because we don't want a $20
                  towel to ruin a $400 booking.
                </p>

                <p className="text-gray-700">
                  We are very frugal owners! We take our money very seriously and spend conservatively. But we feel very
                  strongly that sometimes it costs more money to spend less.
                </p>

                <p className="text-gray-700">
                  You will feel a warm partnership with us, and your guests will enjoy that warmth too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
