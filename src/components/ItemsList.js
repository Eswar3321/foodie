import { CDN_URL } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utilities/cardSlice";

const ItemsList = ({itemCards}) => {
  
  const dispatch = useDispatch(); 
  const handleAdd = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
      {itemCards.map((item) => (
        <div key={item?.card?.info.id} className=" flex justify-between items-center py-4 border-b-1 last:border-0">
          <div className="w-8/12">            
          <h3 className="font-bold text-2xl">{item?.card?.info?.name}</h3>
          <p className="my-2"><span className="font-bold text-xl">₹ {item?.card?.info?.price/100}</span></p>          
          <p><span >✳ 4.2</span></p>                   
          <p>{item?.card?.info?.description}</p>
          </div>
          <div className="text-center relative flex justify-center pb-6">
            <img className="w-48 h-48 rounded-2xl" src={CDN_URL + item?.card?.info?.imageId} alt="item-image" />
            <button onClick={() => handleAdd(item)} className="px-8 py-2 text-green-500 bold text-3xl bg-white rounded-2xl border-gray-100 absolute shaow-lg bottom-0">Add</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;