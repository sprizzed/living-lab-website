'use client'

import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

interface ImageCrop {
  x: number
  y: number
  width: number
  height: number
}

interface Project {
  id: string
  title: string
  category: string
  courseId: string
  courseName: string
  description: string
  images: string[]
  procedure: string[]
  references: string[]
  selectedPreviewImage?: number
  imageCrops?: ImageCrop[]
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [projects, setProjects] = useState<Project[]>([])

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'environmental', name: 'Environmental Engineering' },
    { id: 'structural', name: 'Structural Engineering' },
    { id: 'water', name: 'Water Resources' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'materials', name: 'Materials Science' },
    { id: 'transportation', name: 'Transportation Engineering' },
    { id: 'geotechnical', name: 'Geotechnical Engineering' },
    { id: 'electrical', name: 'Electrical Engineering' }
  ]

  // Default projects as fallback - same as projects page
  const defaultProjects = [
    {
      id: '1',
      title: "Constructed Wetland Model",
      category: "Environmental Engineering",
      courseId: "CEE 400",
      courseName: "Capstone Design: Lab-scale Model for Wetlands",
      description: "This capstone project involves the design and construction of a lab-scale wetland model, demonstrating innovative approaches to water treatment and sustainable environmental engineering.",
      images: ["/images/project1.jpg"],
      procedure: [],
      references: [],
      selectedPreviewImage: 0,
      imageCrops: [{ x: 50, y: 50, width: 100, height: 100 }]
    },
    {
      id: '2',
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
      ],
      selectedPreviewImage: 0,
      imageCrops: [{ x: 50, y: 50, width: 100, height: 100 }]
    },
    {
      id: '3',
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
      ],
      selectedPreviewImage: 0,
      imageCrops: [{ x: 50, y: 50, width: 100, height: 100 }]
    },
    {
      id: '4',
      title: "Construction Materials",
      category: "Materials Science",
      courseId: "CEE 350",
      courseName: "Construction Materials",
      description: "Study of properties and applications of construction materials in engineering projects.",
      images: ["/images/project1.jpg", "/images/project2.jpg", "/images/project3.jpg"],
      procedure: [
        "Material Testing: Laboratory analysis of material properties including strength, durability, and workability.",
        "Quality Control: Implementation of testing protocols and standards for construction materials.",
        "Performance Evaluation: Assessment of material behavior under various environmental conditions.",
        "Documentation: Comprehensive recording of test results and material specifications."
      ],
      references: [
        "Mindess, S., Young, J.F., & Darwin, D. (2003). Concrete (2nd ed.). Pearson.",
        "ASTM International. (2018). Standard Test Methods for Compressive Strength of Cylindrical Concrete Specimens. ASTM C39.",
        "ACI Committee 318. (2019). Building Code Requirements for Structural Concrete. American Concrete Institute."
      ],
      selectedPreviewImage: 0,
      imageCrops: [{ x: 50, y: 50, width: 100, height: 100 }]
    },
    {
      id: '5',
      title: "Renewable Energy Systems",
      category: "Sustainability",
      courseId: "ENGR 320",
      courseName: "Renewable Energy Systems",
      description: "Design and implementation of sustainable energy solutions.",
      images: ["/images/project2.jpg", "/images/project1.jpg", "/images/project3.jpg"],
      procedure: [
        "System Design: Conceptual design of renewable energy systems including solar, wind, and hydroelectric components.",
        "Performance Analysis: Evaluation of system efficiency and energy output under various conditions.",
        "Integration Planning: Development of grid connection and energy storage solutions.",
        "Economic Assessment: Cost-benefit analysis and feasibility studies for renewable energy projects."
      ],
      references: [
        "Twidell, J., & Weir, T. (2015). Renewable Energy Resources (3rd ed.). Routledge.",
        "IEA. (2020). Renewables Information: Overview. International Energy Agency.",
        "NREL. (2019). Renewable Energy Data Book. National Renewable Energy Laboratory."
      ],
      selectedPreviewImage: 0,
      imageCrops: [{ x: 50, y: 50, width: 100, height: 100 }]
    },
    {
      id: '6',
      title: "Water Treatment Design",
      category: "Water Resources",
      courseId: "CEE 415",
      courseName: "Water Treatment Design",
      description: "Advanced water treatment system design and optimization.",
      images: ["/images/project3.jpg", "/images/project1.jpg", "/images/project2.jpg"],
      procedure: [
        "Process Design: Development of water treatment processes including coagulation, sedimentation, filtration, and disinfection.",
        "System Optimization: Optimization of treatment parameters for maximum efficiency and water quality.",
        "Pilot Testing: Implementation of pilot-scale testing to validate design assumptions.",
        "Performance Monitoring: Continuous monitoring and adjustment of treatment processes."
      ],
      references: [
        "MWH. (2012). Water Treatment: Principles and Design (3rd ed.). John Wiley & Sons.",
        "AWWA. (2017). Water Quality & Treatment: A Handbook on Drinking Water (7th ed.). American Water Works Association.",
        "EPA. (2018). Drinking Water Treatment Technologies for Household Use. EPA/600/R-18/179."
      ],
      selectedPreviewImage: 0,
      imageCrops: [{ x: 50, y: 50, width: 100, height: 100 }]
    }
  ]

  // Load projects from localStorage on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('projects')
    if (savedProjects) {
      const parsedProjects = JSON.parse(savedProjects)
      if (parsedProjects.length > 0) {
        setProjects(parsedProjects)
      } else {
        setProjects(defaultProjects)
      }
    } else {
      setProjects(defaultProjects)
    }
  }, [])

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="hero-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="font-avenir-heavy text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-8 text-center">Project Repository</h1>
          <p className="font-avenir-light text-lg md:text-xl text-black max-w-4xl mx-auto text-center leading-relaxed">
            Explore our comprehensive collection of student-led engineering projects, from concept to implementation.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            <div className="flex-1 max-w-3xl">
              <label htmlFor="search" className="block font-avenir-heavy text-lg text-black mb-2 text-center">Search Projects</label>
              <input
                type="text"
                id="search"
                placeholder="Search by project title, description, or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#489BAC] focus:border-transparent font-inter-regular text-black"
              />
            </div>
            
            <div className="lg:w-64">
              <label htmlFor="category" className="block font-avenir-heavy text-lg text-black mb-2 text-center">All Categories</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#489BAC] focus:border-transparent font-inter-regular text-black"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="featured-projects-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="font-avenir-heavy text-2xl text-black mb-4">No projects found</h3>
              <p className="font-inter-regular text-base text-black">Try adjusting your search criteria or browse all categories.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`} className="cursor-pointer">
                  <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-xl">
                    <div className="relative h-40 w-full rounded-lg overflow-hidden">
                      <Image
                        src={project.selectedPreviewImage !== undefined && project.images && project.images[project.selectedPreviewImage] 
                          ? project.images[project.selectedPreviewImage] 
                          : project.images[0] || '/images/project1.jpg'}
                        alt={project.title}
                        fill
                        className="object-cover"
                        style={{
                          objectPosition: project.imageCrops && project.imageCrops[project.selectedPreviewImage || 0]
                            ? `${project.imageCrops[project.selectedPreviewImage || 0].x}% ${project.imageCrops[project.selectedPreviewImage || 0].y}%`
                            : 'center center'
                        }}
                      />
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-avenir-heavy text-lg text-black leading-tight cursor-pointer">{project.title}</h3>
                        <span className="font-roboto-medium text-sm text-[#FF5F5F]">{project.courseId}</span>
                      </div>
                      <p className="font-roboto-medium text-sm text-[#EEC583] leading-tight">{project.courseName}</p>
                      <p className="font-inter-regular text-xs text-[#606060] leading-relaxed line-clamp-5">{project.description}</p>
                      <div className="flex justify-end pt-1">
                        <button className="btn-hover bg-[#B1AC69] text-black font-inter-semibold text-xs px-4 py-2 rounded-lg flex items-center space-x-2 shadow-md">
                          <span>Learn More</span>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
} 