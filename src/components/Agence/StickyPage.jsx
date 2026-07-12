import React from 'react'
import Footer from '../Footer'

const StickyPage = () => {
  return (
   <>
   <div>
       <div className="page1 font-[font2] w-full h-screen bg-[url(/stickyImg1.png)] object-cover object-center overflow-hidden flex flex-col items-center p-5 gap-20 rounded-4xl sticky top-0">
           <h2 className='uppercase text-xl '>voir tous les projets</h2>
           <div className='flex flex-col items-center gap-5'>
            <h1 className='text-3xl mt-30'>Opto-Reseau</h1>
            <h1 className='text-7xl'>On vous voit comme personne</h1>
           </div>
       </div>
       <div className="page1 font-[font2] w-full h-screen bg-[url(/stickyImg2.png)] object-cover object-center overflow-hidden rounded-4xl sticky top-0">
           <div className='flex h-full flex-col items-center justify-center gap-5'>
            <h1 className='text-3xl'>Lamaguare</h1>
            <h1 className='text-7xl'>Lamaguare</h1>
           </div>
       </div>
       <div className="page1 font-[font2] w-full h-screen bg-[url(/stickyImg3.png)] object-cover object-center overflow-hidden rounded-4xl sticky top-0">
           <div className='flex h-full flex-col items-center justify-center gap-5'>
            <h1 className='text-3xl'>Opto-Reseau</h1>
            <h1 className='text-7xl'>On vous voit comme personne</h1>
           </div>
       </div>
       <Footer />
   </div>
   </>
  )
}

export default StickyPage
