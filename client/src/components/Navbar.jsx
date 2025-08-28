import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'

const Navbar = () => {

    const navigate = useNavigate()
    const {user} = useUser()
    const { openSignIn } = useClerk()


  return (
    <div className='fixed z-50 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
      <img 
        src={assets.logosss} 
        alt="SmartWorkAI logo" 
        className='w-48 sm:w-60 lg:w-90 cursor-pointer hover:opacity-90 transition-opacity' 
        onClick={() => navigate('/')}
      />

      {
        user ? <UserButton /> 
        : 
        (
          <button 
            onClick={openSignIn} 
            className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary hover:bg-primary/90 transition-colors text-white px-8 sm:px-10 py-2.5 font-medium'
          >
            Get started <ArrowRight className='w-4 h-4'/>
          </button>
        )
      }

      
    </div>
  )
}

export default Navbar