import React, { useState, createContext } from 'react'
import { food_items } from '../food'

export const dataContext = createContext()

const UserContext = ({children}) => {
    const [filteredItems, setFilteredItems] = useState(food_items)
    let [input, setInput] = useState("")
    let data = {
        input,
        setInput,
        filteredItems,
        setFilteredItems
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