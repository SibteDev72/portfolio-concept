import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar, Footer } from './components/layout'
import { HomePage, CamdianServicePage, FormFactoryServicePage, ComingSoonPage, AboutPage, PricingPage } from './pages'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const hideFooter = location.pathname.startsWith('/services/') ||
                     location.pathname === '/about' ||
                     location.pathname === '/pricing'

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isLoading ? { scale: 1.1, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: isLoading ? 0 : 0.2
        }}
      >
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/ehr" element={<CamdianServicePage />} />
          <Route path="/services/form-factory" element={<FormFactoryServicePage />} />
          <Route path="/services/:serviceId" element={<ComingSoonPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        {!hideFooter && <Footer />}
      </motion.div>
    </>
  )
}

export default App
