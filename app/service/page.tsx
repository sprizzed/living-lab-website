import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ServicePage() {
  const services = [
    {
      title: "Educational Outreach",
      description: "Providing engineering education resources and workshops to local schools and community organizations.",
      icon: "🎓",
      color: "#489BAC"
    },
    {
      title: "Research Collaboration",
      description: "Collaborating with industry partners and research institutions on sustainable engineering projects.",
      icon: "🤝",
      color: "#EEC583"
    },
    {
      title: "Community Projects",
      description: "Engaging with local communities to address environmental and infrastructure challenges.",
      icon: "🏘️",
      color: "#F9AC80"
    },
    {
      title: "Professional Development",
      description: "Supporting continuing education and professional development for engineering educators and practitioners.",
      icon: "📈",
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
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
                    <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-3xl text-white`}>
                      {service.icon}
                    </div>
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
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