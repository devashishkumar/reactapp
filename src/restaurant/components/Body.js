import RestaurantCardComponent from "./RestaurantCard";
import ShimmerComponent from "./../../common/ShimmerComponent";
import { useState, useEffect } from "react";
import { RESTUARANT_CONSTANTS } from "./../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const BodyComponent = () => {
  // normal variable
  // let restaurantLists1 = JSON.parse(JSON.stringify(resList));

  // local state variable
  // const [restaurantLists, filterTopRatedRestaurant] =
  //   useState(restaurantLists1);
  const [restaurantLists, filterRestaurant] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect is a callback function calls after component rendering
  useEffect(() => {
    fecthData();
  }, []);
  const fecthData = async () => {
    const data = await fetch(RESTUARANT_CONSTANTS.SWIGGY_URL);
    const serviceData = await data.json();
    const filterData = serviceData.data.cards.filter(
      (res) => res && res.card && res.card.card && res.card.card.info
    );
    const sData = [];
    filterData.forEach((f) => {
      sData.push(f.card.card);
    });
    filterRestaurant(sData);
    setFilteredData(sData);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline! Please check your internet connection</h1>
    );
  }

  return restaurantLists.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterRes = restaurantLists.filter((res) =>
                res.info.name.includes(searchText)
              );
              setFilteredData(filterRes);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredData.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCardComponent resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
