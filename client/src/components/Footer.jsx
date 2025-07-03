import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    // <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
    //   <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>

    //     <div>
    //         <img src={assets.logo} alt="logo" className='w-32 sm:w-44'/>
    //         <p className='max-w-[410px] mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?</p>
    //     </div>

    //     <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
    //         {footer_data.map((section, index)=> (
    //             <div key={index}>
    //                 <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
    //                 <ul className='text-sm space-y-1'>
    //                     {section.links.map((link, i)=> (
    //                         <li key={i}>
    //                             <a href="#" className='hover:underline transition'>{link}</a>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </div>
    //         ))}
    //     </div>


    //   </div>
    // </div>
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-900 text-orange-100'>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-16 border-b border-orange-700/40'>

    {/* Logo and Description */}
    <div className="max-w-sm space-y-4">
      {/* <img src={assets.logo} alt="logo" className="w-36 sm:w-44" /> */}
      <p className="text-sm text-orange-100/80 leading-relaxed">
        Empowering curious minds through tech insights, tutorials, and news. Join us to stay ahead in the fast-moving world of innovation.
      </p>
    </div>

    {/* Footer Links Section */}
    <div className='grid grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-10'>
      {footer_data.map((section, index) => (
        <div key={index}>
          <h3 className='font-semibold text-base sm:text-lg text-white mb-3'>
            {section.title}
          </h3>
          <ul className='space-y-2 text-sm text-orange-300'>
            {section.links.map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className='hover:text-orange-400 transition-colors duration-200'
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

  </div>

</div>

  )
}

export default Footer
