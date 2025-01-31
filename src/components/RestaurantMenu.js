import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utilities/constants"


const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const {resId}  = useParams();

  const fetchMenuData = async () => {
    const data = await fetch(RES_MENU_URL+resId);
    const json = await data.json();
    setRestInfo(json.data);
  }

  useEffect(() => {
    fetchMenuData();
  },[]);

  if (restInfo === null) return (<Shimmer/>)
  const {name, id, city, totalRatingsString, costForTwoMessage, areaName, locality, cuisines, avgRating} = restInfo?.cards[2]?.card?.card?.info;
  const itemCards = restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards;
  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <div className="menu-card">
        <span>`{avgRating} {(totalRatingsString)}`</span>
        <span>{costForTwoMessage}</span>
        <p>{cuisines}</p>
        <p>Outlet<span>{areaName}</span></p>
        <p>Closed & Not delivering<span>`to {city}, {locality}, India`</span></p>
      </div>
      <div className="menu-items">
        {
          itemCards.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))
        }
      </div>
    </div>
  )
}

export default RestaurantMenu
