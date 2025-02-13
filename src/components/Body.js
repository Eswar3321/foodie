import {useState, useEffect, useContext} from 'react'
import Restaurant, {withPromotedLabel} from "./Restaurant"
import Shimmer from "./Shimmer"
import { RESTAURANTS } from '../utilities/constants'
import useOnlineStatus from '../utilities/useOnlineStatus'
import UserContext from '../utilities/UserContext'
import { Link } from 'react-router-dom'

const Body = () => {
  let [searchInput, setsearchInput] = useState('');
  let [restDataList, setrestDataList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const RestaurantPromoted = withPromotedLabel(Restaurant);
  const {loggedInUser, setUserName} = useContext(UserContext);
  
  const fetchData = async () => {
    let data = await fetch(RESTAURANTS);
    const json = await data.json();
    const restList = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setrestDataList(restList);
    setFilteredList(restList);
  }

  useEffect(() => {
    fetchData();
  },[]);

  if(useOnlineStatus() === false) return <h1>Look like you are offline. Please check Internet Connection</h1>


  return filteredList.length === 0 ? (<Shimmer />) : (
  <div className="mt-8 flex flex-col m-10">
    <div className="flex gap-2 mb-6 items-center">
      <div className="filter-container">
        <button className="border-1 rounded-md px-1 py-0.5" onClick={() => {
          topRatedList = restDataList.filter((each) => each.info.avgRating > 4);
          setFilteredList(topRatedList);
        }}>Top Rated</button>
      </div>
      <div className="search-container">
        <input className="border-1 rounded-md px-4" type="search" placeholder='Search' value={searchInput} onChange={(e) => {
          e.preventDefault();
          setsearchInput(e.target.value);
          const filteredData = restDataList.filter((each) => (each.info.name.toLowerCase().includes(e.target.value.toLowerCase())));
          setFilteredList(filteredData);
        }} />
      </div>
      <div className="user-name">
        <label htmlFor="">User Name:</label>
        <input type="text" placeholder='User Name' className="border-1 rounded-md px-2 ml-4" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>        
      </div>
    </div>
    <div className="restaurants-container mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-6">
      {filteredList.map((eachRestaurant) => (        
        <Link className="card-link flex" key={eachRestaurant.info.id} to={"/restaurant/"+eachRestaurant.info.id}>
        {eachRestaurant.info.promoted ? <RestaurantPromoted resdata={eachRestaurant}/> : <Restaurant resdata={eachRestaurant}/>}
        </Link>
        ))}
    </div>
  </div>  
  )
}

export default Body
