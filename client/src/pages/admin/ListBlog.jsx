import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ListBlog = () => {

 const [blogs, setBlogs] = useState([]);
 const {axios} = useAppContext()

 const fetchBlogs = async () =>{
    try {
        const {data} = await axios.get('/api/admin/blogs')
        if(data.success){
            setBlogs(data.blogs)
        }else{
            toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
    }
 }

 useEffect(()=>{
    fetchBlogs()
 },[])

  return (<div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-orange-50 min-h-screen">
  {/* Page Heading */}
  <h1 className="text-2xl font-semibold text-orange-700 mb-4">All Blogs</h1>

  {/* Table Container */}
  <div className="relative h-4/5 mt-4 max-w-4xl overflow-x-auto shadow rounded-xl scrollbar-hide bg-white border border-orange-100">
    <table className="w-full text-sm text-orange-600">
      {/* Table Header */}
      <thead className="text-xs text-orange-700 uppercase bg-orange-100">
        <tr>
          <th scope="col" className="px-2 py-4 xl:px-6">#</th>
          <th scope="col" className="px-2 py-4">Blog Title</th>
          <th scope="col" className="px-2 py-4 max-sm:hidden">Date</th>
          <th scope="col" className="px-2 py-4 max-sm:hidden">Status</th>
          <th scope="col" className="px-2 py-4">Actions</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="divide-y divide-orange-100">
        {blogs.map((blog, index) => (
          <BlogTableItem
            key={blog._id}
            blog={blog}
            fetchBlogs={fetchBlogs}
            index={index + 1}
          />
        ))}
      </tbody>
    </table>
  </div>
</div>
  )
}

export default ListBlog
