import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Register from '../pages/Authentication/Register'
import Login from '../pages/Authentication/Login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/registration',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
])

export default router
