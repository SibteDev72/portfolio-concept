import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { services } from '../../data/services'

// Animated letter component that responds to scroll
const AnimatedLetter = ({ letter, index, scrollProgress, startOffset = 0 }) => {
  const letterIndex = index + startOffset
  const opacity = useTransform(
    scrollProgress,
    [letterIndex * 0.04, letterIndex * 0.04 + 0.15],
    [0, 1]
  )
  const y = useTransform(
    scrollProgress,
    [letterIndex * 0.04, letterIndex * 0.04 + 0.15],
    [20, 0]
  )

  return (
    <motion.span className="inline-block" style={{ opacity, y }}>
      {letter}
    </motion.span>
  )
}

const ScrollSections = () => {
  const containerRef = useRef(null)
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const navigate = useNavigate()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Track if curtains are open (after 40% scroll when features are visible)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setIsInView(value > 0.4 && value < 0.99)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  // Track mouse position for cursor follower
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    if (isInView) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isInView])

  // Phase 1: Black section visible (0% - 20% scroll)
  const blackOpacity = useTransform(scrollYProgress, [0, 0.08, 0.12, 0.18], [1, 1, 0.5, 0])
  const blackScale = useTransform(scrollYProgress, [0.08, 0.18], [1, 0.95])

  // Healthcare management color: grey to red (scroll-based, reversible)
  const healthcareColor = useTransform(scrollYProgress, [0.01, 0.02], ['#6B7280', '#ED1C24'])

  // Phase 2: White section scale
  const whiteScale = useTransform(scrollYProgress, [0.08, 0.18], [1.05, 1])

  // Curtain opens (25% - 40% scroll)
  const curtainProgress = useTransform(scrollYProgress, [0.25, 0.4], [0, 100])

  // Content fades out as curtains start opening
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0])

  // Text animation triggers - based on scroll progress
  const textAnimationProgress = useTransform(scrollYProgress, [0.08, 0.18], [0, 1])


  // Features section visible immediately when curtains start opening (25% onwards)
  const featuresOpacity = useTransform(scrollYProgress, [0.24, 0.25], [0, 1])

  // Tab nav appears after curtains open
  const tabNavOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1])

  // Calculate active feature based on scroll (40% - 100% is feature area)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value > 0.4) {
        const featureProgress = (value - 0.4) / 0.6 // 0.4 to 1.0 mapped to 0-1
        const totalFeatures = services.length
        const index = Math.min(
          Math.floor(featureProgress * totalFeatures),
          totalFeatures - 1
        )
        setActiveFeatureIndex(index)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const activeService = services[activeFeatureIndex]

  const scrollToFeature = (index) => {
    if (containerRef.current) {
      const featureStart = 0.4
      const featureRange = 0.6
      const targetProgress = featureStart + (index / services.length) * featureRange
      const scrollTo = targetProgress * containerRef.current.scrollHeight
      window.scrollTo({ top: scrollTo + containerRef.current.offsetTop, behavior: 'smooth' })
    }
  }

  const handleServiceClick = () => {
    if (activeService.route) {
      navigate(activeService.route)
    }
  }

  return (
    <div
      className="relative h-[800vh]"
      ref={containerRef}
      id="services"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Cursor Follower with View Services text */}
      <AnimatePresence>
        {isInView && isHovering && (
          <motion.div
            className="fixed z-[9999] pointer-events-none hidden md:flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePosition.x + 20,
              y: mousePosition.y - 10
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
              x: { duration: 0.1, ease: 'linear' },
              y: { duration: 0.1, ease: 'linear' }
            }}
            style={{ left: 0, top: 0 }}
          >
            <span className="text-white text-sm tracking-wider uppercase whitespace-nowrap bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              (View Services)
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Layer 1: Features with Video Background (bottom layer - z-index 1) */}
        <motion.div
          className="absolute inset-0 z-[1] bg-primary cursor-pointer service-card"
          style={{ opacity: featuresOpacity }}
          onClick={handleServiceClick}
          data-cursor-text={activeService.available ? "View Service" : "Coming Soon"}
        >
          {/* Video Backgrounds - all preloaded, opacity controlled */}
          {services.map((feature, index) => (
            <div
              key={feature.number}
              className={`absolute inset-0 transition-opacity duration-700 ${
                activeFeatureIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={feature.video} type="video/mp4" />
              </video>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            </div>
          ))}

          {/* Tab Navigation - positioned below main navbar */}
          <motion.div
            className="absolute top-28 left-8 md:left-16 z-[10] flex items-center gap-2"
            style={{ opacity: tabNavOpacity }}
          >
            {services.map((feature, index) => (
              <button
                key={feature.number}
                onClick={(e) => {
                  e.stopPropagation()
                  scrollToFeature(index)
                }}
                className={`px-4 py-2 text-sm font-secondary tracking-wide transition-all duration-300 rounded-full
                  ${activeFeatureIndex === index
                    ? 'bg-white text-primary'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
              >
                {feature.shortTitle}
              </button>
            ))}
          </motion.div>

          {/* Main Feature Content */}
          <div
            className="relative z-[5] h-full flex flex-col justify-between px-8 md:px-16 py-24 overflow-visible"
          >

            {/* Title with number */}
            <div className="mt-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeatureIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h2 className="font-primary text-white">
                    <span className="text-[clamp(2rem,6vw,4.5rem)] font-bold inline-block leading-[1.2]">
                      {activeService.title}
                    </span>
                    <sup className="text-[clamp(0.8rem,1.5vw,1.2rem)] text-white/60 ml-2">
                      ({activeService.number})
                    </sup>
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* View Feature Button */}
            <motion.button
              className="absolute top-1/2 right-16 -translate-y-1/2 text-white/80 text-sm uppercase tracking-widest hover:text-white transition-colors hidden md:block"
              style={{ opacity: tabNavOpacity }}
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.stopPropagation()
                handleServiceClick()
              }}
            >
              {activeService.available ? '(View Service)' : '(Coming Soon)'}
            </motion.button>

            {/* Bottom Content */}
            <div className="flex justify-between items-end">
              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeFeatureIndex}
                  className="text-white/80 text-base md:text-lg max-w-[700px] leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  {activeService.description}
                </motion.p>
              </AnimatePresence>

              {/* Year indicator */}
              <span className="text-white/60 text-sm hidden md:block">
                2025
              </span>
            </div>
          </div>

          {/* Progress indicators - vertical dots on right */}
          <motion.div
            className="absolute right-8 top-1/2 -translate-y-1/2 z-[10] hidden md:flex flex-col gap-3"
            style={{ opacity: tabNavOpacity }}
          >
            {services.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  scrollToFeature(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300
                  ${activeFeatureIndex === index
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/60'
                  }`}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Layer 2: White section that splits as curtains (z-index 2) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-[2] bg-transparent overflow-hidden pointer-events-none"
          style={{ scale: whiteScale }}
        >
          {/* Left curtain with content */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-white flex items-center justify-end pr-8"
            style={{
              x: useTransform(curtainProgress, [0, 100], ['0%', '-100%'])
            }}
          >
            <motion.div className="text-right" style={{ opacity: contentOpacity }}>
              <span className="inline-block text-sm text-gray-500 tracking-[0.2em] uppercase mb-6">
                THE PLATFORM
              </span>
              <h2 className="font-primary text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] text-primary uppercase mb-6">
                All-in-one<br/>
                <span className="text-accent-secondary block">
                  {"healthcare".split('').map((letter, index) => (
                    <AnimatedLetter
                      key={index}
                      letter={letter}
                      index={index}
                      scrollProgress={textAnimationProgress}
                      startOffset={0}
                    />
                  ))}
                </span>
                <span className="text-accent-secondary block">
                  {"solution".split('').map((letter, index) => (
                    <AnimatedLetter
                      key={index}
                      letter={letter}
                      index={index}
                      scrollProgress={textAnimationProgress}
                      startOffset={10}
                    />
                  ))}
                </span>
              </h2>
            </motion.div>
          </motion.div>

          {/* Right curtain with content */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-white flex items-center justify-start pl-8"
            style={{
              x: useTransform(curtainProgress, [0, 100], ['0%', '100%'])
            }}
          >
            <motion.div className="max-w-[400px] text-left" style={{ opacity: contentOpacity }}>
              <p className="text-lg text-gray-500 leading-relaxed max-w-[600px]">
                CAMDIAN streamlines patient management, scheduling, billing, and records - all in one HIPAA-compliant platform designed for modern healthcare.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Layer 3: Black Background (top layer - z-index 3) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-[3] bg-primary pointer-events-none"
          style={{
            opacity: blackOpacity,
            scale: blackScale
          }}
        >
          <div className="text-center max-w-[800px] px-8">
            <motion.span
              className="inline-block text-sm text-accent tracking-[0.2em] uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              INTRODUCING CAMDIAN
            </motion.span>
            <motion.h2
              className="font-primary text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] text-white uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The future of<br/>
              <motion.span className="italic" style={{ color: healthcareColor }}>healthcare management</motion.span>
            </motion.h2>
            <motion.p
              className="text-lg text-white/70 leading-relaxed max-w-[600px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A comprehensive platform that empowers healthcare providers to deliver exceptional patient care while simplifying administrative workflows.
            </motion.p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default ScrollSections
