import React, { createContext, useContext, useState, useEffect } from 'react'
import { AdminUser } from '../types'

interface AuthContextType {
  user: AdminUser | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('adminUser')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simple authentication - trong thực tế cần kết nối với backend
    if (username === 'admin' && password === 'admin123') {
      const adminUser: AdminUser = {
        id: '1',
        username: 'admin',
        email: 'admin@portfolio.com',
        token: 'dummy-token-' + Date.now()
      }
      setUser(adminUser)
      localStorage.setItem('adminUser', JSON.stringify(adminUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('adminUser')
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  )
}