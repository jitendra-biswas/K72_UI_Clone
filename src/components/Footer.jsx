import React from 'react'

const Footer = () => {
  return (
    <div className="font-[font2] w-full h-[60vh] max-md:h-[90vh] bg-black sticky top-0 flex flex-col justify-between text-white">
           <div className="top flex max-md:flex-col justify-between p-5">
            
                <ul className='text-7xl max-md:text-2xl uppercase flex gap-3 max-md:gap-1 '>
                    <li className='border-2 rounded-full px-6 pt-1 hover:text-[#D3FD50] cursor-pointer'>fb</li>
                    <li className='border-2 rounded-full px-6 pt-1 hover:text-[#D3FD50] cursor-pointer'>ig</li>
                    <li className='border-2 rounded-full px-6 pt-1 hover:text-[#D3FD50] cursor-pointer'>in</li>
                    <li className='border-2 rounded-full px-6 pt-1 hover:text-[#D3FD50] cursor-pointer'>be</li>
                </ul>
            
              <div className="right max-md:w-full text-7xl max-md:text-5xl max-md:text-center uppercase border-2 rounded-full px-5  pt-1 hover:text-[#D3FD50] cursor-pointer max-md:mt-96">Contact </div>
           </div>
           <div className="bottom flex max-md:flex-col justify-between p-5">
            
                <ul className='text-sm uppercase flex max-md:flex-col gap-7 max-md:gap-1'>
                    <li className='hover:text-[#D3FD50] cursor-pointer'>Politique de confidentialité</li>
                    <li className='hover:text-[#D3FD50] cursor-pointer' >Avis de confidentialité</li>
                    <li className='hover:text-[#D3FD50] cursor-pointer' >Rapport éthique</li>
                    <li className='hover:text-[#D3FD50] cursor-pointer' >Options de consentement</li>
                </ul>
            
              <div className='uppercase text-xl max-md:text-sm hover:text-[#D3FD50] cursor-pointer max-md:w-full max-md:text-center max-md:mt-4'>Retour en haut </div>
           </div>
       </div>
  )
}

export default Footer
