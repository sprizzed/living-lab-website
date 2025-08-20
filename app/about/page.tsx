import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="hero-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="font-avenir-heavy text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-8 text-center">
            <span className="bg-gradient-to-r from-[#489BAC] via-[#EEC583] to-[#F9AC80] bg-clip-text text-transparent font-black">
              About the Initiative
            </span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Professor Details */}
            <div className="professor-card-hover bg-white rounded-2xl p-8 shadow-xl relative">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg">
                    <Image src="/images/professor_image.jpeg" alt="Dr. Kushal Adhikari" fill className="object-cover" />
                  </div>
                  <div>
                    <h2 className="font-avenir-heavy text-3xl text-black mb-2">Dr. Kushal Adhikari</h2>
                    <p className="font-roboto-medium text-lg text-[#EEC583]">Assistant Professor</p>
                    <p className="font-roboto-medium text-lg text-[#FF5F5F]">Civil & Environmental Engineering</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="font-inter-regular text-base text-black leading-relaxed">
                    Dr. Adhikari currently serves as an Assistant Professor of Civil & Environmental Engineering at Alvernia University and brings in his teaching experience from Juniata College, Cal Poly Humboldt and Texas Tech University.
                  </p>
                  <p className="font-inter-regular text-base text-black leading-relaxed">
                    Dr. Adhikari strongly believes in experiential learning and strives to create research opportunities for students while creating an impact on human lives and society.
                  </p>
                  <p className="font-inter-regular text-base text-black leading-relaxed">
                    His research interest lies in integrating sustainability dimensions into engineering, thus building a sustainable and resilient society while using appropriate ways to reduce, reuse, and recycle.
                  </p>
                  <p className="font-inter-regular text-base text-black leading-relaxed">
                    He is also actively involved in engineering education research and strives for effective pedagogy practices and student success.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-avenir-heavy text-xl text-black">Education</h3>
                  <div className="space-y-2">
                    <p className="font-inter-regular text-base text-black">Ph.D. in Civil Engineering</p>
                    <p className="font-inter-regular text-base text-black">M.S. in Environmental Engineering</p>
                    <p className="font-inter-regular text-base text-black">B.S. in Civil Engineering</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-avenir-heavy text-xl text-black">Research Areas</h3>
                  <ul className="space-y-2">
                    <li className="font-inter-regular text-base text-black">• Sustainable Engineering Practices</li>
                    <li className="font-inter-regular text-base text-black">• Environmental Engineering</li>
                    <li className="font-inter-regular text-base text-black">• Engineering Education</li>
                    <li className="font-inter-regular text-base text-black">• Student-Centered Learning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Side - Our Approach */}
            <div className="space-y-8">

              <div>
                <h2 className="font-avenir-heavy text-3xl text-black mb-6">Our Approach</h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#489BAC]/10 hover:to-[#EEC583]/10 group">
                    <h3 className="font-avenir-heavy text-xl text-black mb-3 group-hover:text-[#489BAC] transition-colors">Student-Centered Learning</h3>
                    <p className="font-inter-regular text-base text-black leading-relaxed">
                      We prioritize active learning experiences that engage students directly with engineering concepts through hands-on projects and real-world applications.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#EEC583]/10 hover:to-[#F9AC80]/10 group">
                    <h3 className="font-avenir-heavy text-xl text-black mb-3 group-hover:text-[#EEC583] transition-colors">Documentation & Sharing</h3>
                    <p className="font-inter-regular text-base text-black leading-relaxed">
                      Every project is thoroughly documented with procedures, outcomes, and lessons learned, creating a valuable resource for future students and educators.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F9AC80]/10 hover:to-[#489BAC]/10 group">
                    <h3 className="font-avenir-heavy text-xl text-black mb-3 group-hover:text-[#F9AC80] transition-colors">Sustainability Focus</h3>
                    <p className="font-inter-regular text-base text-black leading-relaxed">
                      Our projects emphasize sustainable engineering practices, preparing students to address environmental challenges in their future careers.
                    </p>
                  </div>
                </div>
                
                {/* Research Paper Button */}
                <div className="mt-8 text-center">
                  <a 
                    href="/Living_laboratory_Final_Adhikari__K copy.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block btn-hover bg-[#489BAC] text-white font-avenir-heavy text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#3a7a8a] transition-all duration-300"
                  >
                    Read the full Living Engineering Laboratory Research Paper!
                  </a>
                </div>
              </div>
              
              {/* About Clipart */}
              <div className="mt-12 flex justify-center">
                <div className="relative w-64 h-64">
                  <Image src="/images/about_clipart.png" alt="About the Initiative" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The First Cycle Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="why-section-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-avenir-heavy text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-6">The First Cycle</h2>
            <p className="font-avenir-light text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed">
              Our inaugural collection of projects represents the foundation of our living laboratory approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-hover bg-white rounded-2xl p-8 shadow-xl hover:bg-gradient-to-r hover:from-[#489BAC]/10 hover:to-[#EEC583]/10 group">
              <h3 className="font-avenir-heavy text-2xl text-black mb-4 group-hover:text-[#489BAC] transition-colors">Project Development</h3>
              <p className="font-inter-regular text-base text-black leading-relaxed">
                Students work collaboratively to develop comprehensive engineering projects that address real-world challenges while demonstrating fundamental engineering principles.
              </p>
            </div>
            
            <div className="card-hover bg-white rounded-2xl p-8 shadow-xl hover:bg-gradient-to-r hover:from-[#EEC583]/10 hover:to-[#F9AC80]/10 group">
              <h3 className="font-avenir-heavy text-2xl text-black mb-4 group-hover:text-[#EEC583] transition-colors">Documentation Process</h3>
              <p className="font-inter-regular text-base text-black leading-relaxed">
                Each project undergoes a thorough documentation process, including detailed procedures, results analysis, and lessons learned for future reference.
              </p>
            </div>
            
            <div className="card-hover bg-white rounded-2xl p-8 shadow-xl hover:bg-gradient-to-r hover:from-[#F9AC80]/10 hover:to-[#A2CAD1]/10 group">
              <h3 className="font-avenir-heavy text-2xl text-black mb-4 group-hover:text-[#F9AC80] transition-colors">Knowledge Sharing</h3>
              <p className="font-inter-regular text-base text-black leading-relaxed">
                Completed projects are shared through our digital repository, creating a growing library of educational resources for the engineering community.
              </p>
            </div>
            
            <div className="card-hover bg-white rounded-2xl p-8 shadow-xl hover:bg-gradient-to-r hover:from-[#A2CAD1]/10 hover:to-[#489BAC]/10 group">
              <h3 className="font-avenir-heavy text-2xl text-black mb-4 group-hover:text-[#A2CAD1] transition-colors">Continuous Improvement</h3>
              <p className="font-inter-regular text-base text-black leading-relaxed">
                Feedback from students and educators drives continuous improvement of our projects and teaching methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 