import { motion } from 'framer-motion'
import { ArrowIcon } from '../ui/Icons'

const Contact = () => {
  return (
    <section className="py-32 px-4 md:px-16 bg-secondary text-center" id="contact">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm text-accent tracking-[0.2em] uppercase mb-4">
            Get Started
          </span>
          <h2 className="font-primary text-[clamp(2rem,5vw,4rem)] font-normal mb-8">
            Ready to transform your <span className="text-accent italic">practice?</span>
          </h2>
        </motion.div>

        <motion.a
          href="mailto:sales@camdian.com"
          className="font-primary text-[clamp(1.5rem,4vw,3rem)] text-white inline-block mb-12 relative hover:text-accent transition-colors group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          sales@camdian.com
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-400"></span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:sales@camdian.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-accent/30 transition-all group"
          >
            <span>Request a Demo</span>
            <span className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <ArrowIcon />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
