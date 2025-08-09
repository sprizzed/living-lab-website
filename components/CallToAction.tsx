'use client'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="call-to-action-gradient"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="font-avenir-heavy text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-6">
            Ready to{' '}
            <span className="underline" style={{ color: '#8080D7' }}>
              transform
            </span>{' '}
            Engineering Education?
          </h2>
          <p className="font-avenir-light text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed">
            Dive into our comprehensive collection of engineering projects, connect with our academic community, and transform your learning experience.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/projects">
            <button className="btn-hover bg-[#8FA46D] text-white font-avenir-heavy text-lg px-8 py-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg w-full sm:w-auto">
              <span>Browse Projects</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
          <Link href="/contact">
            <button className="btn-hover bg-white border-2 border-[#A2CAD1] text-black font-avenir-heavy text-lg px-8 py-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg w-full sm:w-auto">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              <span>Get Involved</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
} 