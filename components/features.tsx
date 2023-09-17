export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Experience Seamless Transactions with Nexus Pay</h2>
            <p className="text-xl text-gray-400">Elevate your payment experience. Safe, fast, and reliable.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              {/* ...SVG content remains unchanged... */}
              <h4 className="h4 mb-2">Quick Setup</h4>
              <p className="text-lg text-gray-400 text-center">Start using Nexus Pay within minutes after a quick and easy setup process.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              {/* ...SVG content remains unchanged... */}
              <h4 className="h4 mb-2">Secure Payments</h4>
              <p className="text-lg text-gray-400 text-center">Your transactions are secured with advanced encryption technologies.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              {/* ...SVG content remains unchanged... */}
              <h4 className="h4 mb-2">Contactless Transactions</h4>
              <p className="text-lg text-gray-400 text-center">Experience the ease of contactless payments at participating outlets.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              {/* ...SVG content remains unchanged... */}
              <h4 className="h4 mb-2">Instant Notifications</h4>
              <p className="text-lg text-gray-400 text-center">Get notified instantly for every transaction made using Nexus Pay.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              {/* ...SVG content remains unchanged... */}
              <h4 className="h4 mb-2">Global Acceptance</h4>
              <p className="text-lg text-gray-400 text-center">Accepted at a wide range of merchants worldwide.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              {/* ...SVG content remains unchanged... */}
              <h4 className="h4 mb-2">Dedicated Support</h4>
              <p className="text-lg text-gray-400 text-center">Our dedicated support team is always ready to assist you.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
