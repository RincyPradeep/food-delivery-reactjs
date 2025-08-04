import React, {useState, useContext} from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import {food_items} from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import CartCard from '../components/CartCard'
import { useSelector } from 'react-redux'


const Home = () => {
  const {filteredItems, setFilteredItems, input, showCart, setShowCart} = useContext(dataContext)

  const handleFilter = (category)=>{
    if(category==='All')
      setFilteredItems(food_items)
    else
      setFilteredItems(food_items.filter(item=>item.food_category===category))
  }

   // redux
  let items = useSelector(state=>state.cart)

  let subtotal = items.reduce((total,item)=>total+item.qty * item.price,0)
  let deliveryFee = 20
  // let taxes = subtotal*0.05/100 
  let taxes = Math.round((subtotal*0.05/100)*100 )/100

  let total = Math.floor(subtotal + deliveryFee + taxes)

  return (
    <div className='w-full bg-slate-200 min-h-screen'>
        <Nav />
        {!input?
        <div className='flex justify-center items-center flex-wrap gap-5 w-[100%]'>
          {
            Categories.map(category=>{
              return <div key ={category.id} className='w-[140px] h-[150px] bg-white flex flex-col justify-start items-start 
              gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200
              cursor-pointer transition-all duration-500'
              onClick={()=>handleFilter(category.name)}>
              {category.icon}
              {category.name}
              </div>
            })
          }
        </div>:null
        }
        <div className='w-full flex flex-wrap px-5 gap-5 justify-center items-center py-8'>
          {filteredItems.length >0 ?
          filteredItems.map(item=>(
            <Card name={item.food_name} image={item.food_image} id={item.id} price={item.price} type={item.food_type} key={item.id}/>
          ))
          :<div className='text-center text-2xl text-green-500 font-semibold mt-5'>No dish found</div>
        }
        </div>

        {/* cart modal */}
        {
          showCart &&
          <div className={`w-full md:w-[40vw] h-[100%] top-0 right-0 bg-white fixed shadow-xl p-6 
            transition-all duration-500 flex flex-col items-center overflow-auto
            ${showCart?"translate-x-0":"translate-x-full"}`}>
            <header className='w-[100%] flex justify-between items-center'>
              <span className='text-green-400 text-[18px] font-semibold'>Order items</span>
              <RxCross2 className='w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600' 
               onClick={()=>setShowCart(false)}/>
            </header>
            {
              items.length >0 ?
              <>
                <div className='w-full mt-9 flex flex-col gap-8'>
                  {
                    items.map(item=>
                      <CartCard item={item} key={item.id} />
                    )
                  }
                </div>
                <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
                  <div className='flex justify-between items-center'>
                    <span className='text-lg text-gray-600 font-semibold'>Sub total</span>
                    <span className='text-lg text-green-400 font-semibold'>Rs.{subtotal}/-</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
                    <span className='text-lg text-green-400 font-semibold'>Rs.{deliveryFee}/-</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
                    <span className='text-lg text-green-400 font-semibold'>Rs.{taxes}/-</span>
                  </div>
                </div>
                <div className='w-full flex justify-between p-9'>
                  <span className='text-2xl text-gray-600 font-semibold'>Total</span>
                  <span className='text-2xl text-green-400 font-semibold'>Rs.{total}/-</span>
                </div>
                <button className='w-[80%] p-3 bg-green-400 text-white rounded-lg hover:bg-green-500 transition-all'>Place Order</button>
              </>
              :<div className='text-center text-2xl text-green-500 font-semibold mt-5'>Cart is empty</div>
            }
          </div>
        }
    </div>
  )
}

export default Home