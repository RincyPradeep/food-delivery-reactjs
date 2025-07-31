import React, { useState, createContext } from 'react'
import { food_items } from '../food'

export const dataContext = createContext()

const UserContext = ({children}) => {
    let [filteredItems, setFilteredItems] = useState(food_items)
    let [input, setInput] = useState("")
    let [showCart, setShowCart] = useState(false)
    let data = {
        input,
        setInput,
        filteredItems,
        setFilteredItems,
        showCart,
        setShowCart
    }
  return (
    <div>
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext