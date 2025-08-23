'use client'

import { useState, useEffect } from 'react'
import AdminLogin from '../../components/AdminLogin'
import AdminDashboard from '../../components/AdminDashboard'

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if admin session is valid
    try {
      const sessionData = localStorage.getItem('adminSession')
      if (sessionData) {
        const session = JSON.parse(sessionData)
        const now = Date.now()
        
        // Check if session is still valid (not expired)
        if (session.loggedIn && session.expiresAt > now) {
          setIsLoggedIn(true)
        } else {
          // Session expired, clean up
          localStorage.removeItem('adminSession')
          localStorage.removeItem('adminLoggedIn') // Clean old format too
        }
      }
    } catch (error) {
      console.warn('Error checking admin session:', error)
      localStorage.removeItem('adminSession')
      localStorage.removeItem('adminLoggedIn')
    }
  }, [])

  const handleLogin = (success: boolean) => {
    setIsLoggedIn(success)
  }

  const handleLogout = () => {
    localStorage.removeItem('adminSession')
    localStorage.removeItem('adminLoggedIn') // Clean old format too
    setIsLoggedIn(false)
  }

  if (isLoggedIn) {
    return <AdminDashboard onLogout={handleLogout} />
  }

  return <AdminLogin onLogin={handleLogin} />
}
