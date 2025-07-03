import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {

    const {axios, setToken, navigate} = useAppContext()

    const logout = ()=>{
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = null;
        setToken(null)
        navigate('/')
    }

  return (
    <>
    {/* Top Navbar */}
<div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-orange-200 bg-white shadow-sm">
  <button 
  onClick={() => navigate('/')} 
  className="w-32 sm:w-44 py-2 text-white bg-orange-600 hover:bg-orange-700 
             font-semibold rounded-full transition-transform duration-300 hover:scale-105 shadow-sm"
>
  BLOGAi
</button>


  {/* Logout Button */}
  <button
    onClick={logout}
    className="text-sm px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full transition-all duration-200"
  >
    Logout
  </button>
</div>

{/* Main Layout */}
<div className="flex h-[calc(100vh-70px)] bg-orange-50">
  <Sidebar />
  <Outlet />
</div>

    </>
  )
}

export default Layout
