'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = [
    '/images/hero-image.jpg',
    '/images/hero-image2.jpeg',
    '/images/hero-image3.jpeg',
    '/images/hero-image4.jpeg'
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex === heroImages.length - 1 ? 0 : currentImageIndex + 1)
  }

  const prevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="hero-section-gradient"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 lg:pl-8 space-y-6 relative">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-radial from-[rgba(223,255,223,0.6)] via-[rgba(223,255,223,0.3)] to-transparent rounded-full blur-2xl"></div>
              <h1 className="font-avenir-heavy text-5xl md:text-6xl lg:text-7xl text-black leading-tight relative z-10">
                Living<br />Engineering<br />Laboratory
              </h1>
            </div>
            <p className="font-avenir-light text-lg md:text-xl text-black max-w-2xl leading-relaxed relative z-10">
              A dynamic repository of innovative engineering projects, promoting student-centered learning through hands-on exploration and real-world application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-10">
              <Link href="/projects">
                <button className="btn-hover bg-[#EBBD69] text-black font-avenir-heavy text-lg px-8 py-4 rounded-lg flex items-center space-x-2 shadow-lg w-full sm:w-auto">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span>Explore Projects</span>
                </button>
              </Link>
              <Link href="/about">
                <button className="btn-hover bg-white border-2 border-[#A2CAD1] text-black font-avenir-heavy text-lg px-8 py-4 rounded-lg flex items-center space-x-2 shadow-lg w-full sm:w-auto">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                  <span>Learn More</span>
                </button>
              </Link>
            </div>
          </div>
                        <div className="lg:col-span-7 lg:pl-4 relative flex justify-end z-20">
                <div className="hero-image-glow relative w-full h-[460px] lg:h-[520px] max-w-[85%] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20 backdrop-blur-sm z-30 group">
              <Image 
                src={heroImages[currentImageIndex]} 
                alt={`Engineering Laboratory ${currentImageIndex + 1}`} 
                fill 
                className="object-cover transition-opacity duration-500" 
                priority 
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all duration-200 z-10 cursor-pointer opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all duration-200 z-10 cursor-pointer opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}