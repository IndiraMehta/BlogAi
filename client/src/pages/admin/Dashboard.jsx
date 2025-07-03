import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState({
        blogs: 0,
        comments: 0,
        drafts: 0,
        recentBlogs: []
    })

    const { axios } = useAppContext()

     const fetchDashboard = async ()=>{
       try {
         const {data} = await axios.get('/api/admin/dashboard')
         data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
       } catch (error) {
            toast.error(error.message)
       }
     }

     useEffect(()=>{
        fetchDashboard()
     },[])

  return (<div className="flex-1 p-4 md:p-10 bg-orange-50 min-h-screen">

  {/* Top Cards */}
  <div className="flex flex-wrap gap-4">
    {/* Blogs Card */}
    <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded-xl shadow hover:shadow-md cursor-pointer hover:scale-105 transition-all border border-orange-100">
      <img src={assets.dashboard_icon_1} alt="Blogs Icon" className="w-10 h-10" />
      <div>
        <p className="text-xl font-semibold text-orange-700">{dashboardData.blogs}</p>
        <p className="text-orange-400 font-light">Blogs</p>
      </div>
    </div>

    {/* Comments Card */}
    <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded-xl shadow hover:shadow-md cursor-pointer hover:scale-105 transition-all border border-orange-100">
      <img src={assets.dashboard_icon_2} alt="Comments Icon" className="w-10 h-10" />
      <div>
        <p className="text-xl font-semibold text-orange-700">{dashboardData.comments}</p>
        <p className="text-orange-400 font-light">Comments</p>
      </div>
    </div>

    {/* Drafts Card */}
    <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded-xl shadow hover:shadow-md cursor-pointer hover:scale-105 transition-all border border-orange-100">
      <img src={assets.dashboard_icon_3} alt="Drafts Icon" className="w-10 h-10" />
      <div>
        <p className="text-xl font-semibold text-orange-700">{dashboardData.drafts}</p>
        <p className="text-orange-400 font-light">Drafts</p>
      </div>
    </div>
  </div>

  {/* Latest Blogs Header */}
  <div className="flex items-center gap-3 m-4 mt-6 text-orange-700">
    <img src={assets.dashboard_icon_4} alt="Recent Blogs Icon" className="w-5 h-5" />
    <p className="text-lg font-medium">Latest Blogs</p>
  </div>

  {/* Table */}
  <div className="relative max-w-4xl overflow-x-auto shadow rounded-xl scrollbar-hide bg-white border border-orange-100">
    <table className="w-full text-sm text-orange-600">
      <thead className="text-xs text-orange-700 uppercase bg-orange-100">
        <tr>
          <th scope="col" className="px-2 py-4 xl:px-6">#</th>
          <th scope="col" className="px-2 py-4">Blog Title</th>
          <th scope="col" className="px-2 py-4 max-sm:hidden">Date</th>
          <th scope="col" className="px-2 py-4 max-sm:hidden">Status</th>
          <th scope="col" className="px-2 py-4">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-orange-100">
        {dashboardData.recentBlogs.map((blog, index) => (
          <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1} />
        ))}
      </tbody>
    </table>
  </div>
</div>

  )
}

export default Dashboard
