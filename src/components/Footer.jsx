import React from 'react'

const Footer = () => {
  return (
    <div className="font-[font2] w-full h-[60vh] bg-black sticky top-0 flex flex-col justify-between text-white">
           <div className="top flex justify-between p-5">
            
                <ul className='text-7xl uppercase flex gap-3'>
                    <li className='border-2 rounded-full px-6 pt-1 hover:text-[#D3FD50] cursor-pointer'>fb</li>
                    <li className='border-2 rounded-full px-6 pt-1 hover:text-[#D3FD50] cursor-pointer'>ig</li>
                    <li className='border-2 rounded-full px-6 pt-1 hover:text-[#D3FD50] cursor-pointer'>in</li>
                    <li className='border-2 rounded-full px-6 pt-1 hover:text-[#D3FD50] cursor-pointer'>be</li>
                </ul>
            
              <div className="right text-7xl uppercase border-2 rounded-full px-5 pt-1 hover:text-[#D3FD50] cursor-pointer">Contact </div>
           </div>
           <div className="bottom flex justify-between p-5">
            
                <ul className='text-sm uppercase flex gap-7'>
                    <li className='hover:text-[#D3FD50] cursor-pointer'>Politique de confidentialité</li>
                    <li className='hover:text-[#D3FD50] cursor-pointer' >Avis de confidentialité</li>
                    <li className='hover:text-[#D3FD50] cursor-pointer' >Rapport éthique</li>
                    <li className='hover:text-[#D3FD50] cursor-pointer' >Options de consentement</li>
                </ul>
            
              <div className='uppercase text-xl hover:text-[#D3FD50] cursor-pointer'>Retour en haut </div>
           </div>
       </div>
  )
}

export default Footer
