import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)
const AUTH_KEY = 'auth:user'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem(AUTH_KEY)
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setAuthLoading(false)
  }, [])

  const login = (userData) => {
    setUser(userData)
    localStorage.setItem(AUTH_KEY, JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(AUTH_KEY)
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      authLoading,
      login,
      logout,
    }),
    [user, authLoading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
