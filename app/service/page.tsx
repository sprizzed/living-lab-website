import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ServicePage() {
  const services = [
    {
      title: "Educational Outreach",
      description: "Providing engineering education resources and workshops to local schools and community organizations.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      color: "#489BAC"
    },
    {
      title: "Research Collaboration",
      description: "Collaborating with industry partners and research institutions on sustainable engineering projects.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path d="M12 6v6m0 0l-3-3m3 3l3-3" />
          <path d="M8 14l-2-2m0 0l-2 2m2-2l2 2" />
          <path d="M16 8l2 2m0 0l2-2m-2 2l-2-2" />
        </svg>
      ),
      color: "#EEC583"
    },
    {
      title: "Community Projects",
      description: "Engaging with local communities to address environmental and infrastructure challenges.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M6 8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" />
          <path d="M9 12a1 1 0 100 2h2a1 1 0 100-2H9z" />
        </svg>
      ),
      color: "#F9AC80"
    },
    {
      title: "Professional Development",
      description: "Supporting continuing education and professional development for engineering educators and practitioners.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      color: "#A2CAD1"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="hero-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="font-avenir-heavy text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-8 text-center">Service</h1>
          <p className="font-avenir-light text-lg md:text-xl text-black max-w-4xl mx-auto text-center leading-relaxed">
            Contributing to the community through education, research, and sustainable engineering practices.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-snap-section">
        <div className="services-section-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-avenir-heavy text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-6">Our Services</h2>
            <p className="font-avenir-light text-lg md:text-xl text-black max-w-4xl leading-relaxed">
              We provide a range of services to support engineering education and community development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-hover bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="text-black">{service.icon}</div>
                  </div>
                  <h3 className="font-avenir-heavy text-2xl leading-tight tracking-[0.04em]" style={{ color: service.color }}>
                    {service.title}
                  </h3>
                  <p className="font-inter-regular text-base text-black leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-snap-section">
        <div className="impact-section-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-avenir-heavy text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-6">Our Impact</h2>
            <p className="font-avenir-light text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed">
              Measuring the positive outcomes of our service initiatives and community engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover bg-white rounded-2xl p-8 shadow-xl text-center hover:bg-gradient-to-r hover:from-[#489BAC]/10 hover:to-[#EEC583]/10 group">
              <div className="text-4xl font-avenir-heavy text-[#489BAC] mb-4 group-hover:text-[#489BAC] transition-colors">50+</div>
              <h3 className="font-avenir-heavy text-xl text-black mb-3 group-hover:text-[#489BAC] transition-colors">Students Engaged</h3>
              <p className="font-inter-regular text-base text-black leading-relaxed">
                Students actively participating in community service projects and research initiatives.
              </p>
            </div>
            
            <div className="card-hover bg-white rounded-2xl p-8 shadow-xl text-center hover:bg-gradient-to-r hover:from-[#EEC583]/10 hover:to-[#F9AC80]/10 group">
              <div className="text-4xl font-avenir-heavy text-[#EEC583] mb-4 group-hover:text-[#EEC583] transition-colors">15+</div>
              <h3 className="font-avenir-heavy text-xl text-black mb-3 group-hover:text-[#EEC583] transition-colors">Community Partners</h3>
              <p className="font-inter-regular text-base text-black leading-relaxed">
                Local organizations and institutions collaborating on engineering education and sustainability projects.
              </p>
            </div>
            
            <div className="card-hover bg-white rounded-2xl p-8 shadow-xl text-center hover:bg-gradient-to-r hover:from-[#F9AC80]/10 hover:to-[#A2CAD1]/10 group">
              <div className="text-4xl font-avenir-heavy text-[#F9AC80] mb-4 group-hover:text-[#F9AC80] transition-colors">25+</div>
              <h3 className="font-avenir-heavy text-xl text-black mb-3 group-hover:text-[#F9AC80] transition-colors">Projects Completed</h3>
              <p className="font-inter-regular text-base text-black leading-relaxed">
                Successful engineering projects addressing real-world challenges in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 