import React from 'react'
import { FaRegMessage } from 'react-icons/fa6'
import { FiBell, FiHome } from 'react-icons/fi'
import { Link } from 'react-router-dom'
function NavBar({userData, showingChatBox}) {
  return (
    <div className='flex items-center gap-4 justify-end mb-2'>
        <span className='flex items-center gap-4'>
            <Link to={'/parent-landing-page'}>Home</Link>

            <button onClick={showingChatBox} className='relative'>
                <FaRegMessage size={20} /> <span className='border border-red-400 w-4 h-4 rounded-full absolute -top-[4px] -right-[3px] bg-amber-500 flex justify-center items-center p-[3px] text-[10px]'>1</span>
            </button>

            <button className='relative'>
                <FiBell size={30} /> <span className='border border-red-400 w-4 h-4 rounded-full absolute top-0 right-0 bg-amber-500 flex justify-center items-center p-1 text-[10px]'>1</span>
            </button>
        </span>
        <div>
            <img src={userData.userImage} alt="" className='w-14 h-14 rounded-full object-center object-cover' />
            <p className='font-semibold'>{userData.userName}</p>
        </div>
    </div>
  )
}

export default NavBar