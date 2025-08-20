'use client'

import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

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
    { id: 'materials', name: 'Materials Science' }
  ]

  // Default projects as fallback
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
      references: []
    },
    {
      id: '2',
      title: "Bridge Design",
      category: "structural",
      courseId: "ENGR 210",
      courseName: "Engineering Statics",
      description: "A practical application of engineering statics, this project focuses on the design, construction, and rigorous testing of a scaled bridge, showcasing structural integrity principles.",
      images: ["/images/project2.jpg"],
      procedure: [],
      references: []
    },
    {
      id: '3',
      title: "Water Quality Monitoring",
      category: "water",
      courseId: "CEE 318",
      courseName: "Environmental Water Quality",
      description: "Through hands-on field measurements and laboratory analysis, this project assesses the overall health and quality of a natural water body.",
      images: ["/images/project3.jpg"],
      procedure: [],
      references: []
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
                    <div className="relative h-48 w-full">
                      <Image src={project.images[0]} alt={project.title} fill className="object-cover" />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-avenir-heavy text-lg text-black leading-tight cursor-pointer">{project.title}</h3>
                        <span className="font-roboto-medium text-sm text-[#FF5F5F]">{project.courseId}</span>
                      </div>
                      <p className="font-roboto-medium text-sm text-[#EEC583] leading-tight">{project.courseName}</p>
                      <p className="font-inter-regular text-xs text-[#606060] leading-relaxed">{project.description}</p>
                      <div className="flex justify-end pt-2">
                        <button className="btn-hover bg-[#B1AC69] text-black font-inter-semibold text-xs px-4 py-2 rounded-lg flex items-center space-x-2 shadow-md">
                          <span>Learn More</span>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
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