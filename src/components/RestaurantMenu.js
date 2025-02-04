import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory"
import useRestaurantMenu from '../utilities/useRestaurantMenu'


const RestaurantMenu = () => {
  const {resId}  = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const restInfo = useRestaurantMenu(resId);
  
  if (restInfo === null) return (<Shimmer/>)
  const {name, id, city, totalRatingsString, costForTwoMessage, areaName, locality, cuisines, avgRating} = restInfo?.cards[2]?.card?.card?.info;
  const itemCards = restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards;
  const categories = restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === 
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <div className="restaurant-menu">
      <div className="menu-card text-center">
      <h1 className="font-bold mt-6 mb-2 text-2xl">{name}</h1>
      <p className="font-bold mb-6">{cuisines.join(', ')}</p>
      </div>
      <div className="menu-items">
        {
          categories.map((category, index) => (
            <RestaurantCategory 
            key={category?.card?.card.title} 
            data={category?.card?.card} 
            showItems={index===showIndex && true}
            setShowIndex = {() => setShowIndex((prevIndex) => prevIndex===index ? 'null' : index )}/>
          ))
        }
      </div>
    </div>
  )
}

export default RestaurantMenu
