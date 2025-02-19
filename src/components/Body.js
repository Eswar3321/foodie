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
    setrestDataList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  useEffect(() => {
    fetchData();
  },[]);

  if(useOnlineStatus() === false) return <h1>Look like you are offline. Please check Internet Connection</h1>


  return filteredList.length === 0 ? (<Shimmer />) : (
  <div className="mt-8 flex flex-col px-4 md:px-8">
    <div className="flex flex-col gap-2 mb-4 items-start">
      <div className="filter-container">
        <button className="border-1 rounded-md px-1 py-0.5" onClick={() => {
          const topRatedList = restDataList.filter((each) => each.info.avgRating > 4.5);
          setFilteredList(topRatedList);
        }}>Top Rated</button>
      </div>
      <div className="search-container">
        <input className="border-1 rounded-md px-4" type="search" placeholder='Search' value={searchInput} data-testid="searchInput" onChange={(e) => {
          e.preventDefault();
          setsearchInput(e.target.value);          
        }} />
        <button className="border border-black rounded-lg px-2 bg-gray-200 ml-2 cursor-pointer" onClick={() => {
          const filteredData = restDataList.filter((each) => (each.info.name.toLowerCase().includes(searchInput.toLowerCase())));
          setFilteredList(filteredData);
        }}>Search</button>
      </div>
      <div className="user-name">
        <label htmlFor="">User Name:</label>
        <input type="text" placeholder='User Name' className="border-1 rounded-md px-2 ml-4" data-testid="userNameInput" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>        
      </div>
    </div>
    <div className="restaurants-container mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 xl:grid-cols-6">
      {filteredList.map((eachRestaurant) => (        
        <Link className="card-link contents" key={eachRestaurant.info.id} to={"/restaurant/"+eachRestaurant.info.id}>
        {eachRestaurant.info.promoted ? <RestaurantPromoted resdata={eachRestaurant.info}/> : <Restaurant resdata={eachRestaurant.info}/>}
        </Link>
        ))}
    </div>
  </div>  
  )
}

export default Body
