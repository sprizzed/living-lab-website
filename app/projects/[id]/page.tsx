'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Mock project data - in a real app, this would come from an API or database
  const projects = {
    '1': {
      title: "Constructed Wetland Model",
      category: "Environmental Engineering",
      courseId: "CEE 400",
      courseName: "Capstone Design: Lab-scale Model for Wetlands",
      description: "This capstone project involves the design and construction of a lab-scale wetland model, demonstrating innovative approaches to water treatment and sustainable environmental engineering.",
      images: ["/images/project1.jpg", "/images/project2.jpg", "/images/project3.jpg"],
      procedure: [
        "Design Phase: Conceptual design of wetland components including inlet distribution, substrate layers, and outlet collection systems.",
        "Construction Phase: Assembly of physical model using appropriate materials for substrate, vegetation, and structural components.",
        "Testing Phase: Implementation of controlled flow rates and monitoring of water quality parameters including pH, dissolved oxygen, and contaminant removal efficiency.",
        "Analysis Phase: Data collection and analysis to evaluate treatment performance and optimize design parameters.",
        "Documentation Phase: Comprehensive documentation of design decisions, construction methods, and performance results."
      ],
      references: [
        "Kadlec, R.H., & Wallace, S.D. (2009). Treatment Wetlands (2nd ed.). CRC Press.",
        "Vymazal, J. (2011). Constructed Wetlands for Wastewater Treatment: Five Decades of Experience. Environmental Science & Technology, 45(1), 61-69.",
        "EPA. (2000). Constructed Wetlands Treatment of Municipal Wastewaters. EPA/625/R-99/010.",
        "Stefanakis, A.I., et al. (2014). Vertical Flow Constructed Wetlands: Eco-engineering Systems for Wastewater and Sludge Treatment. Elsevier."
      ]
    },
    '2': {
      title: "Bridge Design",
      category: "Structural Engineering",
      courseId: "ENGR 210",
      courseName: "Engineering Statics",
      description: "A practical application of engineering statics, this project focuses on the design, construction, and rigorous testing of a scaled bridge, showcasing structural integrity principles.",
      images: ["/images/project2.jpg", "/images/project1.jpg", "/images/project3.jpg"],
      procedure: [
        "Load Analysis: Calculation of dead loads, live loads, and environmental loads acting on the bridge structure.",
        "Structural Design: Determination of member sizes, connections, and overall geometry based on load requirements.",
        "Material Selection: Choosing appropriate materials considering strength, durability, and cost constraints.",
        "Construction Planning: Development of construction sequence and quality control procedures.",
        "Testing Protocol: Design and implementation of load testing to verify structural performance and safety factors."
      ],
      references: [
        "Hibbeler, R.C. (2016). Engineering Mechanics: Statics (14th ed.). Pearson.",
        "AASHTO. (2017). AASHTO LRFD Bridge Design Specifications (8th ed.). American Association of State Highway and Transportation Officials.",
        "Nowak, A.S., & Collins, K.R. (2012). Reliability of Structures (2nd ed.). CRC Press.",
        "FHWA. (2012). Bridge Inspector's Reference Manual. Federal Highway Administration."
      ]
    },
    '3': {
      title: "Water Quality Monitoring",
      category: "Environmental Engineering",
      courseId: "CEE 318",
      courseName: "Environmental Water Quality",
      description: "Through hands-on field measurements and laboratory analysis, this project assesses the overall health and quality of a natural water body.",
      images: ["/images/project3.jpg", "/images/project1.jpg", "/images/project2.jpg"],
      procedure: [
        "Site Selection: Identification and characterization of sampling locations based on watershed characteristics and potential pollution sources.",
        "Sampling Protocol: Development of sampling procedures for various water quality parameters including physical, chemical, and biological indicators.",
        "Field Measurements: On-site measurement of temperature, pH, dissolved oxygen, conductivity, and turbidity using calibrated instruments.",
        "Laboratory Analysis: Processing of collected samples for nutrient analysis, bacterial counts, and contaminant concentrations.",
        "Data Analysis: Statistical analysis of results and comparison with regulatory standards and historical data."
      ],
      references: [
        "APHA. (2017). Standard Methods for the Examination of Water and Wastewater (23rd ed.). American Public Health Association.",
        "Chapman, D. (1996). Water Quality Assessments: A Guide to the Use of Biota, Sediments and Water in Environmental Monitoring. UNESCO.",
        "EPA. (2012). Water Quality Standards Handbook (2nd ed.). EPA-820-B-12-003.",
        "Wetzel, R.G., & Likens, G.E. (2000). Limnological Analyses (3rd ed.). Springer."
      ]
    }
  }

  const project = projects[projectId as keyof typeof projects]

  // Auto-slide functionality
  useEffect(() => {
    if (project) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [project])

  if (!project) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-avenir-heavy text-4xl text-black mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-600 hover:underline">Back to Projects</Link>
        </div>
        <Footer />
      </main>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="hero-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Images */}
            <div className="space-y-6">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`} 
                  fill 
                  className="object-cover" 
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              {project.images.length > 1 && (
                <div className="flex justify-center space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Project Details */}
            <div className="space-y-8">
              <div>
                <h1 className="font-avenir-heavy text-4xl md:text-5xl text-black leading-tight mb-4">
                  {project.title}
                </h1>
                <div className="space-y-2">
                  <p className="font-roboto-medium text-lg text-[#FF5F5F]">{project.category}</p>
                  <p className="font-roboto-medium text-lg text-[#EEC583]">{project.courseId} - {project.courseName}</p>
                </div>
              </div>

              <div>
                <h2 className="font-avenir-heavy text-2xl text-black mb-4">Description</h2>
                <p className="font-inter-regular text-base text-black leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="font-avenir-heavy text-2xl text-black mb-4">Procedure</h2>
                <ol className="space-y-3">
                  {project.procedure.map((step, index) => (
                    <li key={index} className="font-inter-regular text-base text-black leading-relaxed">
                      <span className="font-semibold">{index + 1}.</span> {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="font-avenir-heavy text-2xl text-black mb-4">References</h2>
                <ul className="space-y-2">
                  {project.references.map((reference, index) => (
                    <li key={index} className="font-inter-regular text-sm text-black leading-relaxed">
                      {reference}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link href="/projects">
                  <button className="btn-hover bg-[#B1AC69] text-black font-avenir-heavy text-lg px-6 py-3 rounded-lg flex items-center space-x-2 shadow-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Back to Projects</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
