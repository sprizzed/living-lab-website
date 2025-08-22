'use client'

import { useState, useEffect } from 'react'
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

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([])

  // Default projects as fallback - same as projects page
  const defaultProjects = [
    {
      id: '1',
      title: "Constructed Wetland Model",
      category: "environmental",
      courseId: "CEE 400",
      courseName: "Capstone Design: Lab-scale Model for Wetlands",
      description: "This capstone project involves the design and construction of a lab-scale wetland model, demonstrating innovative approaches to water treatment and sustainable environmental engineering.",
      images: ["/images/project1.jpg"],
      procedure: [],
      references: [],
      selectedPreviewImage: 0, // Added for new logic
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
    }
  ]

  // Load projects from localStorage on component mount, fallback to default projects
  useEffect(() => {
    const savedProjects = localStorage.getItem('projects')
    if (savedProjects) {
      const parsedProjects = JSON.parse(savedProjects)
      if (parsedProjects.length > 0) {
        // Take the first 3 projects
        setProjects(parsedProjects.slice(0, 3))
      } else {
        setProjects(defaultProjects)
      }
    } else {
      setProjects(defaultProjects)
    }
  }, [])

  // Get the first 3 projects to display
  const featuredProjects = projects.slice(0, 3)

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-avenir-heavy text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-6">Featured Projects</h2>
          <p className="font-avenir-light text-lg md:text-xl text-black max-w-4xl leading-relaxed">Discover some of our most impactful and innovative projects.</p>
        </div>
                <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[calc(100%+46px)] h-[calc(100%+46px)] -top-8 -left-8 bg-gradient-radial from-[rgba(128,128,128,0.22)] via-[rgba(128,128,128,0.15)] to-transparent rounded-full blur-xl transition-all duration-300 group-hover:from-[rgba(72,155,172,0.39)] group-hover:via-[rgba(72,155,172,0.26)]"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 group">
            {featuredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="cursor-pointer">
                <div className="featured-card-hover bg-white rounded-2xl overflow-hidden shadow-xl relative">
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
                  <div className="p-5 space-y-3 relative z-10">
                    <div className="flex justify-between items-start">
                      <h3 className="font-avenir-heavy text-lg text-black leading-tight">{project.title}</h3>
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
        </div>
      </div>
    </section>
  )
}