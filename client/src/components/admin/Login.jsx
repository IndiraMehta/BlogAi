import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';
import { data } from 'react-router-dom';

const Login = () => {

    const {axios, setToken} = useAppContext();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
          const {data} = await axios.post('/api/admin/login', {email, password})

          if(data.success){
            setToken(data.token)
            localStorage.setItem('token', data.token)
            axios.defaults.headers.common['Authorization'] = data.token;
          }
          else{
            toast.error(data.message)
          }
        } catch (error) {
          toast.error(error.message)
        }
    }

  return (
    // <div className='flex items-center justify-center h-screen'>
    //   <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
    //     <div className='flex flex-col items-center justify-center'>
    //         <div className='w-full py-6 text-center'>
    //             <h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span> Login</h1>
    //             <p className='font-light'>Enter your credentials to access the admin panel</p>
    //         </div>
    //         <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
    //             <div className='flex flex-col'>
    //                 <label> Email </label>
    //                 <input onChange={e=> setEmail(e.target.value)} value={email} 
    //                 type="email" required placeholder='your email id' className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
    //             </div>
    //             <div className='flex flex-col'>
    //                 <label> Password </label>
    //                 <input onChange={e=> setPassword(e.target.value)} value={password} 
    //                 type="password" required placeholder='your password' className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
    //             </div>
    //             <button type="submit" className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all'> Login </button>
    //         </form>
    //     </div>
    //   </div>
    // </div>
    <div className='min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-4'>
      <div className='w-full max-w-md bg-white border-2 border-orange-200 shadow-2xl shadow-orange-500/20 rounded-2xl overflow-hidden'>
        {/* Header Section */}
        <div className='bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-center'>
          <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
            </svg>
          </div>
          <h1 className='text-3xl font-bold text-white mb-2'>
            <span className='text-orange-100'>Admin</span> Login
          </h1>
          <p className='text-orange-100 opacity-90'>Enter your credentials to access the admin panel</p>
        </div>

        {/* Form Section */}
        <div className='p-8'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='group'>
              <label className='block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-orange-600'>
                Email
              </label>
              <div className='relative'>
                <input 
                  onChange={e=> setEmail(e.target.value)} 
                  value={email}
                  type="email" 
                  required 
                  placeholder='your email id' 
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 hover:border-orange-300'
                />
                <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                  <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className='group'>
              <label className='block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-orange-600'>
                Password
              </label>
              <div className='relative'>
                <input 
                  onChange={e=> setPassword(e.target.value)} 
                  value={password}
                  type="password" 
                  required 
                  placeholder='your password' 
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 hover:border-orange-300'
                />
                <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                  <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                  </svg>
                </div>
              </div>
            </div>
            
            <button 
              type="submit" 
              className='w-full py-4 font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl cursor-pointer hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-orange-500/30'
            >
              Login
            </button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Login
