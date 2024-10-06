import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'
import { useLogout } from '../../hooks/useAuth'

const Logout = () => {

const logout = useLogout();


logout();

  return <Navigate to={'/'} />
  
  
}

export default Logout
