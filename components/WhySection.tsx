'use client'

export default function WhySection() {
  const cards = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
        </svg>
      ),
      title: "Experiential Learning",
      description: "Real engineering projects with detailed documentation, procedures, and learning outcomes for active student engagement.",
      color: "#489BAC"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
      title: "Integrated Research & Thinking",
      description: "Student-led projects that combine research, design, and critical thinking to solve real-world engineering challenges through iterative exploration.",
      color: "#EEC583"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
        </svg>
      ),
      title: "Hands-On & Place-Based Learning",
      description: "Engineering solutions developed through direct engagement with local environments and systems, connecting learning to physical, real-world contexts.",
      color: "#F9AC80"
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 mt-5">
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
            <div className="w-[calc(100%+24px)] h-[calc(100%+24px)] -top-3 -left-3 bg-gradient-radial from-[rgba(128,128,128,0.22)] via-[rgba(128,128,128,0.15)] to-transparent rounded-full blur-xl transition-all duration-300 group-hover:from-[rgba(248,172,129,0.37)] group-hover:via-[rgba(248,172,129,0.22)]"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 group">
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