import {CDN_URL} from "../utilities/constants"


const Restaurant = (props) => {
  const {name, cloudinaryImageId, cuisines, avgRating, sla} = props.resdata.info;
  return (
    <div className="card w-60 flex flex-col  p-4 rounded-3xl bg-amber-400">
      <div className="card-header">
      <img className="rounded-2xl h-60 " src={CDN_URL+cloudinaryImageId} alt="food-card"/>
      </div>
      <div className="flex flex-col card-body text-over text-black">
      <h3 className="flex-auto my-4 text-2xl">{name}</h3>
      <p>{cuisines.join(', ')}</p>
      <p>
      <span className="rating">Rating: {avgRating}</span><span>{sla.deliveryTime} min</span>
      </p>
      <button>View more</button>
      </div>
    </div>
  )
}

export const withPromotedLabel = (Restaurant) => {
  return(props) => {
    return (
      <div className="flex">
        <span className="absolute bg-white text-black rounded-md p-2 ml-2 mt-2">Promoted</span>
        <Restaurant {...props}/>
      </div>
    )
  };
};

export default Restaurant