import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image src="/images/river-cover.png" alt="Hudson River in autumn" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Maximize Your Rental Income in the Hudson Valley
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8">
          Professional short-term rental management by local Superhosts
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#services"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-md text-lg transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="#contact"
            className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-8 rounded-md text-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
