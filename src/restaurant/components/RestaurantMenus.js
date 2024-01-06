import { useEffect, useState } from "react";
import { RESTUARANT_CONSTANTS } from "../../utils/constants";
import ShimmerComponent from "../../common/ShimmerComponent";
import { useParams } from "react-router-dom";

const RestaurantMenusComponent = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fecthData();
  }, []);
  const fecthData = async () => {
    const data = await fetch(`${RESTUARANT_CONSTANTS.MENU_URL}${resId}`);
    const json = await data.json();
    setResInfo(json.data);
  };
  if (resInfo === null) return <ShimmerComponent />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>{costForTwoMessage}</h2>

      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - {item.card.info.price / 100}
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
};

export default RestaurantMenusComponent;
