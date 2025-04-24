import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/logo.png"
              alt="Along The Hudson Logo"
              width={300}
              height={300}
              className="mx-auto md:mx-0"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              We are two Airbnb Superhosts in the Hudson Valley of New York, Tonya Fitzgerald and Matt Ricci, who have
              been successful managing and cleaning our own Airbnbs. We started helping friends who struggled with
              theirs, and then expanded further to help people who were frustrated with their rental properties.
            </p>

            <p className="text-lg text-gray-700">
              This is kind of a passion project - we get a lot of joy out of this kind of work, and would love to do
              more of it.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tonya Fitzgerald</h3>
                <p className="text-gray-700">
                  Has been taking care of homes for 22 years, runs an Airbnb cleaning business currently cleaning 26
                  homes.
                </p>
                <a
                  href="https://www.airbnb.com/users/show/412684774"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  View Airbnb Profile →
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Matt Ricci</h3>
                <p className="text-gray-700">
                  Has spent his career in customer service and hospitality, and working with computers. He will take
                  away all your tech stress, and not make you feel dumb about your questions.
                </p>
                <a
                  href="https://www.airbnb.com/users/show/34061207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  View Airbnb Profile →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
