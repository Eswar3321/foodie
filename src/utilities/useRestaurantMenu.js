import { useState,useEffect } from "react";

import { RES_MENU_URL } from "./constants"

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  
  const fetchMenuData = async () => {
    const data = await fetch(RES_MENU_URL+resId);
    const json = await data.json();
    setRestInfo(json.data);
  }

  useEffect(() => {
    fetchMenuData();
  },[]);

  return restInfo;
}

export default useRestaurantMenu;
