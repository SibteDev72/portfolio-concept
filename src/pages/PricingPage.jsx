import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small practices getting started with digital healthcare management.',
    price: {
      monthly: 99,
      annual: 79
    },
    features: [
      'Up to 5 users',
      'Up to 100 active clients',
      'Electronic Health Records',
      'Basic document templates',
      'Client management',
      'Email support',
      'HIPAA compliant storage',
      'Mobile access'
    ],
    highlighted: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Professional',
    description: 'For growing practices that need advanced features and more capacity.',
    price: {
      monthly: 249,
      annual: 199
    },
    features: [
      'Up to 25 users',
      'Up to 500 active clients',
      'Everything in Starter, plus:',
      'Form Factory builder',
      'Document workflows',
      'Service authorizations',
      'Timesheet management',
      'Custom forms & templates',
      'Priority email support',
      'API access',
      'Advanced reporting'
    ],
    highlighted: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs and high-volume requirements.',
    price: {
      monthly: null,
      annual: null
    },
    features: [
      'Unlimited users',
      'Unlimited clients',
      'Everything in Professional, plus:',
      'Dedicated database instance',
      'Custom integrations',
      'Clearing house integration',
      'Advanced analytics',
      'Two-factor authentication',
      'SSO integration',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom training',
      'SLA guarantee'
    ],
    highlighted: false,
    cta: 'Contact Sales'
  }
]

const faqs = [
  {
    question: 'Is CAMDIAN HIPAA compliant?',
    answer: 'Yes, CAMDIAN is fully HIPAA compliant. We implement encryption at rest and in transit for all protected health information (PHI), maintain comprehensive audit logs, and follow industry best practices for healthcare data security.'
  },
  {
    question: 'Can I import data from my existing EHR?',
    answer: 'Yes, we offer data migration services for most major EHR systems. Our team will work with you to ensure a smooth transition with minimal disruption to your practice.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'All plans include email support. Professional plans include priority support, and Enterprise plans include dedicated account management and 24/7 phone support. We also provide comprehensive onboarding and training for all new clients.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 14-day free trial for our Starter and Professional plans. No credit card required. Enterprise clients can request a personalized demo and pilot program.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'You can upgrade your plan at any time, and the new features will be available immediately. Downgrades take effect at the end of your current billing cycle.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, ACH bank transfers, and can accommodate purchase orders for Enterprise clients. Annual plans can be paid via invoice.'
  }
]

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true)
  const [expandedFaq, setExpandedFaq] = useState(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 md:px-16 bg-primary">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center text-white/60 hover:text-white mb-8 transition-colors w-fit"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <motion.span
            className="block text-sm text-accent tracking-[0.2em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            PRICING
          </motion.span>

          <motion.h1
            className="font-primary text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] text-white uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Simple,<br/>
            <span className="text-accent-secondary italic">transparent</span><br/>
            <span className="text-accent-secondary italic">pricing</span>
          </motion.h1>

          <motion.p
            className="text-lg text-white/70 leading-relaxed max-w-[600px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Choose the plan that fits your practice. All plans include HIPAA-compliant security, regular updates, and access to our support team.
          </motion.p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="inline-flex items-center gap-4 bg-gray-100 p-1 rounded-full">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual ? 'bg-white text-primary shadow-sm' : 'text-gray-500'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual ? 'bg-white text-primary shadow-sm' : 'text-gray-500'
              }`}
            >
              Annual <span className="text-accent text-xs ml-1">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-primary text-white'
                    : 'bg-white border-2 border-gray-200'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-medium rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <h3 className={`font-primary text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-primary'
                }`}>
                  {plan.name}
                </h3>

                <p className={`text-sm mb-6 ${
                  plan.highlighted ? 'text-white/70' : 'text-gray-500'
                }`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  {plan.price.monthly ? (
                    <>
                      <span className={`text-[clamp(2.5rem,5vw,3.5rem)] font-bold ${
                        plan.highlighted ? 'text-white' : 'text-primary'
                      }`}>
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className={`text-sm ${
                        plan.highlighted ? 'text-white/70' : 'text-gray-500'
                      }`}>
                        /user/month
                      </span>
                      {isAnnual && (
                        <p className={`text-xs mt-1 ${
                          plan.highlighted ? 'text-white/50' : 'text-gray-400'
                        }`}>
                          Billed annually
                        </p>
                      )}
                    </>
                  ) : (
                    <span className={`text-[clamp(2rem,4vw,2.5rem)] font-bold ${
                      plan.highlighted ? 'text-white' : 'text-primary'
                    }`}>
                      Custom
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-start gap-3 text-sm ${
                        plan.highlighted ? 'text-white/90' : 'text-gray-600'
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${
                          plan.highlighted ? 'text-accent' : 'text-accent'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 font-medium text-sm uppercase tracking-wide rounded-lg transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-primary hover:bg-gray-100'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 px-8 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-accent tracking-[0.2em] uppercase mb-4 block">
              COMPARE PLANS
            </span>
            <h2 className="font-primary text-[clamp(2rem,4vw,3rem)] font-bold text-primary">
              All Plans Include
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'HIPAA Compliance',
                description: 'All data is encrypted at rest and in transit. Comprehensive audit logging and access controls.'
              },
              {
                title: 'Regular Updates',
                description: 'Continuous improvements and new features rolled out automatically at no extra cost.'
              },
              {
                title: 'Data Backups',
                description: 'Automated daily backups with point-in-time recovery. Your data is always safe.'
              },
              {
                title: 'Mobile Access',
                description: 'Access CAMDIAN from any device with our responsive web application.'
              },
              {
                title: 'Secure Authentication',
                description: 'Strong password policies, session management, and optional two-factor authentication.'
              },
              {
                title: 'Onboarding Support',
                description: 'Guided setup, data migration assistance, and training resources for your team.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-primary text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-accent tracking-[0.2em] uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="font-primary text-[clamp(2rem,4vw,3rem)] font-bold text-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-primary pr-8">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 md:px-16 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-primary text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white text-primary font-secondary text-sm tracking-wide uppercase hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              to="/#contact"
              className="px-8 py-4 border border-white/30 text-white font-secondary text-sm tracking-wide uppercase hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
