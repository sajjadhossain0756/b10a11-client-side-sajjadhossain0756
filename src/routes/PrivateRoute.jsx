import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  const location = useLocation()

  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={location.pathname} />
}

export default PrivateRoute