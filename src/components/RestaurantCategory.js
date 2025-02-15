import { useState } from 'react'
import ItemsList from './ItemsList'

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
  const onToggle = () => {
    setShowIndex();
  }

  return (
    <div className="w-8/12 m-auto bg-gray-200 mb-2 shadow-gray-300">
      <div className="p-6">
        <div className="flex justify-between cursor-pointer" onClick={onToggle}>
          <h3 className="font-bold text-xl">{data.title} ({data.itemCards.length})</h3>
          <span>🔽</span>
        </div>
        <div>
          {showItems && <ItemsList itemCards={data.itemCards}/>}    
        </div>
      </div>
    </div>
  )
}

export default RestaurantCategory