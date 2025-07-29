import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";

const Card = () => {
  return (
    <div className='w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
            <img src={image1} alt="" className='object-cover'/>
        </div>
        <div className='text-2xl font-semibold'>Pancacke</div>
        <div>299/-</div>
        <div>
            <LuLeafyGreen />
            <span>Veg</span>
        </div>

    </div>
  )
}

export default Card