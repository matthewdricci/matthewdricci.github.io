import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Along The Hudson Logo"
                width={50}
                height={50}
                className="h-10 w-auto"
              />
              <div className="ml-3">
                <div className="text-xl font-bold">Along The Hudson</div>
                <div className="text-sm text-gray-400">Short-Term-Rental Management</div>
              </div>
            </Link>

            <p className="text-gray-400 mb-4">
              Professional short-term rental management services in the Hudson Valley, New York.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Hudson Valley, New York</p>
            <Link href="#contact" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              Send us a message
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Along The Hudson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
