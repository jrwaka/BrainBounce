import React from 'react'
import { useNavigate } from 'react-router-dom';

function BackButton({data}) {
const navigate = useNavigate();

    const handleClick = () => {
        navigate(data.path);
    };
  return (
    <button onClick={handleClick} className={`text-blue-600 mt-4 ${data.width} place-self-center hover:underline cursor-pointer`}>{data.Title}</button>
  )
}

export default BackButton