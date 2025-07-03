import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {

    const [menu, setMenu] = useState("All")
    const {blogs, input} = useAppContext()

    const filteredBlogs = ()=>{
      if(input === ''){
        return blogs
      }
      return blogs.filter((blog)=> blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
    }

  return (
    <div className='relative'>
      {/* Category Filter Section */}
      <div className='bg-gradient-to-r from-orange-50 to-orange-100 py-8 mb-12 rounded-3xl mx-8 sm:mx-16 xl:mx-40 shadow-lg shadow-orange-500/10 border border-orange-200'>
        <h2 className='text-center text-2xl font-bold text-gray-700 mb-6'>Explore by Category</h2>
        <div className='flex flex-wrap justify-center gap-3 sm:gap-6 relative'>
          {blogCategories.map((item)=> (
              <div key={item} className='relative'>
                  <button onClick={()=> setMenu(item)}
                   className={`cursor-pointer px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                     menu === item 
                       ? 'text-white shadow-lg shadow-orange-500/40 z-10 relative' 
                       : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50 hover:shadow-md'
                   }`}>
                      {item}
                      {menu === item && (
                          <motion.div layoutId='underline'
                           transition={{type: 'spring', stiffness: 500, damping: 30}}
                          className='absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-xl shadow-orange-500/40 -z-1'></motion.div>
                      )}
                  </button>
              </div>
          ))}
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className='mx-8 sm:mx-16 xl:mx-40'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-2xl font-bold text-gray-700'>
            {menu === "All" ? "All Posts" : `${menu} Posts`}
          </h2>
          <div className='text-sm text-gray-500 bg-orange-50 px-4 py-2 rounded-full border border-orange-200'>
            {filteredBlogs().filter((blog)=> menu === "All" ? true : blog.category === menu).length} articles
          </div>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24'>
          {filteredBlogs().filter((blog)=> menu === "All" ? true : blog.category === menu).map((blog)=> 
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className='transform hover:scale-105 transition-transform duration-300'
            >
              <BlogCard blog={blog}/>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogList
