import {CDN_URL} from "../utilities/constants"

const Restaurant = (props) => {
  const {name, cloudinaryImageId, cuisines, avgRating, sla} = props.resdata.info;
  return (
    <div className="card">
      <div className="card-header">
      <img src={CDN_URL+cloudinaryImageId} alt="food-card"/>
      </div>
      <div className="card-body">
      <h4>{name}</h4>
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