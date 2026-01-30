import { motion } from 'framer-motion'
import { modules } from '../../data/modules'
import { PatientIcon, CalendarIcon, BillingIcon } from '../ui/Icons'

const iconMap = {
  1: PatientIcon,
  2: CalendarIcon,
  3: BillingIcon,
}

const gradientMap = {
  default: 'bg-gradient-to-br from-[#1a1a2e] to-[#16213e]',
  accent: 'bg-gradient-to-br from-[#0f3d3e] to-[#1a1a2e]',
  secondary: 'bg-gradient-to-br from-[#2d1b4e] to-[#1a1a2e]',
}

const Modules = () => {
  return (
    <section className="py-32 px-4 md:px-16 max-w-[1400px] mx-auto" id="modules">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="inline-block text-sm text-accent tracking-[0.2em] uppercase mb-4">
          Platform Modules
        </span>
        <h2 className="font-primary text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1.1]">
          Everything you need<br/>
          <span className="text-accent italic">in one place</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {modules.map((module, index) => {
          const Icon = iconMap[module.id]
          return (
            <motion.article
              key={module.id}
              className="cursor-pointer overflow-hidden group"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <div className={`w-full h-full ${gradientMap[module.gradient]} flex items-center justify-center transition-transform duration-600 group-hover:scale-105`}>
                  <span className="w-20 h-20 text-white/20">
                    <Icon />
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>
              <div className="py-6">
                <span className="text-xs text-accent tracking-wider uppercase mb-2 block">
                  {module.category}
                </span>
                <h3 className="font-primary text-2xl font-medium mb-3">
                  {module.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {module.description}
                </p>
                <div className="flex gap-3 flex-wrap">
                  {module.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 bg-white/10 rounded-full text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Modules
