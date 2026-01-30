import { useEffect, useRef, useState, useCallback } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const textRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isServiceHover, setIsServiceHover] = useState(false)

  const updateCursorListeners = useCallback(() => {
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorText('')
      setIsServiceHover(false)
    }

    const handleServiceEnter = (e) => {
      setIsHovering(true)
      setIsServiceHover(true)
      const text = e.currentTarget.getAttribute('data-cursor-text') || 'View Service'
      setCursorText(text)
    }

    const handleServiceLeave = () => {
      setIsHovering(false)
      setIsServiceHover(false)
      setCursorText('')
    }

    const interactiveElements = document.querySelectorAll('a, button, .project-card')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    const serviceElements = document.querySelectorAll('.service-item, .service-card, [data-cursor-text]')
    serviceElements.forEach(el => {
      el.addEventListener('mouseenter', handleServiceEnter)
      el.addEventListener('mouseleave', handleServiceLeave)
    })

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      serviceElements.forEach(el => {
        el.removeEventListener('mouseenter', handleServiceEnter)
        el.removeEventListener('mouseleave', handleServiceLeave)
      })
    }
  }, [])

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    const textElement = textRef.current

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      follower.style.left = e.clientX + 'px'
      follower.style.top = e.clientY + 'px'
      if (textElement) {
        textElement.style.left = e.clientX + 'px'
        textElement.style.top = e.clientY + 'px'
      }
    }

    window.addEventListener('mousemove', moveCursor)

    const cleanup = updateCursorListeners()

    // Re-attach listeners on DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      cleanup()
      updateCursorListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cleanup()
      observer.disconnect()
    }
  }, [updateCursorListeners])

  return (
    <>
      <div
        ref={cursorRef}
        className={`w-3 h-3 bg-accent rounded-full fixed pointer-events-none z-[9999] mix-blend-difference transition-all duration-100 -translate-x-1/2 -translate-y-1/2 ${
          isServiceHover ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <div
        ref={followerRef}
        className={`border border-white/30 rounded-full fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 flex items-center justify-center ${
          isServiceHover
            ? 'w-28 h-28 bg-white border-white'
            : isHovering
              ? 'w-16 h-16 border-accent'
              : 'w-10 h-10'
        }`}
      >
        {isServiceHover && cursorText && (
          <span className="text-primary text-xs font-secondary tracking-wide uppercase whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </div>
    </>
  )
}

export default CustomCursor
