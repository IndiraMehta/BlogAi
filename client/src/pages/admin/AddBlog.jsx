import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import {parse} from 'marked'

const AddBlog = () => {

    const {axios} = useAppContext()
    const [isAdding, setIsAdding] = useState(false)
    const [loading, setLoading] = useState(false)

    const editorRef = useRef(null)
    const quillRef = useRef(null)

    const [image, setImage] = useState(false);
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [category, setCategory] = useState('Startup');
    const [isPublished, setIsPublished] = useState(false);

    const generateContent = async ()=>{
        if(!title) return toast.error('Please enter a title')

        try {
            setLoading(true);
            const {data} = await axios.post('/api/blog/generate', {prompt: title})
            if (data.success){
                quillRef.current.root.innerHTML = parse(data.content)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    const onSubmitHandler = async (e) =>{
        try {
            e.preventDefault();
            setIsAdding(true)

            const blog = {
                title, subTitle, 
                description: quillRef.current.root.innerHTML,
                category, isPublished
            }

            const formData = new FormData();
            formData.append('blog', JSON.stringify(blog))
            formData.append('image', image)

            const {data} = await axios.post('/api/blog/add', formData);

            if(data.success){
                toast.success(data.message);
                setImage(false)
                setTitle('')
                setSubTitle('')
                quillRef.current.root.innerHTML = ''
                setCategory('Startup')
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }finally{
            setIsAdding(false)
        }
        
    }

    useEffect(()=>{
        // Initiate Quill only once
        if(!quillRef.current && editorRef.current){
            quillRef.current = new Quill(editorRef.current, {theme: 'snow'})
        }
    },[])

  return (
    <form onSubmit={onSubmitHandler} className="flex-1 bg-orange-50 text-gray-800 h-full overflow-auto">
  <div className="bg-white w-full max-w-3xl p-6 md:p-10 m-4 md:m-10 shadow-xl rounded-2xl border border-orange-200">

    {/* Upload Thumbnail */}
    <label htmlFor="image" className="block mb-6">
      <p className="text-lg font-medium text-orange-700">Upload Thumbnail</p>
      <img
        src={!image ? assets.upload_area : URL.createObjectURL(image)}
        alt="Upload Preview"
        className="mt-3 h-32 w-32 object-cover rounded-lg border-2 border-orange-200 cursor-pointer hover:opacity-90 transition duration-200"
      />
      <input
        type="file"
        id="image"
        hidden
        required
        onChange={(e) => setImage(e.target.files[0])}
      />
    </label>

    {/* Blog Title */}
    <div className="mb-6">
      <label className="block text-lg font-medium text-orange-700">Blog Title</label>
      <input
        type="text"
        placeholder="Type here"
        required
        className="mt-2 w-full max-w-lg p-3 border border-orange-300 rounded-md focus:outline-orange-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>

    {/* Subtitle */}
    <div className="mb-6">
      <label className="block text-lg font-medium text-orange-700">Sub Title</label>
      <input
        type="text"
        placeholder="Type here"
        required
        className="mt-2 w-full max-w-lg p-3 border border-orange-300 rounded-md focus:outline-orange-500"
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)}
      />
    </div>

    {/* Blog Description */}
    <div className="mb-8 relative">
      <label className="block text-lg font-medium text-orange-700 mb-2">Blog Description</label>
      <div className="max-w-lg min-h-[200px] border border-orange-300 rounded-md p-2 bg-white">
        <div ref={editorRef}></div>
      </div>
      {loading && (
        <div className="absolute inset-0 bg-white/60 flex items-center justify-center rounded-md">
          <div className="w-8 h-8 rounded-full border-2 border-t-orange-500 animate-spin"></div>
        </div>
      )}
      <button
        disabled={loading}
        type="button"
        onClick={generateContent}
        className="absolute bottom-3 right-3 text-xs text-white bg-orange-600 hover:bg-orange-700 px-4 py-1.5 rounded transition duration-200"
      >
        Generate with AI
      </button>
    </div>

    {/* Category */}
    <div className="mb-6">
      <label className="block text-lg font-medium text-orange-700 mb-2">Blog Category</label>
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="w-full max-w-sm px-4 py-2 border border-orange-300 text-gray-700 rounded-md focus:outline-orange-500"
        required
      >
        <option value="">Select category</option>
        {blogCategories.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>

    {/* Publish Checkbox */}
    <div className="flex items-center gap-3 mb-6">
      <p className="text-orange-700 text-base">Publish Now</p>
      <input
        type="checkbox"
        checked={isPublished}
        onChange={(e) => setIsPublished(e.target.checked)}
        className="scale-125 text-orange-600 focus:ring-orange-500 cursor-pointer"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      disabled={isAdding}
      className="w-40 h-10 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isAdding ? "Adding..." : "Add Blog"}
    </button>
  </div>
</form>

  )
}

export default AddBlog
