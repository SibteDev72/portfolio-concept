import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { services } from '../../data/services'

const Features = () => {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // this site is develoepd by Haris Akber
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const totalFeatures = services.length
      const index = Math.min(
        Math.floor(value * totalFeatures),
        totalFeatures - 1
      )
      setActiveIndex(index)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const activeService = services[activeIndex]

  return (
    <section
      className="relative bg-primary"
      id="features"
      ref={containerRef}
      style={{ height: `${services.length * 100}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Video Background with crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute inset-0 z-[1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <video
              key={activeService.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={activeService.video} type="video/mp4" />
            </video>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
        </AnimatePresence>

        {/* Tab Navigation - like mino.works */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[10] flex items-center gap-2">
          {services.map((feature, index) => (
            <button
              key={feature.number}
              onClick={() => {
                const scrollTo = (index / services.length) * containerRef.current.scrollHeight
                window.scrollTo({ top: scrollTo + containerRef.current.offsetTop, behavior: 'smooth' })
              }}
              className={`px-4 py-2 text-sm font-secondary tracking-wide transition-all duration-300 rounded-full
                ${activeIndex === index
                  ? 'bg-white text-primary'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
            >
              {feature.shortTitle}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-[5] h-full flex flex-col justify-between px-8 md:px-16 py-24">

          {/* Title with number */}
          <div className="mt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h2 className="font-primary text-white">
                  <span className="text-[clamp(3rem,8vw,6rem)] font-bold leading-none">
                    {activeService.title}
                  </span>
                  <sup className="text-[clamp(1rem,2vw,1.5rem)] text-white/60 ml-2 align-top">
                    ({activeService.number})
                  </sup>
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* View Service Button - positioned like mino */}
          <motion.button
            className="absolute top-1/2 right-16 -translate-y-1/2 text-white/80 text-sm uppercase tracking-widest hover:text-white transition-colors hidden md:block"
            whileHover={{ scale: 1.05 }}
          >
            (View Feature)
          </motion.button>

          {/* Bottom Content */}
          <div className="flex justify-between items-end">
            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                className="text-white/80 text-base md:text-lg max-w-[700px] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                {activeService.description}
              </motion.p>
            </AnimatePresence>

            {/* Year/Index indicator */}
            <span className="text-white/60 text-sm hidden md:block">
              2025
            </span>
          </div>
        </div>

        {/* Progress indicators - vertical dots on right */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-[10] hidden md:flex flex-col gap-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const scrollTo = (index / services.length) * containerRef.current.scrollHeight
                window.scrollTo({ top: scrollTo + containerRef.current.offsetTop, behavior: 'smooth' })
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300
                ${activeIndex === index
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/60'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features
