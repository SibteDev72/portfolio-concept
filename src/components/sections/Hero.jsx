import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const slides = [
  { title: 'Healthcare', subtitle: 'reimagined' },
  { title: 'EHR', subtitle: 'streamlined' },
  { title: 'Forms', subtitle: 'simplified' },
  { title: 'Compliance', subtitle: 'guaranteed' }
]

// Static background image (Healthcare)
const backgroundImage = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [displayedTitle, setDisplayedTitle] = useState('')
  const [displayedSubtitle, setDisplayedSubtitle] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Typewriter effect
  useEffect(() => {
    const currentTitle = slides[currentSlide].title
    const currentSubtitle = slides[currentSlide].subtitle
    let titleIndex = 0
    let subtitleIndex = 0
    setDisplayedTitle('')
    setDisplayedSubtitle('')
    setIsTyping(true)

    // Type title first
    const titleInterval = setInterval(() => {
      if (titleIndex < currentTitle.length) {
        setDisplayedTitle(currentTitle.slice(0, titleIndex + 1))
        titleIndex++
      } else {
        clearInterval(titleInterval)
        // Start typing subtitle after title is done
        const subtitleInterval = setInterval(() => {
          if (subtitleIndex < currentSubtitle.length) {
            setDisplayedSubtitle(currentSubtitle.slice(0, subtitleIndex + 1))
            subtitleIndex++
          } else {
            clearInterval(subtitleInterval)
            setIsTyping(false)
          }
        }, 80)
      }
    }, 100)

    return () => clearInterval(titleInterval)
  }, [currentSlide])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-end justify-start relative overflow-hidden" id="hero">
      {/* Static background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[1]"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
      </div>

      <motion.div className="w-full px-4 md:px-16 pb-24 relative z-[2]" style={{ y, opacity }}>
        <div className="flex items-end gap-4">
          <h1 className="hero-title font-primary text-[clamp(2.5rem,10vw,8rem)] font-bold leading-[0.95] text-white uppercase tracking-tight">
            <span className="block h-[1.1em]">
              {displayedTitle}
              {isTyping && displayedSubtitle === '' && (
                <motion.span
                  className="inline-block w-[4px] h-[0.9em] bg-white ml-1 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                />
              )}
            </span>
            <span className="block pb-2 pr-4">
              <span className="inline-block italic pb-1 pr-2" style={{ color: '#ED1C24' }}>
                {displayedSubtitle}
                {isTyping && displayedSubtitle !== '' && (
                  <motion.span
                    className="inline-block w-[4px] h-[0.9em] bg-[#ED1C24] ml-1 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                  />
                )}
              </span>
            </span>
          </h1>
          {!isTyping && (
            <motion.div
              className="w-5 h-24 bg-white mb-6 ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </div>

        {/* Slide indicators */}
        <div className="flex gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? 'w-12 bg-[#ED1C24]'
                  : 'w-6 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          className="absolute bottom-12 right-4 md:right-16 flex flex-col items-end gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-sm text-white tracking-wider">(Scroll Down)</span>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
