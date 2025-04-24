import { Check } from "lucide-react"

export function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing Options</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the level of service that works best for your property and needs.
          </p>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Daily Turnovers</h3>
              <p className="mt-4 text-gray-600">
                For owners who want to handle their own listings and guest communication.
              </p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-gray-900">Cleaning Fee</p>
              <p className="text-gray-600 mt-1">Per booking</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Professional cleaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Linen management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Supply alerts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic maintenance</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="mt-8 block w-full bg-emerald-600 text-white text-center py-3 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Onsite Management</h3>
              <p className="mt-4 text-gray-600">For owners who want all onsite tasks handled professionally.</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-gray-900">Custom Rate</p>
              <p className="text-gray-600 mt-1">Monthly fee or % of bookings</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Daily Turnovers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Landscaping</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Snow removal</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Contractor management</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="mt-8 block w-full bg-emerald-600 text-white text-center py-3 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow relative">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
              Popular
            </div>
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Near-Zero Touch</h3>
              <p className="mt-4 text-gray-600">For owners who want to be fully remote from their property.</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-gray-900">10%</p>
              <p className="text-gray-600 mt-1">Of booking revenue + cleaning fee</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Onsite Management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Guest communication</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24/7 emergency calls</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Booking management</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="mt-8 block w-full bg-emerald-600 text-white text-center py-3 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Full Control</h3>
              <p className="mt-4 text-gray-600">For owners who want to completely step away from their property.</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-gray-900">20%</p>
              <p className="text-gray-600 mt-1">Of booking revenue + cleaning fee</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Near-Zero Touch</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dynamic pricing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Marketing optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete property management</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="mt-8 block w-full bg-emerald-600 text-white text-center py-3 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
