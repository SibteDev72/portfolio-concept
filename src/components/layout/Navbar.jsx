import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import camdianLogo from '../../assets/CAMDIAN.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isBlendMode, setIsBlendMode] = useState(false)
  const [signInModalOpen, setSignInModalOpen] = useState(false)
  const [subdomain, setSubdomain] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const heroTitle = document.querySelector('.hero-title')
      if (heroTitle) {
        const titleRect = heroTitle.getBoundingClientRect()
        setIsBlendMode(titleRect.top < 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)

    // Check if we're on the home page
    if (location.pathname === '/') {
      // On home page, just scroll
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // On different page, navigate to home with hash
      navigate('/' + id)
    }
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    if (subdomain.trim()) {
      window.location.href = `https://${subdomain.trim().toLowerCase()}.camdian.com`
    }
  }

  const navLinks = [
    { href: '#services', label: 'SERVICES', isRoute: false },
    { href: '/about', label: 'ABOUT', isRoute: true },
    { href: '/pricing', label: 'PRICING', isRoute: true },
  ]

  const NavContent = () => (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center max-w-[1600px] mx-auto">
      <Link to="/" className="flex items-center justify-self-start">
        <img
          src={camdianLogo}
          alt="CAMDIAN"
          className="h-[60px] w-auto brightness-0 invert"
        />
      </Link>

      <div className="hidden md:flex gap-10 items-center justify-self-center">
        {navLinks.map(link => (
          link.isRoute ? (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 hover:text-[#ED1C24] hover:font-bold hover:scale-110"
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 hover:text-[#ED1C24] hover:font-bold hover:scale-110"
            >
              {link.label}
            </a>
          )
        ))}
      </div>

      {/* <div className="hidden md:flex items-center gap-4 justify-self-end">
        <button
          onClick={() => setSignInModalOpen(true)}
          className="text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 hover:text-[#ED1C24] hover:font-bold hover:scale-110"
        >
          SIGN IN
        </button>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          REQUEST DEMO
        </a>
      </div> */}

      <button
        className={`md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2.5 absolute right-4 ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-7 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-7 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-0' : ''}`}></span>
      </button>
    </div>
  )

  return (
    <>
      {/* White navbar - slides up when blend mode activates */}
      <nav className={`fixed left-0 w-full z-[100] py-6 px-4 md:px-16 transition-transform duration-500 ease-out top-0 ${isBlendMode ? '-translate-y-full' : 'translate-y-0'}`}>
        <NavContent />
      </nav>

      {/* Blend mode navbar - slides down when blend mode activates */}
      <nav className={`fixed left-0 w-full z-[100] py-6 px-4 md:px-16 transition-transform duration-500 ease-out top-0 mix-blend-difference ${isBlendMode ? 'translate-y-0' : '-translate-y-full'}`}>
        <NavContent />
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-primary z-[99] flex items-center justify-center transition-all duration-400 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map(link => (
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-primary text-4xl hover:text-[#ED1C24] hover:font-bold hover:scale-110 transition-all duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-primary text-4xl hover:text-[#ED1C24] hover:font-bold hover:scale-110 transition-all duration-300"
              >
                {link.label}
              </a>
            )
          ))}
          <button
            onClick={() => {
              setMenuOpen(false)
              setSignInModalOpen(true)
            }}
            className="font-primary text-4xl hover:text-[#ED1C24] hover:font-bold hover:scale-110 transition-all duration-300"
          >
            SIGN IN
          </button>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="font-primary text-4xl hover:text-[#ED1C24] hover:font-bold hover:scale-110 transition-all duration-300"
          >
            REQUEST DEMO
          </a>
        </div>
      </div>

      {/* Sign In Modal */}
      {signInModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4"
          onClick={() => setSignInModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSignInModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src={camdianLogo}
                alt="CAMDIAN"
                className="h-12 w-auto"
              />
            </div>

            {/* Title */}
            <h2 className="text-center text-xl font-semibold text-gray-800 mb-2">
              Sign in to your workspace
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              Enter your workspace name to continue
            </p>

            {/* Form */}
            <form onSubmit={handleSignIn}>
              <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden focus-within:border-[#ED1C24] transition-colors">
                <input
                  type="text"
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value)}
                  placeholder="workspace"
                  className="w-40 md:w-[14rem] px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                  autoFocus
                />
                <span className="px-3 py-3 bg-gray-100 text-gray-500 font-medium border-l border-gray-200 whitespace-nowrap">
                  .camdian.com
                </span>
              </div>

              <button
                type="submit"
                className="w-full mt-6 px-6 py-3 bg-[#ED1C24] text-white font-medium rounded-lg hover:bg-[#c91820] transition-colors"
              >
                Continue
              </button>
            </form>

            {/* Help Text */}
            <p className="text-center text-gray-400 text-xs mt-6">
              Don't have a workspace? <a href="#contact" onClick={(e) => { handleNavClick(e, '#contact'); setSignInModalOpen(false); }} className="text-[#ED1C24] hover:underline">Request a demo</a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
