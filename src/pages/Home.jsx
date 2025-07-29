import React, {useState} from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import {food_items} from '../food'

const Home = () => {
  const [filteredItems, setFilteredItems] = useState(food_items)

  const handleFilter = (category)=>{
    if(category==='All')
      setFilteredItems(food_items)
    else
      setFilteredItems(food_items.filter(item=>item.food_category===category))
  }
  return (
    <div className='w-full bg-slate-200 min-h-screen'>
        <Nav />
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
        </div>
        <div className='w-full flex flex-wrap px-5 gap-5 justify-center items-center py-8'>
          {filteredItems.map(item=>(
            <Card name={item.food_name} image={item.food_image} id={item.id} price={item.price} type={item.food_type} />
          ))}
        </div>
    </div>
  )
}

export default Home