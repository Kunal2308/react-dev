import React, { useState } from "react";
import { ShimmerUi } from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <ShimmerUi />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ||
    resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categoryList =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categoryList);
  return (
    <div className=" text-center">
      <h1 className=" font-bold my-6 text-2xl">{name}</h1>
      <h3 className=" font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3></h3>
      {categoryList.map((categoryList, index) => (
        <RestaurantCategory
          key={categoryList?.card?.card?.title}
          data={categoryList?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            setShowIndex(index);
          }}
          index={index}
        />
      ))}
    </div>
  );
};
