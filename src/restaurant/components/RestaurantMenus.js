import { useEffect, useState } from "react";
import ShimmerComponent from "../../common/ShimmerComponent";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategoryComponent from "./RestaurantCategory";

const RestaurantMenusComponent = () => {
  const { resId } = useParams();
  // const [resInfo, setResInfo] = useState(null);

  // useEffect(() => {
  //   fecthData();
  // }, []);
  // const fecthData = async () => {
  //   const data = await fetch(`${RESTUARANT_CONSTANTS.MENU_URL}${resId}`);
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };

  // custom hook
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <ShimmerComponent />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines}-{costForTwoMessage}
      </p>

      <ul>
        {categories.map((category, index) => {
          return (
            <RestaurantCategoryComponent
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index === showIndex && true}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenusComponent;
