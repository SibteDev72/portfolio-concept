import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const stats = [
  { number: '500+', label: 'Healthcare Providers' },
  { number: '50K+', label: 'Patients Managed' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '100%', label: 'HIPAA Compliant' }
]

const values = [
  {
    title: 'Security First',
    description: 'Every piece of patient data is encrypted using industry-leading standards. We maintain HIPAA compliance across all our services.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Innovation',
    description: 'We continuously evolve our platform with cutting-edge technology to streamline healthcare workflows and improve patient outcomes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Reliability',
    description: 'Our multi-tenant architecture ensures your data is always available when you need it, with dedicated databases for complete isolation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
  {
    title: 'Support',
    description: 'Our dedicated team provides comprehensive training, onboarding, and ongoing support to ensure your success with CAMDIAN.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
]

const team = [
  {
    name: 'Healthcare Expertise',
    role: 'Industry Knowledge',
    description: 'Built by professionals who understand the unique challenges of healthcare documentation and compliance.'
  },
  {
    name: 'Technical Excellence',
    role: 'Engineering Team',
    description: 'A dedicated team of engineers committed to building secure, scalable, and reliable healthcare software.'
  },
  {
    name: 'Customer Success',
    role: 'Support Team',
    description: 'Specialists who ensure smooth implementation, training, and ongoing support for every client.'
  }
]

const AboutPage = () => {
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
            ABOUT US
          </motion.span>

          <motion.h1
            className="font-primary text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] text-white uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transforming<br/>
            <span className="text-accent-secondary italic">healthcare</span><br/>
            <span className="text-accent-secondary italic">management</span>
          </motion.h1>

          <motion.p
            className="text-lg text-white/70 leading-relaxed max-w-[600px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            CAMDIAN is a comprehensive healthcare management platform designed to streamline clinical documentation, patient management, and administrative workflows for modern healthcare providers.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm text-accent tracking-[0.2em] uppercase mb-4 block">
                OUR MISSION
              </span>
              <h2 className="font-primary text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-6">
                Empowering Healthcare Through Technology
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                CAMDIAN stands for <strong>Client Assessment, Management, Documentation, Insurance, Authorization & Notification</strong> - a complete solution for healthcare providers who need to manage every aspect of patient care and administrative workflows.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We built CAMDIAN because we understood the unique challenges healthcare providers face: complex documentation requirements, insurance authorizations, HIPAA compliance, and the need to coordinate care across clinical teams.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our platform brings together electronic health records, form management, document workflows, billing, and compliance tools into one unified system - designed specifically for behavioral health, therapy practices, and healthcare organizations of all sizes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/assets/images/about (1).jpg"
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg mt-8">
                <img
                  src="/assets/images/about (2).jpg"
                  alt="Medical team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-8 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-accent tracking-[0.2em] uppercase mb-4 block">
              OUR VALUES
            </span>
            <h2 className="font-primary text-[clamp(2rem,4vw,3rem)] font-bold text-primary">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-accent mb-4">
                  {value.icon}
                </div>
                <h3 className="font-primary text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-accent tracking-[0.2em] uppercase mb-4 block">
              THE PLATFORM
            </span>
            <h2 className="font-primary text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-6">
              Complete Healthcare Management
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CAMDIAN provides a comprehensive suite of tools designed specifically for healthcare providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Electronic Health Records',
                description: 'Complete client profiles with demographics, insurance, diagnosis codes, and clinical team assignments - all encrypted for HIPAA compliance.'
              },
              {
                title: 'Document Workflows',
                description: 'Visual workflow builder for document approvals, multi-step processes, and automatic status transitions with complete audit trails.'
              },
              {
                title: 'Form Factory',
                description: 'Drag-and-drop form builder with 20+ field types, e-signatures, conditional logic, and seamless integration with your EHR.'
              },
              {
                title: 'Service Authorization',
                description: 'Track authorizations, manage service rates, configure billing rules, and prevent unauthorized services automatically.'
              },
              {
                title: 'Timesheet Management',
                description: 'Session and administrative timesheets with unit-based billing, authorization tracking, and payroll integration.'
              },
              {
                title: 'HIPAA Compliance',
                description: 'Encrypted PHI fields, comprehensive audit logging, two-factor authentication, and role-based access control.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 p-6 rounded-lg hover:border-accent transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-primary text-lg font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-8 md:px-16 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-accent tracking-[0.2em] uppercase mb-4 block">
              OUR TEAM
            </span>
            <h2 className="font-primary text-[clamp(2rem,4vw,3rem)] font-bold text-white">
              Built By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-primary text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-accent text-sm mb-4">{member.role}</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 md:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-primary text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-6">
            Ready to transform your practice?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of healthcare providers who trust CAMDIAN to manage their clinical workflows.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 bg-primary text-white font-secondary text-sm tracking-wide uppercase hover:bg-primary/90 transition-colors"
          >
            Request Demo
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
