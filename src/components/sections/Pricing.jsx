import { motion } from 'framer-motion'

const pricingPlans = [
  {
    name: 'Starter',
    tagline: 'For small practices getting started.',
    features: [
      'Client Management',
      'Basic Scheduling',
      'Document Storage',
      'Email Support',
      'HIPAA Compliance',
      'Single Location'
    ],
    highlighted: false
  },
  {
    name: 'Professional',
    tagline: 'For growing healthcare organizations.',
    features: [
      'Client Management',
      'Advanced Scheduling',
      'Document Workflows',
      'Service Authorization',
      'Timesheet Management',
      'Priority Support',
      'Multi-Location',
      'Custom Reports'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    tagline: 'For large-scale healthcare systems.',
    features: [
      'Client Management',
      'Advanced Scheduling',
      'Document Workflows',
      'Service Authorization',
      'Timesheet Management',
      'Dedicated Support',
      'Unlimited Locations'
    ],
    highlighted: false
  }
]

const Pricing = () => {
  return (
    <section className="px-20 bg-white py-24 md:py-32" id="pricing">
      <div className=" ">
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm text-gray-400 tracking-[0.2em] uppercase block mb-4">
            Pricing
          </span>
          <h2 className="font-primary text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] text-primary">
            Let's scale<br />
            your practice
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative border rounded-lg p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-primary border-gray-200 hover:border-gray-400'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-4 ${
                plan.highlighted ? 'text-white' : 'text-primary'
              }`}>
                {plan.name}
              </h3>

              {/* Tagline */}
              <p className={`text-base mb-8 ${
                plan.highlighted ? 'text-white/70' : 'text-gray-500'
              }`}>
                {plan.tagline}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.highlighted ? 'text-accent' : 'text-primary'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Email Input */}
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email*"
                  className={`w-full px-0 py-3 bg-transparent border-b text-sm focus:outline-none transition-colors ${
                    plan.highlighted
                      ? 'border-white/30 text-white placeholder:text-white/50 focus:border-white'
                      : 'border-gray-200 text-primary placeholder:text-gray-400 focus:border-primary'
                  }`}
                />
                <motion.button
                  className={`px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-primary hover:bg-gray-100'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Know More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
