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
    <div className='navbar bg-gradient-to-r from-green-400 to-purple-500 text-white  
    shadow-sm px-5 lg:px-10 mx-auto sticky top-0 z-10 backdrop-blur-md bg-opacity-50'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='' />
          <span className='font-bold'>Lost and Found</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 items-center font-bold'>
          
          <li className='hidden lg:block'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hidden lg:block'>
            <Link to='/allItems'>All Items</Link>
          </li>
          {user && <><li className='hidden lg:block'>
            <Link to='/addItem'>Add Items</Link>
          </li>
          <li className='hidden lg:block'>
            <Link to='/myItems'>My Items</Link>
          </li>
          <li className='hidden lg:block'>
            <Link to='/recoverItems'>Recover Items</Link>
          </li></>}
          <input onClick={handleThemeColor} type="checkbox" value="synthwave" className="toggle theme-controller" />
          {!user && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown  dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className=' w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow 
              bg-gradient-to-t from-green-400 to-purple-500 rounded-box w-52'
            >
              <li className='block lg:hidden'>
                <Link to='/' className='justify-between'>
                  Home
                </Link>
              </li>
              <li className='block lg:hidden'>
                <Link to='/addItem' className='justify-between'>
                  Add Items
                </Link>
              </li>
              <li className='block lg:hidden'>
                <Link to='/myItems'>My Items</Link>
              </li>
              <li className='block lg:hidden'>
                <Link to='/allItems'>All Items</Link>
              </li>
              <li className='block lg:hidden'>
                <Link to='/recoverItems'>Recover Items</Link>
              </li>
              <li className='mt-2'>
                <button
                  onClick={handleSignOut}
                  className='bg-gradient-to-r from-orange-400 to-teal-500 font-semibold block text-center'
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
