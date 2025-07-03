import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

    
    const {navigate, token} = useAppContext()

  return ( <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl shadow-lg shadow-orange-500/10 px-6 border border-orange-200'>
            <button 
  onClick={() => navigate('/')} 
  className="w-32 sm:w-44 py-2 text-white bg-orange-600 hover:bg-orange-700 
             font-semibold rounded-full transition-transform duration-300 hover:scale-105 shadow-sm"
>
  BLOGAi
</button>

            
            <button 
                onClick={()=>navigate('/admin')}  
                className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-2.5 transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-500/30'
            >
                {token ? 'Dashboard' : 'Login'}
                <img src={assets.arrow} className='w-3 transition-transform duration-300 group-hover:translate-x-1' alt="arrow" />
            </button>
        </div>
  )
}

export default Navbar
