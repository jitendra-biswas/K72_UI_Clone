import React from 'react'

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
       <div className="page1 font-[font2] w-full h-[60vh] bg-black sticky top-0 flex flex-col justify-between">
           <div className="top flex justify-between p-5">
            
                <ul className='text-7xl uppercase flex gap-3'>
                    <li className='border-2 rounded-full px-6 pt-1'>fb</li>
                    <li className='border-2 rounded-full px-6 pt-1'>ig</li>
                    <li className='border-2 rounded-full px-6 pt-1'>in</li>
                    <li className='border-2 rounded-full px-6 pt-1'>be</li>
                </ul>
            
              <div className="right text-7xl uppercase border-2 rounded-full px-5 pt-1">Contact </div>
           </div>
           <div className="bottom flex justify-between p-5">
            
                <ul className='text-sm uppercase flex gap-7'>
                    <li>Politique de confidentialité</li>
                    <li >Avis de confidentialité</li>
                    <li >Rapport éthique</li>
                    <li >Options de consentement</li>
                </ul>
            
              <div className='uppercase text-xl'>Retour en haut </div>
           </div>
       </div>
   </div>
   </>
  )
}

export default StickyPage
