import { RESTUARANT_CONSTANTS } from "../../utils/constants";

const ItemListComponent = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <div
              key={item.card.info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span>
                    {" "}
                    - &#8377;{" "}
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button className="p-2 mx-5 rounded-lg bg-black text-white shadow-lg">
                    Add +
                  </button>
                </div>
                <img
                  src={`${RESTUARANT_CONSTANTS.SWIGGY_DISHES_IMAGE_URL}${item.card.info.imageId}`}
                />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemListComponent;
