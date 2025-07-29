import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'

const Home = () => {
  return (
    <div className='w-full bg-slate-200 min-h-screen'>
        <Nav />
        <div className='flex justify-center items-center flex-wrap gap-5 w-[100%]'>
          {
            Categories.map(category=>{
              return <div key ={category.id} className='w-[140px] h-[150px] bg-white flex flex-col justify-start items-start 
              gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200
              cursor-pointer transition-all duration-500'>
              {category.icon}
              {category.name}
              </div>
            })
          }
        </div>
        <Card />
    </div>
  )
}

export default Home