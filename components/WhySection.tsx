'use client'

export default function WhySection() {
  const cards = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      title: "Experiential Learning",
      description: "Real engineering projects with detailed documentation, procedures, and learning outcomes for active student engagement.",
      color: "#489BAC"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path d="M12 6v6m0 0l-3-3m3 3l3-3" />
          <path d="M8 14l-2-2m0 0l-2 2m2-2l2 2" />
          <path d="M16 8l2 2m0 0l2-2m-2 2l-2-2" />
          <path d="M4 8l-2-2m0 0l-2 2m2-2l2 2" />
          <path d="M8 4l-2-2m0 0l-2 2m2-2l2 2" />
        </svg>
      ),
      title: "Integrated Research & Thinking",
      description: "Student-led projects that combine research, design, and critical thinking to solve real-world engineering challenges through iterative exploration.",
      color: "#EEC583"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M6 8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" />
          <path d="M9 12a1 1 0 100 2h2a1 1 0 100-2H9z" />
          <path d="M4 6a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" />
        </svg>
      ),
      title: "Hands-On & Place-Based Learning",
      description: "Engineering solutions developed through direct engagement with local environments and systems, connecting learning to physical, real-world contexts.",
      color: "#F9AC80"
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-snap-section">
      <div className="why-section-gradient"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-avenir-heavy text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-6">
            Why Living Engineering<br />Laboratory?
          </h2>
          <p className="font-avenir-light text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed">
            Bridging the gap between theoretical knowledge and practical application through documented experiments, comprehensive resources, and collaborative learning experiences.
          </p>
        </div>
                        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-4/5 h-3/4 bg-gradient-radial from-[rgba(248,172,129,0.3)] via-[rgba(248,172,129,0.15)] to-transparent rounded-full blur-xl"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {cards.map((card, index) => (
              <div key={index} className="why-card-hover bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center space-y-4 relative z-10">
                  <div className="flex justify-center">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white`} style={{ backgroundColor: card.color }}>
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="font-avenir-heavy text-xl leading-tight tracking-[0.04em]" style={{ color: card.color }}>
                    {card.title}
                  </h3>
                  <p className="font-inter-regular text-sm text-black leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}