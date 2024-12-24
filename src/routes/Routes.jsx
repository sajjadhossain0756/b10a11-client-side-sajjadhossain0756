import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Register from '../pages/Authentication/Register'
import Login from '../pages/Authentication/Login'
import AllItems from '../pages/AllItems'
import AddItem from '../pages/AddItem'
import RecoverItems from '../pages/RecoverItems'
import MyItems from '../pages/MyItems'
import PrivateRoute from './PrivateRoute'
import Error from '../pages/Error'
import Details from '../pages/Details'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/allItems',
        element: <AllItems />,
      },
      {
        path: '/addItem',
        element: <PrivateRoute><AddItem /></PrivateRoute>,
      },
      {
        path: '/recoverItems',
        element: <PrivateRoute><RecoverItems /></PrivateRoute>,
      },
      {
        path: '/myItems',
        element: <PrivateRoute><MyItems /></PrivateRoute>,
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details /></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_SERVER_URL}/allItems/${params.id}`)
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
