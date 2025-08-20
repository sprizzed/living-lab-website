'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

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

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [isAddingProject, setIsAddingProject] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    courseId: '',
    courseName: '',
    description: '',
    procedure: [''],
    references: ['']
  })

  // Load projects from localStorage on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('projects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    }
  }, [])

  // Save projects to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [projects])

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleProcedureChange = (index: number, value: string) => {
    const newProcedure = [...formData.procedure]
    newProcedure[index] = value
    setFormData(prev => ({
      ...prev,
      procedure: newProcedure
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

  const addProcedureStep = () => {
    setFormData(prev => ({
      ...prev,
      procedure: [...prev.procedure, '']
    }))
  }

  const removeProcedureStep = (index: number) => {
    setFormData(prev => ({
      ...prev,
      procedure: prev.procedure.filter((_, i) => i !== index)
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
    
    const newProject: Project = {
      id: editingProject?.id || Date.now().toString(),
      ...formData,
      images: ['/images/project1.jpg'] // Default image for now
    }

    if (editingProject) {
      setProjects(prev => prev.map(p => p.id === editingProject.id ? newProject : p))
      setEditingProject(null)
    } else {
      setProjects(prev => [...prev, newProject])
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
      references: ['']
    })
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
      references: project.references
    })
    setIsAddingProject(true)
  }

  const handleDelete = (projectId: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(p => p.id !== projectId))
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
      references: ['']
    })
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
              onClick={onLogout}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

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
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                    required
                  />
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Procedure Steps</label>
                {formData.procedure.map((step, index) => (
                  <div key={index} className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => handleProcedureChange(index, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#489BAC] focus:border-[#489BAC]"
                      placeholder={`Step ${index + 1}`}
                      required
                    />
                    {formData.procedure.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProcedureStep(index)}
                        className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addProcedureStep}
                  className="mt-2 px-4 py-2 bg-[#EEC583] text-black rounded-md hover:bg-[#d4b06f] transition-colors"
                >
                  Add Step
                </button>
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
          </div>
          
          {projects.length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-500">
              No projects added yet. Click "Add New Project" to get started.
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {projects.map((project) => (
                <div key={project.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900">{project.title}</h4>
                      <p className="text-sm text-gray-600">{project.category}</p>
                      <p className="text-sm text-gray-600">{project.courseId} - {project.courseName}</p>
                      <p className="text-sm text-gray-500 mt-2 line-clamp-2">{project.description}</p>
                    </div>
                    <div className="flex space-x-2 ml-4">
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
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
