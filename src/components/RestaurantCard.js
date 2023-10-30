import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resObj } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resObj?.info;
  return (
    <div className="m-4 p-4 w-[252px] h-[372px] bg-gray-100 rounded-lg hover:bg-gray-200 shadow-lg">
      <img
        className=" rounded-lg object-{fit} w-[188px] h-[124px] ml-4"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="ml-4">
        <h3 className=" font-bold py-2 text-l">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        <h4>ETA:{resObj?.info.sla.deliveryTime}min.</h4>
      </div>
    </div>
  );
};

export const topRatedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-black text-white rounded-lg p-1 m-2">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
