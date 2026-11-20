import React, { useState, useRef, useEffect } from 'react'

function BeforeAfterSlider({ beforeImage, afterImage, laptopFrame = false }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef(null)
  const animationRef = useRef(null)

  // Auto-play animation (only when not hovering/dragging)
  useEffect(() => {
    if (isDragging || isHovering) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
      return
    }

    let direction = 1
    let position = sliderPosition

    const animate = () => {
      position += direction * 0.2  // Reduced speed
      
      if (position >= 100) direction = -1
      if (position <= 0) direction = 1
      
      setSliderPosition(position)
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isDragging, isHovering])

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX)
  }

  const handleTouchStart = () => {
    setIsHovering(true)
  }

  const handleTouchEnd = () => {
    setIsHovering(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging])

  if (laptopFrame) {
    return (
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Laptop Frame */}
        <img 
          src="/images/device-png/Transparent Laptop Product Mockup.webp" 
          alt="Laptop frame"
          className="w-full h-auto relative z-10 pointer-events-none select-none"
          draggable="false"
        />
        
        {/* Screen Content - positioned absolutely to fit inside laptop frame */}
        <div 
          ref={containerRef}
          className={`absolute overflow-hidden cursor-ew-resize select-none transition-all duration-300 ${
            isHovering ? 'ring-4 ring-blue-400 ring-opacity-50' : ''
          }`}
          style={{
            top: '6.84%',
            left: '8.85%',
            width: '81.29%',
            height: '80.37%'
          }}
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* After Image (Background) */}
          <img
            src={afterImage}
            alt="After"
            className="absolute inset-0 w-full h-full object-cover select-none"
            draggable="false"
          />

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden select-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={beforeImage}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover select-none"
              draggable="false"
            />
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm font-semibold pointer-events-none">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm font-semibold pointer-events-none">
            After
          </div>
        </div>
      </div>
    )
  }

  // Mobile version with laptop frame
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Laptop Frame */}
      <img 
        src="/images/device-png/Transparent Laptop Product Mockup.webp" 
        alt="Laptop frame"
        className="w-full h-auto relative z-10 pointer-events-none select-none"
        draggable="false"
      />
      
      {/* Screen Content - positioned absolutely to fit inside laptop frame */}
      <div 
        ref={containerRef}
        className={`absolute overflow-hidden cursor-ew-resize select-none transition-all duration-300 ${
          isHovering ? 'ring-2 ring-blue-400 ring-opacity-50' : ''
        }`}
        style={{
          top: '6.84%',
          left: '8.85%',
          width: '81.29%',
          height: '80.37%'
        }}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* After Image (Background) */}
        <img
          src={afterImage}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover select-none"
          draggable="false"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover select-none"
            draggable="false"
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center touch-manipulation">
            <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold pointer-events-none">
          Before
        </div>
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold pointer-events-none">
          After
        </div>
      </div>
    </div>
  )
}

export default BeforeAfterSlider
