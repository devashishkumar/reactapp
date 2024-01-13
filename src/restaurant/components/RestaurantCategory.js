import { useState } from "react";
import ItemListComponent from "./ItemList";

const RestaurantCategoryComponent = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>&darr;</span>
        </div>
        {showItems && <ItemListComponent items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategoryComponent;
