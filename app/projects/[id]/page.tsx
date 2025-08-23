'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

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
  uploadedFiles: File[]
  selectedPreviewImage: number
  imageCrops: ImageCrop[]
}

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Default projects - now empty for client control
  const defaultProjects: Record<string, Project> = {}

  const [project, setProject] = useState<Project | undefined>(defaultProjects[projectId])

  // Load projects from localStorage on component mount
  useEffect(() => {
    try {
      const savedProjects = localStorage.getItem('projects')
      if (savedProjects) {
        const parsedProjects: Project[] = JSON.parse(savedProjects)
        const foundProject = parsedProjects.find((p: Project) => p.id === projectId)
        if (foundProject) {
          setProject(foundProject)
        } else {
          // Fallback to default projects if not found in localStorage
          const defaultProject = defaultProjects[projectId]
          if (defaultProject) {
            setProject(defaultProject)
          }
        }
      } else {
        // Fallback to default projects if no localStorage data
        const defaultProject = defaultProjects[projectId]
        if (defaultProject) {
          setProject(defaultProject)
        }
      }
    } catch (error) {
      console.warn('Error loading projects from localStorage:', error)
      // Fallback to default projects on error
      const defaultProject = defaultProjects[projectId]
      if (defaultProject) {
        setProject(defaultProject)
      }
    }
  }, [projectId])

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
          {/* Images Section - Top Half */}
          <div className="mb-12">
            <div className="space-y-6">
              <div className="relative h-[32rem] w-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-full">
                  {project.images && project.images.length > 0 ? (
                    project.images.map((image, index) => (
                      <Image 
                        key={index}
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`} 
                        fill 
                        className={`absolute inset-0 object-cover transition-transform duration-700 ease-in-out ${
                          index === currentImageIndex 
                            ? 'translate-x-0' 
                            : index < currentImageIndex 
                              ? '-translate-x-full' 
                              : 'translate-x-full'
                        }`}
                        style={{
                          objectPosition: project.imageCrops && project.imageCrops[index] 
                            ? `${project.imageCrops[index].x}% ${project.imageCrops[index].y}%`
                            : 'center center'
                        }}
                        priority={index === currentImageIndex}
                      />
                    ))
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500 text-lg">No images available</p>
                    </div>
                  )}
                </div>
                {project.images && project.images.length > 1 && (
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
              {project.images && project.images.length > 1 && (
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
          </div>

          {/* Project Details Section - Bottom Half */}
          <div className="max-w-4xl mx-auto space-y-8">
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
              <p className="font-inter-regular text-base text-black leading-relaxed">
                {project.procedure.join(' ')}
              </p>
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
      </section>

      <Footer />
    </main>
  )
}
