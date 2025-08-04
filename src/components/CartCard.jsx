import React from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem, IncrementQty, DecrementQty } from '../redux/cartSlice';


const CartCard = ({item}) => {
    // redux
    let dispatch = useDispatch()

  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
        <div className='h-full w-[60%] flex gap-5'>
            <div className='h-full w-[60%] overflow-hidden rounded-lg'>
                <img src={item.image} alt="" />
            </div>
            <div className='h-full w-[40%] flex flex-col gap-3'>
                <div className='text-lg text-gray-600 font-semibold'>{item.name}</div>
                <div className='w-[90%] h-[50px] flex rounded-lg overflow-hidden shadow-lg
                 text-green-400 font-semibold border-2 border-green-400 text-xl'
                >
                    <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200'
                        onClick={()=>item.qty>1? dispatch(DecrementQty(item.id)): 1}
                    >-</button>
                    <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center'>{item.qty}</span>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200'
                            onClick={()=>dispatch(IncrementQty(item.id))}>+</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-end gap-6'>
            <span className='text-green-400 text-xl font-semibold'>Rs. {item.price}/-</span>
            <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-400 cursor-pointer'
                onClick={()=>dispatch(RemoveItem(item.id))}
            />
        </div>
    </div>
  )
}

export default CartCard