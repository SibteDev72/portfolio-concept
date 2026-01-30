import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'builder',
    title: 'Drag & Drop Builder',
    description: 'Build complex forms with our intuitive visual editor. Drag components, customize properties, and preview in real-time - no coding required.',
    features: [
      'Visual form designer',
      'Real-time preview',
      'Component library',
      'Nested layouts (columns, panels, tabs)',
      'Table & DataGrid support',
      'Fieldset grouping'
    ]
  },
  {
    id: 'tenants',
    title: 'Multi-Tenant Workspaces',
    description: 'Organize forms by tenant workspaces. Each tenant has isolated forms, submissions, and user access for complete data separation.',
    features: [
      'Unlimited workspaces',
      'Tenant-level isolation',
      'Custom branding per tenant',
      'Workspace analytics',
      'Soft delete & restore',
      'Activity tracking'
    ]
  },
  {
    id: 'templates',
    title: 'Form Templates',
    description: 'Start faster with pre-built templates. Browse categorized templates, preview structure, and create forms instantly from any template.',
    features: [
      'Pre-built template library',
      'Category organization',
      'One-click form creation',
      'Template preview',
      'Custom template creation',
      'Cross-tenant sharing'
    ]
  },
  {
    id: 'submissions',
    title: 'Submission Management',
    description: 'Track every form submission with detailed analytics. View responses, export data, and manage submissions from a centralized dashboard.',
    features: [
      'Submission tracking',
      'Response analytics',
      'PDF export',
      'Web preview',
      'Data filtering',
      'Bulk operations'
    ]
  },
  {
    id: 'access',
    title: 'Role-Based Access Control',
    description: 'Fine-grained permissions for users and teams. Create custom roles, assign permissions, and manage access at every level.',
    features: [
      'Custom role creation',
      'Permission matrix',
      'User management',
      'Team assignments',
      'Activity logging',
      'Super admin controls'
    ]
  }
]

// Feature images for each service - Black American business professionals (Christina Morillo collection)
const featureImages = [
  // Drag & Drop Builder - Woman using MacBook, woman with laptop
  {
    primary: 'https://images.pexels.com/photos/1181571/pexels-photo-1181571.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondary: 'https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  // Multi-Tenant Workspaces - Two women in meeting, woman in formal coat
  {
    primary: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondary: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  // Form Templates - Woman smiling with book, woman in black coat
  {
    primary: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondary: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  // Submission Management - Woman with laptop, woman using laptop
  {
    primary: 'https://images.pexels.com/photos/1181493/pexels-photo-1181493.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondary: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  // Role-Based Access Control - Woman at laptop, woman with phone
  {
    primary: 'https://images.pexels.com/photos/1181649/pexels-photo-1181649.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondary: 'https://images.pexels.com/photos/1181501/pexels-photo-1181501.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]

const processSteps = [
  {
    title: 'WORKSPACE SETUP',
    description: 'Create your tenant workspace with custom settings, branding, and initial user access configuration.'
  },
  {
    title: 'FORM DESIGN',
    description: 'Build forms using our drag-and-drop builder with 20+ field types, layouts, and validation options.'
  },
  {
    title: 'TEAM CONFIGURATION',
    description: 'Set up roles, permissions, and invite team members with appropriate access levels.'
  },
  {
    title: 'PUBLISH & COLLECT',
    description: 'Deploy forms via embed codes, direct links, or API integration. Start collecting submissions immediately.'
  }
]

const FormFactoryServicePage = () => {
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
            FORM FACTORY
          </motion.span>

          <motion.h1
            className="font-primary text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] text-white uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Enterprise<br/>
            <span className="text-accent-secondary italic">form builder</span><br/>
            <span className="text-accent-secondary italic">platform</span>
          </motion.h1>

          <motion.p
            className="text-lg text-white/70 leading-relaxed max-w-[600px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Multi-tenant form builder with drag-and-drop design, templates, submission tracking, and role-based access control. Build any form, for any team.
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

                  {/* Feature Images Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-16">
                    <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg overflow-hidden">
                      <img
                        src={featureImages[activeService]?.primary}
                        alt={`${services[activeService].title} preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={featureImages[activeService]?.secondary}
                        alt={`${services[activeService].title} dashboard`}
                        className="w-full h-full object-cover"
                      />
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

                  {/* Supported Field Types - Only show for Builder */}
                  {activeService === 0 && (
                    <div className="bg-gray-50 rounded-lg p-8 mb-16">
                      <h3 className="font-primary text-xl font-semibold text-primary mb-6">
                        Supported Field Types
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          'Text Input',
                          'Text Area',
                          'Number',
                          'Email',
                          'Phone',
                          'Date Picker',
                          'Select Dropdown',
                          'Radio Buttons',
                          'Checkboxes',
                          'File Upload',
                          'Signature Pad',
                          'Currency',
                          'Columns Layout',
                          'Panel Container',
                          'Tabs',
                          'Table',
                          'DataGrid',
                          'Fieldset'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                            <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Process Steps Accordion */}
              <div className="border-t border-gray-200 pt-16">
                <h3 className="font-primary text-2xl font-semibold text-primary mb-8">
                  Getting Started
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
            Ready to build better forms?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how Form Factory simplifies form creation, team collaboration, and data collection.
          </p>
          <button className="px-8 py-4 bg-primary text-white font-secondary text-sm tracking-wide uppercase hover:bg-primary/90 transition-colors">
            Request Demo
          </button>
        </div>
      </section>
    </div>
  )
}

export default FormFactoryServicePage
