import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets'
import CommentTableItem from '../../components/admin/CommentTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Comments = () => {

    const [comments, setComments] = useState([])
    const [filter, setFilter] = useState('Not Approved')

    const {axios} = useAppContext();

    const fetchComments = async ()=>{
        try {
          const { data } = await axios.get('/api/admin/comments')
          data.success ? setComments(data.comments) : toast.error(data.message)
        } catch (error) {
          toast.error(error.message)
        }
    }

    useEffect(()=>{
        fetchComments()
    },[])

  return (
   <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-orange-50 min-h-screen">
  {/* Header + Filters */}
  <div className="flex justify-between items-center max-w-3xl">
    <h1 className="text-2xl font-semibold text-orange-700">Comments</h1>

    <div className="flex gap-3">
      <button
        onClick={() => setFilter('Approved')}
        className={`shadow-sm border rounded-full px-4 py-1 text-xs font-medium transition-all ${
          filter === 'Approved'
            ? 'text-white bg-orange-600 border-orange-600'
            : 'text-orange-600 border-orange-300 bg-white hover:bg-orange-100'
        }`}
      >
        Approved
      </button>

      <button
        onClick={() => setFilter('Not Approved')}
        className={`shadow-sm border rounded-full px-4 py-1 text-xs font-medium transition-all ${
          filter === 'Not Approved'
            ? 'text-white bg-orange-600 border-orange-600'
            : 'text-orange-600 border-orange-300 bg-white hover:bg-orange-100'
        }`}
      >
        Not Approved
      </button>
    </div>
  </div>

  {/* Table */}
  <div className="relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white border border-orange-100 shadow rounded-xl scrollbar-hide">
    <table className="w-full text-sm text-orange-600">
      <thead className="text-xs text-orange-700 uppercase bg-orange-100">
        <tr>
          <th scope="col" className="px-6 py-3">Blog Title & Comment</th>
          <th scope="col" className="px-6 py-3 max-sm:hidden">Date</th>
          <th scope="col" className="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-orange-100">
        {comments
          .filter((comment) =>
            filter === 'Approved' ? comment.isApproved === true : comment.isApproved === false
          )
          .map((comment, index) => (
            <CommentTableItem
              key={comment._id}
              comment={comment}
              index={index + 1}
              fetchComments={fetchComments}
            />
          ))}
      </tbody>
    </table>
  </div>
</div>

  )
}

export default Comments
