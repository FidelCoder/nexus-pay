export default function Blocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Many of our users are initially unfamiliar with Nexus-Pay transactions.</h2>
            <p className="text-xl text-gray-400">Discover the ease and efficiency of using Nexus-Pay for all your payment needs.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG code remains unchanged */}
              <h4 className="h4 mb-2">Seamless Transactions</h4>
              <p className="text-lg text-gray-400 text-center">Experience quick and hassle-free payments with the advanced technology of Nexus-Pay.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG code remains unchanged */}
              <h4 className="h4 mb-2">Robust Security</h4>
              <p className="text-lg text-gray-400 text-center">Your transactions are secured with our top-notch encryption standards, ensuring your data's safety.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG code remains unchanged */}
              <h4 className="h4 mb-2">Universal Accessibility</h4>
              <p className="text-lg text-gray-400 text-center">Access Nexus-Pay from any device, anytime, and make transactions on the go.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG code remains unchanged */}
              <h4 className="h4 mb-2">Instant Updates</h4>
              <p className="text-lg text-gray-400 text-center">Get real-time updates and notifications on all your Nexus-Pay activities.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG code remains unchanged */}
              <h4 className="h4 mb-2">User-Friendly Interface</h4>
              <p className="text-lg text-gray-400 text-center">Our intuitive design ensures that you can navigate and make transactions with ease.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG code remains unchanged */}
              <h4 className="h4 mb-2">Dedicated Support</h4>
              <p className="text-lg text-gray-400 text-center">Our team is always here to help. Get quick resolutions to all your queries.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
