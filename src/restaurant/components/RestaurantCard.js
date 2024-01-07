import { RESTUARANT_CONSTANTS } from "./../../utils/constants";

const RestaurantCardComponent = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200;">
      <img className="rounded-lg" src={`${RESTUARANT_CONSTANTS.SWIGGY_DISHES_IMAGE_URL}${resData.info.cloudinaryImageId}`} />
      <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCardComponent;
