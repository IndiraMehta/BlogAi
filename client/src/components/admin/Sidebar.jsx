import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-orange-100 min-h-full pt-6 bg-white shadow-sm">

  {/* Dashboard */}
  <NavLink
    end
    to="/admin"
    className={({ isActive }) =>
      `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 transition-all duration-150 cursor-pointer 
       ${isActive ? 'bg-orange-100 border-r-4 border-orange-600 text-orange-700 font-medium' : 'text-gray-600 hover:bg-orange-50'}`
    }
  >
    <img src={assets.home_icon} alt="Dashboard Icon" className="w-5 min-w-4" />
    <p className="hidden md:inline-block">Dashboard</p>
  </NavLink>

  {/* Add Blog */}
  <NavLink
    to="/admin/addBlog"
    className={({ isActive }) =>
      `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 transition-all duration-150 cursor-pointer 
       ${isActive ? 'bg-orange-100 border-r-4 border-orange-600 text-orange-700 font-medium' : 'text-gray-600 hover:bg-orange-50'}`
    }
  >
    <img src={assets.add_icon} alt="Add Blog Icon" className="w-5 min-w-4" />
    <p className="hidden md:inline-block">Add Blogs</p>
  </NavLink>

  {/* Blog List */}
  <NavLink
    to="/admin/listBlog"
    className={({ isActive }) =>
      `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 transition-all duration-150 cursor-pointer 
       ${isActive ? 'bg-orange-100 border-r-4 border-orange-600 text-orange-700 font-medium' : 'text-gray-600 hover:bg-orange-50'}`
    }
  >
    <img src={assets.list_icon} alt="Blog List Icon" className="w-5 min-w-4" />
    <p className="hidden md:inline-block">Blog Lists</p>
  </NavLink>

  {/* Comments */}
  <NavLink
    to="/admin/comments"
    className={({ isActive }) =>
      `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 transition-all duration-150 cursor-pointer 
       ${isActive ? 'bg-orange-100 border-r-4 border-orange-600 text-orange-700 font-medium' : 'text-gray-600 hover:bg-orange-50'}`
    }
  >
    <img src={assets.comment_icon} alt="Comments Icon" className="w-5 min-w-4" />
    <p className="hidden md:inline-block">Comments</p>
  </NavLink>
</div>

  )
}

export default Sidebar
