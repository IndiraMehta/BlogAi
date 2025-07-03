import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {

  const {setInput, input} = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async (e)=>{
     e.preventDefault();
     setInput(inputRef.current.value)
  }

  const onClear = ()=>{
    setInput('')
    inputRef.current.value = ''
  }

  return (
     <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
            <div className='text-center mt-20 mb-8'>

                <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-orange-500/40 bg-orange-500/10 rounded-full text-sm text-orange-600 backdrop-blur-sm transition-all duration-300 hover:bg-orange-500/20 hover:border-orange-500/60'>
                    <p>New: AI feature integrated</p>
                    <img src={assets.star_icon} className='w-2.5 animate-pulse' alt="" />
                </div>

                <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>Your own <span className=' bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'> blogging</span> <br/> platform.</h1>

                <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.</p>

                <div className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border-2 border-orange-200 bg-white rounded-2xl overflow-hidden shadow-lg shadow-orange-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-300 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/10'>
                    <input 
                        ref={inputRef} 
                        type="text" 
                        placeholder='Search for blogs' 
                        required 
                        className='w-full pl-4 outline-none bg-transparent placeholder-gray-400'
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <button 
                        type="submit" 
                        onClick={onSubmitHandler}
                        className='bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-2 m-1.5 rounded-xl hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500/50 active:scale-95 font-medium'
                    >
                        Search
                    </button>
                </div>

            </div>

            <div className='text-center'>
                {
                input && <button onClick={onClear} className='border border-orange-200 font-light text-xs py-1 px-3 rounded-lg shadow-lg shadow-orange-500/10 cursor-pointer bg-white hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 text-orange-600 hover:text-orange-700'>Clear Search</button>
                }
            </div>

            <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-30 mix-blend-multiply'/>
        </div>
  )
}

export default Header
