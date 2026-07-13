import React from 'react'

const Card = (props) => {
  return (
    <>
      
        <div className=' relative group w-1/2 max-md:w-full bg-cover bg-center hover:rounded-4xl transition-all cursor-pointer overflow-hidden '>
          <img src={props.img1} alt=""  className='w-full h-full object-cover object-center group-hover:scale-[1.1] transition-all'/>
          <div className='uppercase absolute left-0 top-0 text-white w-full h-full flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 max-md:opacity-100 transition-all'>
             <h2 className='text-6xl max-md:text-2xl tracking-wide border-2 rounded-full px-5 max pt-2'>voir le projet</h2>
          </div>
         
        </div>
        <div className=' relative group w-1/2 max-md:w-full bg-cover bg-center hover:rounded-4xl transition-all cursor-pointer overflow-hidden '>
          <img src={props.img2} alt=""  className='w-full h-full object-cover object-center group-hover:scale-[1.1] transition-all'/>
          <div className='uppercase absolute left-0 top-0 text-white w-full h-full flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 max-md:opacity-100 transition-all'>
             <h2 className='text-6xl max-md:text-2xl tracking-wide border-2 rounded-full px-5 max pt-2'>voir le projet</h2>
          </div>
         
        </div>

      
    </>
  )
}

export default Card
