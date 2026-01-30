import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import camdianLogo from '../assets/CAMDIAN.png'

// Background images for the shuffle effect
const loaderImages = [
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
]

const Loader = ({ onLoadingComplete }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  // Shuffle through images
  useEffect(() => {
    let imageIndex = 0
    const shuffleInterval = setInterval(() => {
      imageIndex = (imageIndex + 1) % loaderImages.length
      setCurrentImage(imageIndex)
    }, 600) // Change image every 600ms (slower shuffle)

    // After 3 seconds of shuffling, start exit animation
    const exitTimer = setTimeout(() => {
      clearInterval(shuffleInterval)
      setIsExiting(true)
    }, 3000)

    // Complete loading after exit animation
    const completeTimer = setTimeout(() => {
      onLoadingComplete()
    }, 4000)

    return () => {
      clearInterval(shuffleInterval)
      clearTimeout(exitTimer)
      clearTimeout(completeTimer)
    }
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {/* Rapidly changing background images */}
          <div className="absolute inset-0">
            {loaderImages.map((img, index) => (
              <div
                key={index}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300"
                style={{
                  backgroundImage: `url('${img}')`,
                  opacity: currentImage === index ? 1 : 0
                }}
              />
            ))}
            {/* Light overlay for logo visibility */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Logo with mix-blend-difference for transparency effect */}
          <motion.div
            className="relative z-10 mix-blend-difference"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img
              src={camdianLogo}
              alt="CAMDIAN"
              className="h-full w-full object-contain brightness-0 invert"
            />
          </motion.div>

          {/* Loading bar at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-[#ED1C24]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: 'linear' }}
          />
        </motion.div>
      ) : (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="relative z-10"
            initial={{ scale: 1 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={camdianLogo}
              alt="CAMDIAN"
              className="!w-full object-contain brightness-0 invert"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
