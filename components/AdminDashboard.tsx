'use client'

import { useState, useEffect } from 'react'

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

// Default projects that should always be available
const defaultProjects: Project[] = [
  {
    id: '1',
    title: "Constructed Wetland Model",
    category: "Environmental Engineering",
    courseId: "CEE 400",
    courseName: "Capstone Design: Lab-scale Model for Wetlands",
    description: "This capstone project involves the design and construction of a lab-scale wetland model, demonstrating innovative approaches to water treatment and sustainable environmental engineering.",
    images: ["/images/project1.jpg"],
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
    ],
    uploadedFiles: [],
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
    uploadedFiles: [],
    selectedPreviewImage: 0,
    imageCrops: [{ x: 50, y: 50, width: 100, height: 100 }, { x: 50, y: 50, width: 100, height: 100 }, { x: 50, y: 50, width: 100, height: 100 }]
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
    uploadedFiles: [],
    selectedPreviewImage: 0,
    imageCrops: [{ x: 50, y: 50, width: 100, height: 100 }, { x: 50, y: 50, width: 100, height: 100 }, { x: 50, y: 50, width: 100, height: 100 }]
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
    uploadedFiles: [],
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
    uploadedFiles: [],
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
    uploadedFiles: [],
    selectedPreviewImage: 0,
    imageCrops: [{ x: 50, y: 50, width: 100, height: 100 }]
  }
]

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeSection, setActiveSection] = useState<'projects' | 'categories' | 'courses'>('projects')
  const [projects, setProjects] = useState<Project[]>([])
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [isAddingProject, setIsAddingProject] = useState(false)
  const [isManagingCategories, setIsManagingCategories] = useState(false)
  const [isManagingCourses, setIsManagingCourses] = useState(false)
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([
    { id: 'environmental', name: 'Environmental Engineering' },
    { id: 'structural', name: 'Structural Engineering' },
    { id: 'water', name: 'Water Resources' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'materials', name: 'Materials Science' },
    { id: 'transportation', name: 'Transportation Engineering' },
    { id: 'geotechnical', name: 'Geotechnical Engineering' },
    { id: 'electrical', name: 'Electrical Engineering' }
  ])
  const [courses, setCourses] = useState([
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
  ])
  const [newCategory, setNewCategory] = useState({ id: '', name: '' })
  const [newCourse, setNewCourse] = useState({
    title: '',
    code: '',
    description: '',
    credits: 3,
    image: '/images/project1.jpg'
  })
  const [formData, setFormData] = useState<{
    title: string
    category: string
    courseId: string
    courseName: string
    description: string
    procedure: string[]
    references: string[]
    selectedPreviewImage: number
    imageCrops: { x: number; y: number; width: number; height: number }[]
  }>({
    title: '',
    category: '',
    courseId: '',
    courseName: '',
    description: '',
    procedure: [''],
    references: [''],
    selectedPreviewImage: 0,
    imageCrops: []
  })
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [existingImages, setExistingImages] = useState<string[]>([])

  // Load data from localStorage on component mount
  useEffect(() => {
    try {
      // Load projects - always start with default projects and merge with localStorage
      let combinedProjects = [...defaultProjects]
      
      const savedProjects = localStorage.getItem('projects')
      if (savedProjects) {
        const parsedProjects = JSON.parse(savedProjects)
        if (parsedProjects && Array.isArray(parsedProjects)) {
          // Create a map for quick lookup of default projects
          const defaultProjectsMap = new Map(defaultProjects.map(p => [p.id, p]))
          
          // Merge parsedProjects with defaultProjects
          // Prioritize parsedProjects if IDs conflict, and add new ones
          parsedProjects.forEach(p => {
            defaultProjectsMap.set(p.id, p)
          })
          
          combinedProjects = Array.from(defaultProjectsMap.values())
        }
      }
      
      setProjects(combinedProjects)

      // Load categories
      const savedCategories = localStorage.getItem('categories')
      if (savedCategories) {
        const parsedCategories = JSON.parse(savedCategories)
        if (parsedCategories && Array.isArray(parsedCategories)) {
          setCategories(parsedCategories)
        }
      }

      // Load courses
      const savedCourses = localStorage.getItem('courses')
      if (savedCourses) {
        const parsedCourses = JSON.parse(savedCourses)
        if (parsedCourses && Array.isArray(parsedCourses)) {
          setCourses(parsedCourses)
        }
      }
    } catch (error) {
      console.warn('Error loading data from localStorage:', error)
      // Fallback to default projects on error
      setProjects(defaultProjects)
    }
  }, [])

  // Save projects to localStorage
  const saveProjects = (newProjects: Project[]) => {
    try {
      localStorage.setItem('projects', JSON.stringify(newProjects))
      setProjects(newProjects)
    } catch (error) {
      console.error('Error saving projects to localStorage:', error)
      // Still update state even if localStorage fails
      setProjects(newProjects)
    }
  }

  // Save categories to localStorage
  const saveCategories = (newCategories: { id: string; name: string }[]) => {
    try {
      localStorage.setItem('categories', JSON.stringify(newCategories))
      setCategories(newCategories)
    } catch (error) {
      console.error('Error saving categories to localStorage:', error)
      setCategories(newCategories)
    }
  }

  // Save courses to localStorage
  const saveCourses = (newCourses: typeof courses) => {
    try {
      localStorage.setItem('courses', JSON.stringify(newCourses))
      setCourses(newCourses)
    } catch (error) {
      console.error('Error saving courses to localStorage:', error)
      setCourses(newCourses)
    }
  }

  // Load courses from localStorage on component mount
  useEffect(() => {
    const savedCourses = localStorage.getItem('courses')
    if (savedCourses) {
      const parsedCourses = JSON.parse(savedCourses)
      if (parsedCourses.length > 0) {
        setCourses(parsedCourses)
      }
    }
  }, [])

  // File upload handling
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setUploadedFiles(prev => [...prev, ...newFiles])
      
      // Initialize imageCrops for new image files
      const newImageFiles = newFiles.filter(file => file.type.startsWith('image/'))
      if (newImageFiles.length > 0) {
        const newCrops = newImageFiles.map(() => ({ x: 0, y: 0, width: 100, height: 100 }))
        
        setFormData(prev => ({
          ...prev,
          imageCrops: [...(prev.imageCrops || []), ...newCrops]
        }))
      }
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
    
    // Also remove the corresponding imageCrop data
    if (formData.imageCrops && formData.imageCrops[index]) {
      const newCrops = formData.imageCrops.filter((_, i) => i !== index)
      setFormData(prev => ({
        ...prev,
        imageCrops: newCrops
      }))
    }
  }

  // Image cropping and preview selection functions
  const handlePreviewImageSelect = (index: number) => {
    setFormData(prev => ({
      ...prev,
      selectedPreviewImage: index
    }))
  }

  const handleImageCrop = (index: number, crop: { x: number; y: number; width: number; height: number }) => {
    const newCrops = [...(formData.imageCrops || [])]
    newCrops[index] = crop
    setFormData(prev => ({
      ...prev,
      imageCrops: newCrops
    }))
  }

  const getImagePreview = (file: File) => {
    return URL.createObjectURL(file)
  }

  // Existing image management functions
  const removeExistingImage = (index: number) => {
    const newExistingImages = [...existingImages]
    newExistingImages.splice(index, 1)
    setExistingImages(newExistingImages)
    
    // Update imageCrops to match
    const newImageCrops = [...(formData.imageCrops || [])]
    newImageCrops.splice(index, 1)
    setFormData(prev => ({ ...prev, imageCrops: newImageCrops }))
    
    // Adjust selectedPreviewImage if necessary
    if (formData.selectedPreviewImage >= newExistingImages.length) {
      setFormData(prev => ({ ...prev, selectedPreviewImage: Math.max(0, newExistingImages.length - 1) }))
    }
  }

  const moveExistingImageUp = (index: number) => {
    if (index > 0) {
      const newExistingImages = [...existingImages]
      const temp = newExistingImages[index]
      newExistingImages[index] = newExistingImages[index - 1]
      newExistingImages[index - 1] = temp
      setExistingImages(newExistingImages)
      
      // Update imageCrops to match
      const newImageCrops = [...(formData.imageCrops || [])]
      const tempCrop = newImageCrops[index]
      newImageCrops[index] = newImageCrops[index - 1]
      newImageCrops[index - 1] = tempCrop
      setFormData(prev => ({ ...prev, imageCrops: newImageCrops }))
    }
  }

  const moveExistingImageDown = (index: number) => {
    if (index < existingImages.length - 1) {
      const newExistingImages = [...existingImages]
      const temp = newExistingImages[index]
      newExistingImages[index] = newExistingImages[index + 1]
      newExistingImages[index + 1] = temp
      setExistingImages(newExistingImages)
      
      // Update imageCrops to match
      const newImageCrops = [...(formData.imageCrops || [])]
      const tempCrop = newImageCrops[index]
      newImageCrops[index] = newImageCrops[index + 1]
      newImageCrops[index + 1] = tempCrop
      setFormData(prev => ({ ...prev, imageCrops: newImageCrops }))
    }
  }

  // Category management functions
  const handleAddCategory = () => {
    if (newCategory.id && newCategory.name) {
      const categoryExists = categories.find(c => c.id === newCategory.id)
      if (categoryExists) {
        alert('Category ID already exists!')
        return
      }
      const updatedCategories = [...categories, { ...newCategory }]
      saveCategories(updatedCategories)
      setNewCategory({ id: '', name: '' })
    }
  }

  const handleDeleteCategory = (categoryId: string) => {
    if (confirm('Are you sure you want to delete this category?')) {
      const updatedCategories = categories.filter(c => c.id !== categoryId)
      saveCategories(updatedCategories)
    }
  }

  const handleAddCourse = () => {
    if (newCourse.title && newCourse.code) {
      const courseExists = courses.find(c => c.code === newCourse.code)
      if (courseExists) {
        alert('Course code already exists!')
        return
      }
      const updatedCourses = [...courses, { ...newCourse, id: Date.now() }]
      saveCourses(updatedCourses)
      setNewCourse({
        title: '',
        code: '',
        description: '',
        credits: 3,
        image: '/images/project1.jpg'
      })
    }
  }

  const handleDeleteCourse = (courseId: number) => {
    if (confirm('Are you sure you want to delete this course?')) {
      const updatedCourses = courses.filter(c => c.id !== courseId)
      saveCourses(updatedCourses)
    }
  }

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }



  const handleReferenceChange = (index: number, value: string) => {
    const newReferences = [...formData.references]
    newReferences[index] = value
    setFormData(prev => ({
      ...prev,
      references: newReferences
    }))
  }

  const addReference = () => {
    setFormData(prev => ({
      ...prev,
      references: [...prev.references, '']
    }))
  }

  const removeReference = (index: number) => {
    setFormData(prev => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Convert uploaded files to data URLs for storage
    const processFiles = async () => {
      const filePromises = uploadedFiles.map(file => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onload = (e) => resolve(e.target?.result as string)
          reader.readAsDataURL(file)
        })
      })
      
      const newImageUrls = await Promise.all(filePromises)
      
      // Combine existing images with new uploads
      const allImages = [...existingImages, ...newImageUrls]
      
      const newProject: Project = {
        id: editingProject?.id || Date.now().toString(),
        ...formData,
        images: allImages,
        uploadedFiles: uploadedFiles,
        selectedPreviewImage: formData.selectedPreviewImage,
        imageCrops: formData.imageCrops.length > 0 ? formData.imageCrops : Array(allImages.length).fill({ x: 0, y: 0, width: 100, height: 100 })
      }

      if (editingProject) {
        saveProjects(projects.map(p => p.id === editingProject.id ? newProject : p))
        setEditingProject(null)
      } else {
        // Ensure we don't lose existing projects when adding new ones
        const updatedProjects = [...projects, newProject]
        saveProjects(updatedProjects)
        setIsAddingProject(false)
      }

      // Reset form
      setFormData({
        title: '',
        category: '',
        courseId: '',
        courseName: '',
        description: '',
        procedure: [''],
        references: [''],
        selectedPreviewImage: 0,
        imageCrops: []
      })
      setUploadedFiles([])
      setExistingImages([])
    }
    
    processFiles()
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      category: project.category,
      courseId: project.courseId,
      courseName: project.courseName,
      description: project.description,
      procedure: project.procedure,
      references: project.references,
      selectedPreviewImage: project.selectedPreviewImage || 0,
      imageCrops: project.imageCrops || []
    })
    // Load existing images for editing
    setExistingImages(project.images || [])
    // Initialize imageCrops for existing images if they don't exist
    if (project.images && project.images.length > 0 && (!project.imageCrops || project.imageCrops.length === 0)) {
      const defaultCrops = project.images.map(() => ({ x: 0, y: 0, width: 100, height: 100 }))
      setFormData(prev => ({
        ...prev,
        imageCrops: defaultCrops
      }))
    }
    setIsAddingProject(true)
  }

  const handleDelete = (projectId: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      saveProjects(projects.filter(p => p.id !== projectId))
    }
  }

  const handleCancel = () => {
    setEditingProject(null)
    setIsAddingProject(false)
    setFormData({
      title: '',
      category: '',
      courseId: '',
      courseName: '',
      description: '',
      procedure: [''],
      references: [''],
      selectedPreviewImage: 0,
      imageCrops: []
    })
    setUploadedFiles([])
    setExistingImages([])
  }

  // Project reordering functions
  const moveProjectUp = (index: number) => {
    if (index > 0) {
      const newProjects = [...projects]
      const temp = newProjects[index]
      newProjects[index] = newProjects[index - 1]
      newProjects[index - 1] = temp
      saveProjects(newProjects)
    }
  }

  const moveProjectDown = (index: number) => {
    if (index < projects.length - 1) {
      const newProjects = [...projects]
      const temp = newProjects[index]
      newProjects[index] = newProjects[index + 1]
      newProjects[index + 1] = temp
      saveProjects(newProjects)
    }
  }

  const moveProjectToTop = (index: number) => {
    if (index > 0) {
      const newProjects = [...projects]
      const project = newProjects.splice(index, 1)[0]
      newProjects.unshift(project)
      saveProjects(newProjects)
    }
  }

  const moveProjectToBottom = (index: number) => {
    if (index < projects.length - 1) {
      const newProjects = [...projects]
      const project = newProjects.splice(index, 1)[0]
      newProjects.push(project)
      saveProjects(newProjects)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-avenir-heavy text-gray-900">Project Management Dashboard</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsAddingProject(true)}
              className="bg-[#489BAC] text-white px-4 py-2 rounded-lg hover:bg-[#3a7a8a] transition-colors"
            >
              Add New Project
            </button>
            <button
              onClick={() => setIsManagingCategories(!isManagingCategories)}
              className="bg-[#489BAC] text-white px-4 py-2 rounded-lg hover:bg-[#3a7a8a] transition-colors"
            >
              {isManagingCategories ? 'Hide Categories' : 'Manage Categories'}
            </button>
            <button
              onClick={() => setIsManagingCourses(!isManagingCourses)}
              className="bg-[#EEC583] text-black px-4 py-2 rounded-lg hover:bg-[#d4b06f] transition-colors"
            >
              {isManagingCourses ? 'Hide Courses' : 'Manage Courses'}
            </button>
            <button
              onClick={onLogout}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Category Management Section */}
        {isManagingCategories && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-avenir-heavy text-gray-900 mb-6">Category Management</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Category</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Category ID (e.g., 'robotics')"
                    value={newCategory.id}
                    onChange={(e) => setNewCategory(prev => ({ ...prev, id: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                  />
                  <input
                    type="text"
                    placeholder="Category Name (e.g., 'Robotics Engineering')"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                  />
                  <button
                    onClick={handleAddCategory}
                    className="px-4 py-2 bg-[#489BAC] text-white rounded-md hover:bg-[#3a7a8a] transition-colors"
                  >
                    Add Category
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Current Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-medium">{category.name}</span>
                      <button
                        onClick={() => handleDeleteCategory(category.id)}
                        className="px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Course Management Section */}
        {isManagingCourses && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-avenir-heavy text-gray-900 mb-6">Course Management</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Course</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Course Title (e.g., 'Introduction to Civil Engineering')"
                    value={newCourse.title}
                    onChange={(e) => setNewCourse(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                  />
                  <input
                    type="text"
                    placeholder="Course Code (e.g., 'CEE 101')"
                    value={newCourse.code}
                    onChange={(e) => setNewCourse(prev => ({ ...prev, code: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                  />
                  <textarea
                    placeholder="Course Description"
                    value={newCourse.description}
                    onChange={(e) => setNewCourse(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                  />
                  <input
                    type="number"
                    placeholder="Credits (e.g., 3)"
                    value={newCourse.credits}
                    onChange={(e) => setNewCourse(prev => ({ ...prev, credits: parseInt(e.target.value, 10) || 3 }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                  />
                  <button
                    onClick={handleAddCourse}
                    className="px-4 py-2 bg-[#489BAC] text-white rounded-md hover:bg-[#3a7a8a] transition-colors"
                  >
                    Add Course
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Current Courses</h3>
                <div className="space-y-2">
                  {courses.map((course) => (
                    <div key={course.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">{course.title}</p>
                        <p className="text-sm text-gray-600">{course.code}</p>
                        <p className="text-sm text-gray-500">{course.description}</p>
                        <p className="text-sm text-gray-600">Credits: {course.credits}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteCourse(course.id)}
                        className="px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add/Edit Project Form */}
        {isAddingProject && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-avenir-heavy text-gray-900 mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course ID</label>
                  <input
                    type="text"
                    value={formData.courseId}
                    onChange={(e) => handleInputChange('courseId', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course Name</label>
                  <input
                    type="text"
                    value={formData.courseName}
                    onChange={(e) => handleInputChange('courseName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Images & Videos</label>
                <div className="space-y-4">
                  {/* New File Upload */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="file"
                      accept="image/*,video/*"
                      multiple
                      onChange={handleFileUpload}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                    />
                    <button
                      type="button"
                      className="px-4 py-2 bg-[#EEC583] text-black rounded-md hover:bg-[#d4b06f] transition-colors"
                    >
                      Upload
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Supported formats: JPG, PNG, GIF, MP4, MOV. Multiple files can be selected.
                  </p>
                  
                  {/* Existing Images Management */}
                  {existingImages.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Existing Images:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {existingImages.map((image, index) => (
                          <div key={`existing-${index}`} className="relative group">
                            <div className="relative h-24 w-full rounded-lg overflow-hidden border-2 border-gray-300">
                              <img
                                src={image}
                                alt={`Existing Image ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              {/* Overlay with controls */}
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-1">
                                  <button
                                    type="button"
                                    onClick={() => moveExistingImageUp(index)}
                                    disabled={index === 0}
                                    className="p-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                    title="Move Up"
                                  >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => moveExistingImageDown(index)}
                                    disabled={index === existingImages.length - 1}
                                    className="p-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                    title="Move Down"
                                  >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => removeExistingImage(index)}
                                    className="p-1 bg-red-600 text-white rounded hover:bg-red-700"
                                    title="Remove"
                                  >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* Image number indicator */}
                            <div className="absolute -top-2 -left-2 bg-gray-800 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                              {index + 1}
                            </div>
                            {/* Preview selection indicator */}
                            <button
                              type="button"
                              onClick={() => handlePreviewImageSelect(index)}
                              className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all ${
                                formData.selectedPreviewImage === index
                                  ? 'bg-blue-500 text-white ring-2 ring-blue-200'
                                  : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
                              }`}
                              title={formData.selectedPreviewImage === index ? 'Selected as preview' : 'Select as preview'}
                            >
                              {formData.selectedPreviewImage === index ? '✓' : 'P'}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* New Uploads */}
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">New Uploads:</h4>
                      <ul className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <li key={`new-${index}`} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                            <span className="text-sm text-gray-700">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Combined Image Preview Selection */}
                  {(existingImages.length > 0 || uploadedFiles.length > 0) && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Select Preview Image for Project Card:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {/* Existing images */}
                        {existingImages.map((image, index) => (
                          <div key={`preview-existing-${index}`} className="relative">
                            <button
                              type="button"
                              onClick={() => handlePreviewImageSelect(index)}
                              className={`w-full h-24 border-2 rounded-lg overflow-hidden transition-all ${
                                formData.selectedPreviewImage === index
                                  ? 'border-blue-500 ring-2 ring-blue-200'
                                  : 'border-gray-300 hover:border-gray-400'
                              }`}
                            >
                              <img
                                src={image}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                            {formData.selectedPreviewImage === index && (
                              <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                                ✓
                              </div>
                            )}
                          </div>
                        ))}
                        
                        {/* New uploads */}
                        {uploadedFiles.map((file, index) => {
                          if (file.type.startsWith('image/')) {
                            const previewIndex = existingImages.length + index
                            return (
                              <div key={`preview-new-${index}`} className="relative">
                                <button
                                  type="button"
                                  onClick={() => handlePreviewImageSelect(previewIndex)}
                                  className={`w-full h-24 border-2 rounded-lg overflow-hidden transition-all ${
                                    formData.selectedPreviewImage === previewIndex
                                      ? 'border-blue-500 ring-2 ring-blue-200'
                                      : 'border-gray-300 hover:border-gray-400'
                                  }`}
                                >
                                  <img
                                    src={getImagePreview(file)}
                                    alt={`Preview ${previewIndex + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </button>
                                {formData.selectedPreviewImage === previewIndex && (
                                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                                    ✓
                                  </div>
                                )}
                              </div>
                            )
                          }
                          return null
                        })}
                      </div>
                    </div>
                  )}
                  
                  {/* Image Cropping Interface */}
                  {(existingImages.length > 0 || uploadedFiles.length > 0) && (
                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Image Cropping & Preview:</h4>
                      <p className="text-xs text-gray-500 mb-4">
                        Adjust how images are displayed in project cards. The preview shows the final result.
                      </p>
                      
                      {/* Existing Images Cropping */}
                      {existingImages.map((image, index) => (
                        <div key={`crop-existing-${index}`} className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-medium text-gray-700">Existing Image {index + 1}</span>
                            <div className="flex space-x-2">
                              <button
                                type="button"
                                onClick={() => handleImageCrop(index, { x: 0, y: 0, width: 100, height: 100 })}
                                className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                              >
                                Reset
                              </button>
                              <button
                                type="button"
                                onClick={() => handleImageCrop(index, { x: 25, y: 25, width: 50, height: 50 })}
                                className="text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                              >
                                Center
                              </button>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Cropping Interface */}
                            <div>
                              <p className="text-xs text-gray-600 mb-2">Drag to adjust crop area:</p>
                              <div className="relative w-full h-48 bg-gray-200 rounded overflow-hidden border-2 border-gray-300">
                                <img
                                  src={image}
                                  alt={`Crop ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                                <div
                                  className="absolute border-2 border-blue-500 bg-blue-500 bg-opacity-20 cursor-move"
                                  style={{
                                    left: `${(formData.imageCrops && formData.imageCrops[index] ? formData.imageCrops[index].x : 0)}%`,
                                    top: `${(formData.imageCrops && formData.imageCrops[index] ? formData.imageCrops[index].y : 0)}%`,
                                    width: `${(formData.imageCrops && formData.imageCrops[index] ? formData.imageCrops[index].width : 100)}%`,
                                    height: `${(formData.imageCrops && formData.imageCrops[index] ? formData.imageCrops[index].height : 100)}%`
                                  }}
                                  onMouseDown={(e) => {
                                    const rect = e.currentTarget.parentElement?.getBoundingClientRect()
                                    if (rect) {
                                      const x = ((e.clientX - rect.left) / rect.width) * 100
                                      const y = ((e.clientY - rect.top) / rect.height) * 100
                                      handleImageCrop(index, {
                                        x: Math.max(0, Math.min(x, 100)),
                                        y: Math.max(0, Math.min(y, 100)),
                                        width: Math.max(10, Math.min(100 - x, 100)),
                                        height: Math.max(10, Math.min(100 - y, 100))
                                      })
                                    }
                                  }}
                                />
                              </div>
                              
                              {/* Crop Controls */}
                              <div className="mt-3 space-y-2">
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs text-gray-600">X:</span>
                                  <input
                                    type="range"
                                    min="0"
                                    max="90"
                                    value={formData.imageCrops && formData.imageCrops[index] ? formData.imageCrops[index].x : 0}
                                    onChange={(e) => {
                                      const newX = parseInt(e.target.value)
                                      const maxWidth = 100 - newX
                                      const currentCrop = formData.imageCrops && formData.imageCrops[index] ? formData.imageCrops[index] : { x: 0, y: 0, width: 100, height: 100 }
                                      handleImageCrop(index, {
                                        ...currentCrop,
                                        x: newX,
                                        width: Math.min(currentCrop.width, maxWidth)
                                      })
                                    }}
                                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                  />
                                  <span className="text-xs text-gray-600 w-8">
                                    {formData.imageCrops && formData.imageCrops[index] ? Math.round(formData.imageCrops[index].x) : 0}%
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs text-gray-600">Y:</span>
                                  <input
                                    type="range"
                                    min="0"
                                    max="90"
                                    value={formData.imageCrops && formData.imageCrops[index] ? formData.imageCrops[index].y : 0}
                                    onChange={(e) => {
                                      const newY = parseInt(e.target.value)
                                      const maxHeight = 100 - newY
                                      const currentCrop = formData.imageCrops && formData.imageCrops[index] ? formData.imageCrops[index] : { x: 0, y: 0, width: 100, height: 100 }
                                      handleImageCrop(index, {
                                        ...currentCrop,
                                        y: newY,
                                        height: Math.min(currentCrop.height, maxHeight)
                                      })
                                    }}
                                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                  />
                                  <span className="text-xs text-gray-600 w-8">
                                    {formData.imageCrops && formData.imageCrops[index] ? Math.round(formData.imageCrops[index].y) : 0}%
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Preview Section */}
                            <div>
                              <p className="text-xs text-gray-600 mb-2">How it will look in project cards:</p>
                              <div className="space-y-3">
                                {/* Project Card Preview */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                  <div className="relative h-32 w-full overflow-hidden">
                                    <img
                                      src={image}
                                      alt={`Preview ${index + 1}`}
                                      className="w-full h-full object-cover"
                                      style={{
                                        objectPosition: formData.imageCrops && formData.imageCrops[index] 
                                          ? `${formData.imageCrops[index].x}% ${formData.imageCrops[index].y}%`
                                          : 'center center'
                                      }}
                                    />
                                  </div>
                                  <div className="p-3">
                                    <div className="h-3 bg-gray-200 rounded mb-2"></div>
                                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                                  </div>
                                </div>
                                
                                {/* Crop Info */}
                                <div className="text-xs text-gray-600 space-y-1">
                                  <p>Crop Area: {formData.imageCrops && formData.imageCrops[index] ? Math.round(formData.imageCrops[index].width) : 100}% × {formData.imageCrops && formData.imageCrops[index] ? Math.round(formData.imageCrops[index].height) : 100}%</p>
                                  <p>Position: ({formData.imageCrops && formData.imageCrops[index] ? Math.round(formData.imageCrops[index].x) : 0}%, {formData.imageCrops && formData.imageCrops[index] ? Math.round(formData.imageCrops[index].y) : 0}%)</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* New Uploads Cropping */}
                      {uploadedFiles.map((file, index) => {
                        if (file.type.startsWith('image/') && formData.imageCrops && formData.imageCrops[existingImages.length + index]) {
                          const cropIndex = existingImages.length + index
                          return (
                            <div key={`crop-new-${index}`} className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-gray-700">New Upload: {file.name}</span>
                                <div className="flex space-x-2">
                                  <button
                                    type="button"
                                    onClick={() => handleImageCrop(cropIndex, { x: 0, y: 0, width: 100, height: 100 })}
                                    className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                                  >
                                    Reset
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleImageCrop(cropIndex, { x: 25, y: 25, width: 50, height: 50 })}
                                    className="text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                                  >
                                    Center
                                  </button>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Cropping Interface */}
                                <div>
                                  <p className="text-xs text-gray-600 mb-2">Drag to adjust crop area:</p>
                                  <div className="relative w-full h-48 bg-gray-200 rounded overflow-hidden border-2 border-gray-300">
                                    <img
                                      src={getImagePreview(file)}
                                      alt={`Crop ${cropIndex + 1}`}
                                      className="w-full h-full object-cover"
                                    />
                                    <div
                                      className="absolute border-2 border-blue-500 bg-blue-500 bg-opacity-20 cursor-move"
                                      style={{
                                        left: `${formData.imageCrops[cropIndex].x}%`,
                                        top: `${formData.imageCrops[cropIndex].y}%`,
                                        width: `${formData.imageCrops[cropIndex].width}%`,
                                        height: `${formData.imageCrops[cropIndex].height}%`
                                      }}
                                      onMouseDown={(e) => {
                                        const rect = e.currentTarget.parentElement?.getBoundingClientRect()
                                        if (rect) {
                                          const x = ((e.clientX - rect.left) / rect.width) * 100
                                          const y = ((e.clientY - rect.top) / rect.height) * 100
                                          handleImageCrop(cropIndex, {
                                            x: Math.max(0, Math.min(x, 100)),
                                            y: Math.max(0, Math.min(y, 100)),
                                            width: Math.max(10, Math.min(100 - x, 100)),
                                            height: Math.max(10, Math.min(100 - y, 100))
                                          })
                                        }
                                      }}
                                    />
                                  </div>
                                  
                                  {/* Crop Controls */}
                                  <div className="mt-3 space-y-2">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-xs text-gray-600">X:</span>
                                      <input
                                        type="range"
                                        min="0"
                                        max="90"
                                        value={formData.imageCrops[cropIndex].x}
                                        onChange={(e) => {
                                          const newX = parseInt(e.target.value)
                                          const maxWidth = 100 - newX
                                          handleImageCrop(cropIndex, {
                                            ...formData.imageCrops[cropIndex],
                                            x: newX,
                                            width: Math.min(formData.imageCrops[cropIndex].width, maxWidth)
                                          })
                                        }}
                                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                      />
                                      <span className="text-xs text-gray-600 w-8">{Math.round(formData.imageCrops[cropIndex].x)}%</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <span className="text-xs text-gray-600">Y:</span>
                                      <input
                                        type="range"
                                        min="0"
                                        max="90"
                                        value={formData.imageCrops[cropIndex].y}
                                        onChange={(e) => {
                                          const newY = parseInt(e.target.value)
                                          const maxHeight = 100 - newY
                                          handleImageCrop(cropIndex, {
                                            ...formData.imageCrops[cropIndex],
                                            y: newY,
                                            height: Math.min(formData.imageCrops[cropIndex].height, maxHeight)
                                          })
                                        }}
                                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                      />
                                      <span className="text-xs text-gray-600 w-8">{Math.round(formData.imageCrops[cropIndex].y)}%</span>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Preview Section */}
                                <div>
                                  <p className="text-xs text-gray-600 mb-2">How it will look in project cards:</p>
                                  <div className="space-y-3">
                                    {/* Project Card Preview */}
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                      <div className="relative h-32 w-full overflow-hidden">
                                        <img
                                          src={getImagePreview(file)}
                                          alt={`Preview ${cropIndex + 1}`}
                                          className="w-full h-full object-cover"
                                          style={{
                                            objectPosition: `${formData.imageCrops[cropIndex].x}% ${formData.imageCrops[cropIndex].y}%`,
                                            objectFit: 'cover'
                                          }}
                                        />
                                      </div>
                                      <div className="p-3">
                                        <div className="h-3 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                                      </div>
                                    </div>
                                    
                                    {/* Crop Info */}
                                    <div className="text-xs text-gray-600 space-y-1">
                                      <p>Crop Area: {Math.round(formData.imageCrops[cropIndex].width)}% × {Math.round(formData.imageCrops[cropIndex].height)}%</p>
                                      <p>Position: ({Math.round(formData.imageCrops[cropIndex].x)}%, {Math.round(formData.imageCrops[cropIndex].y)}%)</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        return null
                      })}
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Procedure</label>
                <textarea
                  value={formData.procedure.join(' ')}
                  onChange={(e) => handleInputChange('procedure', [e.target.value])}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                  placeholder="Describe the project procedure in detail..."
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">References</label>
                {formData.references.map((reference, index) => (
                  <div key={index} className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      value={reference}
                      onChange={(e) => handleReferenceChange(index, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                      placeholder="Reference"
                      required
                    />
                    {formData.references.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeReference(index)}
                        className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addReference}
                  className="mt-2 px-4 py-2 bg-[#EEC583] text-black rounded-md hover:bg-[#d4b06f] transition-colors"
                >
                  Add Reference
                </button>
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#489BAC] text-white rounded-md hover:bg-[#3a7a8a] transition-colors"
                >
                  {editingProject ? 'Update Project' : 'Add Project'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Projects List */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Current Projects</h3>
            <p className="text-sm text-gray-600 mt-1">
              Projects are displayed in order from top to bottom. Use the arrow buttons to reorder projects. 
              The first 3 projects will appear on the homepage as featured projects.
            </p>
          </div>
          
          {/* Featured Projects Preview */}
          <div className="px-6 py-4 bg-blue-50 border-b border-blue-200">
            <h4 className="text-md font-medium text-blue-900 mb-2">Featured Projects (Homepage Display)</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.slice(0, 3).map((project, index) => (
                <div key={project.id} className="bg-white p-3 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-blue-600">#{index + 1}</span>
                    <span className="text-sm font-medium text-gray-900 truncate">{project.title}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{project.courseId}</p>
                </div>
              ))}
              {projects.length < 3 && (
                <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 text-center">
                  <p className="text-sm text-gray-500">
                    {projects.length === 0 ? 'No projects yet' : `${3 - projects.length} more project${3 - projects.length === 1 ? '' : 's'} needed`}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {projects.length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-500">
              No projects added yet. Click &quot;Add New Project&quot; to get started.
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {projects.map((project, index) => (
                <div key={project.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          #{index + 1}
                        </span>
                        <h4 className="text-lg font-medium text-gray-900">{project.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{project.category}</p>
                      <p className="text-sm text-gray-600">{project.courseId} - {project.courseName}</p>
                      <p className="text-sm text-gray-500 mt-2 line-clamp-2">{project.description}</p>
                    </div>
                    <div className="flex flex-col space-y-2 ml-4">
                      {/* Reordering Controls */}
                      <div className="flex space-x-1">
                        <button
                          onClick={() => moveProjectToTop(index)}
                          disabled={index === 0}
                          className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Move to top"
                        >
                          ↑↑
                        </button>
                        <button
                          onClick={() => moveProjectUp(index)}
                          disabled={index === 0}
                          className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Move up"
                        >
                          ↑
                        </button>
                        <button
                          onClick={() => moveProjectDown(index)}
                          disabled={index === projects.length - 1}
                          className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Move down"
                        >
                          ↓
                        </button>
                        <button
                          onClick={() => moveProjectToBottom(index)}
                          disabled={index === projects.length - 1}
                          className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Move to bottom"
                        >
                          ↓↓
                        </button>
                      </div>
                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(project)}
                          className="px-3 py-1 bg-[#489BAC] text-white text-sm rounded-md hover:bg-[#3a7a8a] transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
