import {CDN_URL} from "../utilities/constants"
import {Link} from 'react-router-dom'


const Restaurant = (props) => {
  const {name, cloudinaryImageId, cuisines, avgRating, sla} = props.resdata.info;
  return (
    <div className="card w-60  p-4 rounded-3xl bg-amber-400">
      <div className="card-header">
      <img className="rounded-2xl h-60 " src={CDN_URL+cloudinaryImageId} alt="food-card"/>
      </div>
      <div className="card-body">
      <h3 className="my-4">{name}</h3>
      <p>{cuisines}</p>
      <p>
      <span className="rating">Rating: {avgRating}</span><span>{sla.deliveryTime} min</span>
      </p>
      <button>View more</button>
      </div>
    </div>
  )
}

export default Restaurant