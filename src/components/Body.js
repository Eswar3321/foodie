import {useState, useEffect} from 'react'
import Restaurant from "./Restaurant"
import Shimmer from "./Shimmer"
import { RESTAURANTS } from '../utilities/constants'
import useOnlineStatus from '../utilities/useOnlineStatus'
import { Link } from 'react-router-dom'

const Body = () => {
  let [searchInput, setsearchInput] = useState('');
  let [restDataList, setrestDataList] = useState([]);
  const[filteredList, setFilteredList] = useState([]);
  
  const fetchData = async () => {
    let data = await fetch(RESTAURANTS);
    console.log(data);
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const restList = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setrestDataList(restList);
    setFilteredList(restList)
  }

  useEffect(() => {
    fetchData();
  },[]);
  console.log(filteredList);

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
    </div>
    <div className="restaurants-container mt-6 flex gap-4 flex-wrap">
      {filteredList.map((eachRestaurant) => (
        <Link className="card-link flex" key={eachRestaurant.info.id} to={"/restaurant/"+eachRestaurant.info.id}>
        <Restaurant resdata={eachRestaurant}/>
        </Link>
        ))}
    </div>
  </div>  
  )
}

export default Body
