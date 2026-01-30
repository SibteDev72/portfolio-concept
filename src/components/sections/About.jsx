import { motion } from 'framer-motion'
import { stats } from '../../data/stats'

const About = () => {
  return (
    <section className="py-32 px-4 md:px-16 max-w-[1400px] mx-auto" id="about">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm text-accent tracking-[0.2em] uppercase mb-4">
            About CAMDIAN
          </span>
          <h2 className="font-primary text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.2] mb-8">
            Built for <span className="text-accent italic">modern healthcare</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-[600px] mb-12">
            CAMDIAN is a comprehensive healthcare management platform designed to simplify
            practice operations and enhance patient care. With HIPAA-compliant security,
            intuitive workflows, and powerful integrations, CAMDIAN helps healthcare
            providers focus on what matters most - their patients.
          </p>

          <div className="flex gap-16 flex-wrap">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <span className="font-primary text-5xl font-medium text-accent">
                  {stat.number}
                </span>
                <span className="text-sm text-gray-500 tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
