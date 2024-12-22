import { useContext } from 'react'
import logo from '../assets/images/nav_logo.png'
import { AuthContext } from '../providers/AuthProvider'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleThemeColor = () => {
    const htmlTag = document.getElementById('htmlTag');
    htmlTag.classList.toggle('dark')
  }

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire('sign out successfully')
        navigate('/login');
      })
      .catch(error => {
        Swal.fire('Error', error.message)
      })
  }

  return (
    <div className='navbar bg-purple-400 dark:bg-purple-600 shadow-sm px-10 mx-auto'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='' />
          <span className='font-bold'>Lost and Found</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 items-center'>
          
          <li className='hidden lg:block'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hidden lg:block'>
            <Link to='/allItems'>All Items</Link>
          </li>
          <li className='hidden lg:block'>
            <Link to='/addItem'>Add Items</Link>
          </li>
          <li className='hidden lg:block'>
            <Link to='/myItems'>My Items</Link>
          </li>
          <li className='hidden lg:block'>
            <Link to='/recoverItems'>Recover Items</Link>
          </li>
          <input onClick={handleThemeColor} type="checkbox" value="synthwave" className="toggle theme-controller" />
          {!user && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/addItem' className='justify-between'>
                  Add Items
                </Link>
              </li>
              <li>
                <Link to='/myItems'>My Items</Link>
              </li>
              <li>
                <Link to='/allItems'>All Items</Link>
              </li>
              <li>
                <Link to='/recoverItems'>Recover Items</Link>
              </li>
              <li className='mt-2'>
                <button
                  onClick={handleSignOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
