import { RESTUARANT_CONSTANTS } from "./../../utils/constants";

const restaurantCardStyle = {
  backgroundColor: "#f0f0f0"
};

const RestaurantCardComponent = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={restaurantCardStyle}>
      <img className="res-logo" src={RESTUARANT_CONSTANTS.BIRYANI_URL} />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCardComponent;
