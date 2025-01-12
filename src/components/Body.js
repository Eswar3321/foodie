import {useState, useEffect} from 'react'
import Restaurant from "./Restaurant"
import Shimmer from "./Shimmer"

const Body = () => {
  let [searchInput, setsearchInput] = useState('');
  let [restDataList, setrestDataList] = useState([]);
  const[filteredList, setFilteredList] = useState([]);
  
  const fetchData = async () => {
    let data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.37240&lng=78.43780&carousel=true&third_party_vendor=1");
    const json = await data.json();
    console.log(data);
    console.log(json);
    const restList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setrestDataList(restList);
    setFilteredList(restList)
  }

  useEffect(() => {
    fetchData();
  },[]);

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
      {filteredList.map(eachRestaurant => <Restaurant key={eachRestaurant.info.id} resdata={eachRestaurant}/>)}
    </div>
  </div>  
  )
}

export default Body
