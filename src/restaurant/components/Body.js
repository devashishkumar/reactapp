import RestaurantCardComponent from "./RestaurantCard";
import ShimmerComponent from "./../../common/ShimmerComponent";
import { useState, useEffect } from "react";
import { RESTUARANT_CONSTANTS } from "./../../utils/constants";

const BodyComponent = () => {
  // normal variable
  // let restaurantLists1 = JSON.parse(JSON.stringify(resList));

  // local state variable
  // const [restaurantLists, filterTopRatedRestaurant] =
  //   useState(restaurantLists1);
  const [restaurantLists, filterTopRatedRestaurant] = useState([]);

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
    filterTopRatedRestaurant(sData);
  };

  return (
    restaurantLists.length === 0 ? <ShimmerComponent /> : <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const list = JSON.parse(JSON.stringify(resList));
            const filterData = list.filter((res) => res.info.avgRating > 4.3);
            filterTopRatedRestaurant(filterData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantLists.map((restaurant) => {
          return (
            <RestaurantCardComponent
              key={restaurant.info.id}
              resData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;