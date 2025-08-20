'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-20 h-20">
              <Image src="/images/logo.png" alt="Living Engineering Laboratory Logo" fill className="object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="font-avenir-heavy text-lg text-black">
                Living Engineering Laboratory
              </div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-avenir-next-condensed text-xl font-medium text-black hover:text-gray-600 transition-colors">Home</Link>
            <Link href="/about" className="font-avenir-next-condensed text-xl font-medium text-black hover:text-gray-600 transition-colors">About</Link>
            <Link href="/projects" className="font-avenir-next-condensed text-xl font-medium text-black hover:text-gray-600 transition-colors">Projects</Link>
            <Link href="/teaching" className="font-avenir-next-condensed text-xl font-medium text-black hover:text-gray-600 transition-colors">Teaching</Link>
            <Link href="/service" className="font-avenir-next-condensed text-xl font-medium text-black hover:text-gray-600 transition-colors">Service</Link>
            <Link href="/contact" className="font-avenir-next-condensed text-xl font-medium text-black hover:text-gray-600 transition-colors">Contact</Link>
            <Link href="/admin" className="font-avenir-next-condensed text-lg font-medium text-[#489BAC] hover:text-[#3a7a8a] transition-colors border border-[#489BAC] px-3 py-1 rounded-md">Admin</Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 font-avenir-next-condensed text-lg font-medium text-black hover:text-gray-600 transition-colors">Home</Link>
              <Link href="/about" className="block px-3 py-2 font-avenir-next-condensed text-lg font-medium text-black hover:text-gray-600 transition-colors">About</Link>
              <Link href="/projects" className="block px-3 py-2 font-avenir-next-condensed text-lg font-medium text-black hover:text-gray-600 transition-colors">Projects</Link>
              <Link href="/teaching" className="block px-3 py-2 font-avenir-next-condensed text-lg font-medium text-black hover:text-gray-600 transition-colors">Teaching</Link>
              <Link href="/service" className="block px-3 py-2 font-avenir-next-condensed text-lg font-medium text-black hover:text-gray-600 transition-colors">Service</Link>
              <Link href="/contact" className="block px-3 py-2 font-avenir-next-condensed text-lg font-medium text-black hover:text-gray-600 transition-colors">Contact</Link>
              <Link href="/admin" className="block px-3 py-2 font-avenir-next-condensed text-lg font-medium text-[#489BAC] hover:text-[#3a7a8a] transition-colors">Admin</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}