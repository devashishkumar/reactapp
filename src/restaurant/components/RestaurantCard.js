import { useContext } from "react";
import { RESTUARANT_CONSTANTS } from "./../../utils/constants";
import UserContext from "../../utils/UserContext";

const RestaurantCardComponent = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200;">
      <img className="rounded-lg" src={`${RESTUARANT_CONSTANTS.SWIGGY_DISHES_IMAGE_URL}${resData.info.cloudinaryImageId}`} />
      <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

// Higner Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (restaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCardComponent {...props}/>
      </div>
    );
  };

};

export default RestaurantCardComponent;
