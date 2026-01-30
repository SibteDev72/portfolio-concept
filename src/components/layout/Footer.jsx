import { useState } from 'react'
import { Link } from 'react-router-dom'
import camdianLogo from '../../assets/CAMDIAN.png'

const Footer = () => {
  const [signInModalOpen, setSignInModalOpen] = useState(false)
  const [subdomain, setSubdomain] = useState('')

  const handleSignIn = (e) => {
    e.preventDefault()
    if (subdomain.trim()) {
      window.location.href = `https://${subdomain.trim().toLowerCase()}.camdian.com`
    }
  }

  const navLinks = [
    { href: '/', label: 'Home', isRoute: true },
    { href: '#services', label: 'Services', isRoute: false },
    { href: '/about', label: 'About', isRoute: true },
    { href: '/pricing', label: 'Pricing', isRoute: true },
    { href: '#', label: 'Sign In', isSignIn: true },
  ]

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-0 text-white min-h-screen flex flex-col overflow-hidden">
      {/* Full background - Camdian colors: black, white, red */}
      <div className="absolute inset-0 bg-black">
        {/* Red glow from bottom right */}
        <div className="absolute bottom-0 right-0 w-[70%] h-[60%] bg-gradient-to-tl from-[#ED1C24]/30 via-[#ED1C24]/10 to-transparent"></div>
        {/* Red glow orb */}
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#ED1C24]/15 rounded-full blur-[150px]"></div>
        {/* Subtle top red line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ED1C24]/50 to-transparent"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-8 md:px-16 md:pt-40">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map(link => (
              link.isSignIn ? (
                <button
                  key={link.label}
                  onClick={() => setSignInModalOpen(true)}
                  className="text-3xl md:text-4xl font-bold text-white hover:text-accent transition-colors text-left"
                >
                  {link.label}
                </button>
              ) : link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-3xl md:text-4xl font-bold text-white hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-3xl md:text-4xl font-bold text-white hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* Right Side - Contact & Our Voice in row 1, Newsletter in row 2 */}
          <div className="flex flex-col gap-8">
            {/* Row 1: Contact & Our Voice */}
            <div className="flex flex-row gap-12 lg:gap-16">
              {/* Contact Info */}
              <div>
                <h4 className="text-sm text-white/50 uppercase tracking-wider mb-4">Contact</h4>
                <div className="space-y-1">
                  <p className="text-white">US +1 (555) 123-4567</p>
                  <p className="text-white">support@camdian.com</p>
                  <p className="text-white/70 mt-3">Worldwide healthcare.</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm text-white/50 uppercase tracking-wider mb-4">Our Voice</h4>
                <div className="space-y-1">
                  <a href="#" className="block text-white hover:text-accent transition-colors">
                    Instagram <span className="text-accent">↗</span>
                  </a>
                  <a href="#" className="block text-white hover:text-accent transition-colors">
                    LinkedIn <span className="text-accent">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Row 2: Newsletter */}
            <div>
              <h4 className="text-sm text-white/50 uppercase tracking-wider mb-4">Subscribe to our Newsletter</h4>
              <div className="flex items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email*"
                  className="bg-transparent border-b border-white/30 px-0 py-2 text-white placeholder:text-white/50 focus:outline-none focus:border-[#ED1C24] w-40"
                />
                <button className="px-5 py-2 bg-[#ED1C24] text-white text-sm font-medium hover:bg-[#c91820] transition-colors rounded-sm">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Large Logo */}
        <div className="mt-16">
          {/* Large CAMDIAN Logo */}
          <div className="flex items-end justify-between">
            <div className="relative">
              <img
                src={camdianLogo}
                alt="CAMDIAN"
                className="h-[clamp(4rem,15vw,12rem)] w-auto object-contain brightness-0 invert"
              />
              <span className="absolute -top-2 -right-8 text-accent text-[clamp(1rem,3vw,2rem)]">®</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex justify-end mt-8">
            <p className="text-sm text-white/50">
              Zetaver © CAMDIAN. ALL RIGHTS RESERVED
            </p>
          </div>
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
                  className="w-32 md:w-[14rem] px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
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
              Don't have a workspace? <a href="#contact" onClick={() => setSignInModalOpen(false)} className="text-[#ED1C24] hover:underline">Request a demo</a>
            </p>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
