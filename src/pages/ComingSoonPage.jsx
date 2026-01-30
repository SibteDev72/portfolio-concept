import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

const serviceInfo = {
  'ehr': {
    title: 'Electronic Health Records',
    description: 'Our comprehensive EHR system is currently in development. Stay tuned for a powerful solution designed specifically for behavioral health.'
  },
  'clearing-house': {
    title: 'Clearing House',
    description: 'Advanced claims processing and billing integration is coming soon. We\'re building a seamless solution for insurance management.'
  },
  'project-management': {
    title: 'Project Management',
    description: 'A dedicated project management module for healthcare teams is in the works. Coordinate care plans and track workflows efficiently.'
  },
  'crm': {
    title: 'Customer Relationship Management',
    description: 'Our integrated CRM for patient relationship management is coming soon. Build stronger connections through the entire patient journey.'
  }
}

const ComingSoonPage = () => {
  const { serviceId } = useParams()
  const service = serviceInfo[serviceId] || {
    title: 'New Feature',
    description: 'This exciting new feature is currently in development. Check back soon for updates.'
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="text-center px-8 max-w-2xl">
        <Link
          to="/"
          className="inline-flex items-center text-white/60 hover:text-white mb-12 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-sm text-accent tracking-[0.2em] uppercase mb-6">
            COMING SOON
          </span>

          <motion.h1
            className="font-primary text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] text-white uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {service.title}
          </motion.h1>

          <motion.p
            className="text-lg text-white/70 leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {service.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/"
              className="px-8 py-4 bg-white text-primary font-secondary text-sm tracking-wide uppercase hover:bg-white/90 transition-colors"
            >
              Explore Platform
            </Link>
            <button className="px-8 py-4 border border-white/30 text-white font-secondary text-sm tracking-wide uppercase hover:bg-white/10 transition-colors">
              Notify Me
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ComingSoonPage
