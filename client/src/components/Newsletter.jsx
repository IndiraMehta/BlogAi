import React from 'react'

const Newsletter = () => {
  return (
    // <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
    //   <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog!</h1>
    //   <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
    //   <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
    //     <input className='border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' type="text" placeholder='Enter your email id' required/>
    //     <button type='submit' className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none'>Subscribe</button>
    //   </form>
    // </div>
    <div className="flex flex-col items-center justify-center text-center px-4 py-16 bg-orange-50 rounded-2xl shadow-md max-w-3xl mx-auto my-32">
  <h1 className="text-3xl md:text-5xl font-bold text-orange-600 mb-4">
    Never Miss a Blog!
  </h1>
  <p className="text-orange-500/90 text-base md:text-lg mb-8">
    Subscribe to get the latest blogs, new tech, and exclusive news delivered straight to your inbox.
  </p>

  <form className="flex flex-col sm:flex-row items-center w-full gap-4">
    <input
      type="email"
      required
      placeholder="Enter your email"
      className="w-full sm:w-auto flex-1 px-4 py-3 border border-orange-300 rounded-lg sm:rounded-r-none text-orange-700 placeholder-orange-400 outline-none focus:ring-2 focus:ring-orange-300 bg-white shadow-sm"
    />
    <button
      type="submit"
      className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg sm:rounded-l-none hover:bg-orange-600 transition-all duration-200 shadow-md active:scale-95"
    >
      Subscribe
    </button>
  </form>
</div>

  )
}

export default Newsletter
