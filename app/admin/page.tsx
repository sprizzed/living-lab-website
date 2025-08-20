'use client'

import { useState, useEffect } from 'react'
import AdminLogin from '../../components/AdminLogin'
import AdminDashboard from '../../components/AdminDashboard'

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if admin is already logged in
    const adminLoggedIn = localStorage.getItem('adminLoggedIn')
    if (adminLoggedIn === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = (success: boolean) => {
    setIsLoggedIn(success)
  }

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    setIsLoggedIn(false)
  }

  if (isLoggedIn) {
    return <AdminDashboard onLogout={handleLogout} />
  }

  return <AdminLogin onLogin={handleLogin} />
}
