import { useEffect, useState } from "react";
import { RESTUARANT_CONSTANTS } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetch data
  useEffect(() => {
    fecthData();
  }, []);
  const fecthData = async () => {
    const data = await fetch(`${RESTUARANT_CONSTANTS.MENU_URL}${resId}`);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
