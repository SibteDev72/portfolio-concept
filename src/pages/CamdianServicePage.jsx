import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'clients',
    title: 'Client Management',
    description: 'Complete client profiles with contact info, guardians, insurance details, diagnosis codes, clinical team assignments, and referral tracking - all in one secure place.',
    features: [
      'Comprehensive client profiles',
      'Guardian & emergency contacts',
      'Insurance & payer management',
      'Diagnosis code tracking (ICD-10)',
      'Clinical team assignments',
      'Referral source tracking'
    ]
  },
  {
    id: 'documents',
    title: 'Document Workflow',
    description: 'Powerful document management with digital signatures, submission workflows, approval routing, and complete audit trails for HIPAA compliance.',
    features: [
      'Digital signature capture',
      'Document templates',
      'Submission workflows',
      'Approval routing',
      'Version control',
      'Complete audit trails'
    ]
  },
  {
    id: 'authorization',
    title: 'Service Authorization',
    description: 'Manage service authorizations with configurable rates, unit durations, billing rules, and automatic validation to prevent unauthorized services.',
    features: [
      'Authorization tracking',
      'Configurable service rates',
      'Unit duration management',
      'Billing rule automation',
      'Authorization alerts',
      'Utilization reporting'
    ]
  },
  {
    id: 'timesheets',
    title: 'Timesheet Management',
    description: 'Track administrative and session timesheets with time categories, role assignments, and seamless integration with billing for accurate payroll.',
    features: [
      'Session timesheet tracking',
      'Administrative time logs',
      'Time category configuration',
      'Role-based assignments',
      'Payroll integration',
      'Overtime calculations'
    ]
  },
  {
    id: 'compliance',
    title: 'HIPAA Compliance',
    description: 'Enterprise-grade security with encrypted PHI data, comprehensive audit logging, 2FA authentication, and automatic encryption key rotation.',
    features: [
      'PHI data encryption',
      'Comprehensive audit logs',
      'Two-factor authentication',
      'Role-based access control',
      'Automatic key rotation',
      'Security incident tracking'
    ]
  }
]

// Feature videos for each service
const featureVideos = [
  '/assets/videos/feature1.mp4', // Client Management
  '/assets/videos/feature2.mp4', // Document Workflow
  '/assets/videos/feature3.mp4', // Service Authorization
  '/assets/videos/feature4.mp4', // Timesheet Management
  '/assets/videos/feature5.mp4'  // HIPAA Compliance
]

const processSteps = [
  {
    title: 'ASSESSMENT',
    description: 'We analyze your current clinical workflows, compliance requirements, and data migration needs.'
  },
  {
    title: 'CONFIGURATION',
    description: 'Customize service types, authorization rules, document templates, and role permissions for your practice.'
  },
  {
    title: 'DATA MIGRATION',
    description: 'Secure transfer of existing client records, documents, and historical data with full validation.'
  },
  {
    title: 'TRAINING & LAUNCH',
    description: 'Comprehensive staff training, go-live support, and ongoing assistance to ensure successful adoption.'
  }
]

const CamdianServicePage = () => {
  const [activeService, setActiveService] = useState(0)
  const [expandedStep, setExpandedStep] = useState(null)
  const contentRef = useRef(null)

  const handleFeatureChange = (index) => {
    setActiveService(index)
    // Scroll to content area
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

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
            CAMDIAN EHR
          </motion.span>

          <motion.h1
            className="font-primary text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] text-white uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Healthcare<br/>
            <span className="text-accent-secondary italic">practice</span><br/>
            <span className="text-accent-secondary italic">management</span>
          </motion.h1>

          <motion.p
            className="text-lg text-white/70 leading-relaxed max-w-[600px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Complete EHR solution for healthcare practices. Manage clients, documents, authorizations, timesheets, and compliance - all in one HIPAA-compliant platform.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3">
              <div className="sticky top-32">
                <span className="text-sm text-gray-400 tracking-[0.2em] uppercase mb-6 block">
                  FEATURES
                </span>
                <nav className="space-y-1">
                  {services.map((service, index) => (
                    <button
                      key={service.id}
                      onClick={() => handleFeatureChange(index)}
                      className={`w-full text-left py-3 text-sm font-secondary transition-all duration-300 border-b border-gray-100 ${
                        activeService === index
                          ? 'text-primary font-medium'
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      {service.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div ref={contentRef} className="lg:col-span-9 scroll-mt-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-primary text-[clamp(2rem,4vw,3.5rem)] font-bold text-primary mb-8">
                    {services[activeService].title}
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-[700px]">
                    {services[activeService].description}
                  </p>

                  {/* Feature Video */}
                  <div className="mb-16">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                      <video
                        key={activeService}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto"
                      >
                        <source src={featureVideos[activeService]} type="video/mp4" />
                      </video>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-16">
                    <h3 className="font-primary text-xl font-semibold text-primary mb-6">
                      Key Features
                    </h3>
                    {services[activeService].features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Process Steps Accordion */}
              <div className="border-t border-gray-200 pt-16">
                <h3 className="font-primary text-2xl font-semibold text-primary mb-8">
                  Our Process
                </h3>
                <div className="space-y-0">
                  {processSteps.map((step, index) => (
                    <div key={index} className="border-b border-gray-200">
                      <button
                        onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                        className="w-full py-6 flex items-center justify-between text-left"
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-gray-400">+</span>
                          <span className="font-secondary text-sm tracking-wide text-gray-800">
                            {step.title}
                          </span>
                        </span>
                      </button>
                      <AnimatePresence>
                        {expandedStep === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="pb-6 pl-10 text-gray-600">
                              {step.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 md:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-primary text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-6">
            Ready to streamline your practice?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how CAMDIAN simplifies client management, documentation, and billing compliance.
          </p>
          <button className="px-8 py-4 bg-primary text-white font-secondary text-sm tracking-wide uppercase hover:bg-primary/90 transition-colors">
            Request Demo
          </button>
        </div>
      </section>
    </div>
  )
}

export default CamdianServicePage
