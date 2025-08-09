import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function TeachingPage() {
  const allCourses = [
    {
      id: 1,
      title: "Engineering Statics",
      code: "ENGR 210",
      description: "Fundamental principles of statics and their application to engineering problems.",
      credits: 3,
      image: "/images/project1.jpg"
    },
    {
      id: 2,
      title: "Environmental Water Quality",
      code: "CEE 318",
      description: "Study of water quality parameters and environmental monitoring techniques.",
      credits: 3,
      image: "/images/project2.jpg"
    },
    {
      id: 3,
      title: "Capstone Design: Lab-scale Model for Wetlands",
      code: "CEE 400",
      description: "Comprehensive design project focusing on constructed wetland systems.",
      credits: 4,
      image: "/images/project3.jpg"
    },
    {
      id: 4,
      title: "Construction Materials",
      code: "CEE 350",
      description: "Properties and applications of construction materials in engineering projects.",
      credits: 3,
      image: "/images/project1.jpg"
    },
    {
      id: 5,
      title: "Renewable Energy Systems",
      code: "ENGR 320",
      description: "Design and implementation of sustainable energy solutions.",
      credits: 3,
      image: "/images/project2.jpg"
    },
    {
      id: 6,
      title: "Water Treatment Design",
      code: "CEE 415",
      description: "Advanced water treatment system design and optimization.",
      credits: 4,
      image: "/images/project3.jpg"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="hero-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="font-avenir-heavy text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-8 text-center">Teaching</h1>
          <p className="font-avenir-light text-lg md:text-xl text-black max-w-4xl mx-auto text-center leading-relaxed">
            Discover our innovative approach to engineering education through hands-on learning and real-world applications.
          </p>
        </div>
      </section>

      {/* All Courses Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-snap-section">
        <div className="courses-section-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-avenir-heavy text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-6">All Courses</h2>
            <p className="font-avenir-light text-lg md:text-xl text-black max-w-4xl leading-relaxed">
              Explore our comprehensive curriculum designed to provide students with both theoretical knowledge and practical experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allCourses.map((course) => (
              <div key={course.id} className="card-hover bg-white rounded-lg p-6 shadow-lg">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="font-roboto-medium text-sm text-[#FF5F5F] bg-red-50 px-2 py-1 rounded">{course.code}</span>
                    <span className="font-roboto-medium text-sm text-[#EEC583]">{course.credits} Credits</span>
                  </div>
                  <h3 className="font-avenir-heavy text-lg text-black leading-tight">{course.title}</h3>
                  <p className="font-inter-regular text-sm text-gray-600 leading-relaxed">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-snap-section">
        <div className="philosophy-section-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-avenir-heavy text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-6">Teaching Philosophy</h2>
            <p className="font-avenir-light text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed">
              Our approach to engineering education emphasizes hands-on learning, real-world applications, and student-centered experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Experiential Learning", color: "bg-[#489BAC]", icon: "🔬", description: "Students learn through direct experience with real engineering challenges" },
              { title: "Critical Thinking", color: "bg-[#EEC583]", icon: "🧠", description: "We foster analytical and problem-solving skills through complex challenges" },
              { title: "Hands-On Application", color: "bg-[#F9AC80]", icon: "🔨", description: "Students apply theoretical concepts through practical projects" },
              { title: "Collaborative Learning", color: "bg-[#A2CAD1]", icon: "👥", description: "Team-based projects that mirror real-world engineering practice" }
            ].map((item, index) => (
              <div key={index} className="card-hover bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#489BAC]/10 hover:to-[#EEC583]/10 group">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-3xl`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-avenir-heavy text-2xl text-black leading-tight group-hover:text-[#489BAC] transition-colors">{item.title}</h3>
                  <p className="font-inter-regular text-base text-black leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 