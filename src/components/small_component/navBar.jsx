import React from 'react'
import { FiBell, FiHome } from 'react-icons/fi'
import { Link } from 'react-router-dom'
function NavBar({userData}) {
  return (
    <div className='flex items-center gap-4 justify-end mb-2'>
        <span className='relative flex items-center gap-4'>
            <Link to={'/parent-landing-page'}>Home</Link>

            <button>
                <FiBell size={30}/>
            </button>

            <span className='border border-red-400 w-4 h-4 rounded-full absolute top-0 right-0 bg-amber-500 flex justify-center items-center p-1 text-[10px]'>1</span>
        </span>
        <div>
            <img src={userData.userImage} alt="" className='w-14 h-14 rounded-full object-center object-cover' />
            <p className='font-semibold'>{userData.userName}</p>
        </div>
    </div>
  )
}

export default NavBar