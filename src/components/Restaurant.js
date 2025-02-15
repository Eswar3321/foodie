import {CDN_URL} from "../utilities/constants"


const Restaurant = (props) => {
  const {resdata} = props;
  const {name, cloudinaryImageId, cuisines, avgRating, sla} = resdata;
  return (
    <div data-testid="resCard" className="card flex flex-col  p-4 rounded-3xl bg-gray-300">
      <div className="card-header">
      <img className="rounded-2xl aspect-4/3" src={CDN_URL+cloudinaryImageId} alt="food-card"/>
      </div>
      <div className="flex flex-col flex-1 card-body text-over text-black">
      <h3 className="my-2 text-xl">{name}</h3>
      <p>{cuisines.join(', ')}</p>
      <p className="flex-grow">
      <span className="rating">Rating: {avgRating}</span><span className="block">{sla.deliveryTime} min</span>
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