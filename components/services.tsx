import { CheckCircle2 } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We can help as little or as much as you'd like with your short-term rental property.
          </p>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Daily Turnovers</h3>
            <p className="text-gray-700 mb-6">
              We handle your linens, daily cleaning, and handyman tasks, eliminating the need for you to be in the area
              at all.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Professional cleaning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Linen management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Supply restocking</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Full Onsite Management</h3>
            <p className="text-gray-700 mb-6">
              We handle ALL onsite tasks, making sure all the longer term things are taken care of.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Landscaping</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Snow removal</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Pest management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Repairs & maintenance</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Near-Zero Touch</h3>
            <p className="text-gray-700 mb-6">
              We handle all guest communication, including 24/7 emergency calls and onsite emergencies.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Guest communication</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">24/7 emergency calls</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Booking inquiries</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Refunds & booking activity</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Full Control</h3>
            <p className="text-gray-700 mb-6">
              We take full control of pricing, marketing, and running of your house, in all aspects.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Dynamic pricing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Marketing optimization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Complete property management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Hands-off ownership</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why We're Different</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-emerald-100 rounded-full p-2 mr-4 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">You Own Everything</h4>
                  <p className="text-gray-700">
                    You retain ownership of your listings, calendar automation, guest messages, and future bookings.
                    It's your house and your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 rounded-full p-2 mr-4 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">We're Superhosts</h4>
                  <p className="text-gray-700">
                    We can help you achieve Superhost status, which makes a big difference to guest confidence and
                    impacts your bookings.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-emerald-100 rounded-full p-2 mr-4 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">We're Local</h4>
                  <p className="text-gray-700">
                    We have spent our lives in the Hudson Valley. You're dealing with people with roots in the area who
                    care about our community.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 rounded-full p-2 mr-4 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">We're Qualified</h4>
                  <p className="text-gray-700">
                    We know high-quality cleaning, hospitality/customer support, and are good with technology. You will
                    feel a warm partnership with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
