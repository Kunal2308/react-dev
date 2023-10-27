import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resObj } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resObj?.info;
  return (
    <div className="m-4 p-4 w-[220px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className=" rounded-lg object-{fit} w-[188px] h-[124px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className=" font-bold py-2 text-l">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
