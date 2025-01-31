import {useState, useEffect} from 'react'
import Restaurant from "./Restaurant"
import Shimmer from "./Shimmer"
import { RESTAURANTS } from '../utilities/constants'
import { Link } from 'react-router-dom'

const Body = () => {
  let [searchInput, setsearchInput] = useState(0);
  let [restDataList, setrestDataList] = useState([]);
  const[filteredList, setFilteredList] = useState([]);
  
  const fetchData = async () => {
    let data = await fetch(RESTAURANTS);
    const json = await data.json();
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const restList = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setrestDataList(restList);
    setFilteredList(restList)
  }

  useEffect(() => {
    fetchData();
  },[]);
  console.log(filteredList);
  return filteredList.length === 0 ? (<Shimmer />) : (
  <div className="body-container">
    <div className="filter-search-container">
      <div className="filter-container">
        <button onClick={() => {
          topRatedList = restDataList.filter((each) => each.info.avgRating > 4);
          setFilteredList(topRatedList);
        }}>Top Rated</button>
      </div>
      <div className="search-container">
        <input type="search" placeholder='Search' value={searchInput} onChange={(e) => {
          e.preventDefault();
          setsearchInput(e.target.value);
          const filteredData = restDataList.filter((each) => (each.info.name.toLowerCase().includes(e.target.value.toLowerCase())));
          setFilteredList(filteredData);
        }} />
      </div>
    </div>
    <div className="restaurants-container">
      {filteredList.map((eachRestaurant) => (
        <Link className="card-link" key={eachRestaurant.info.id} to={"/restaurant/"+eachRestaurant.info.id}>
        <Restaurant resdata={eachRestaurant}/>
        </Link>
        ))}
    </div>
  </div>  
  )
}

export default Body
