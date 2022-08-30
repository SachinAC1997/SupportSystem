import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    name: '',
    password: '',
  })

  const login = (details, id) => {
    setUser({
      name: details.name,
      password: details.password,
    })
  }

  const logout = () => {
    setUser({
      name: '',
      password: '',
    })
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}