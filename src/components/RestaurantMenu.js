import React, { useState, useEffect } from "react";
import { ShimmerUi } from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const res = await fetch(MENU_API + resId);
    const menuData = await res.json();
    setResInfo(menuData.data);
    console.log(menuData);
  };
  if (resInfo === null) return <ShimmerUi />;
  const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;
  const { itemCards } =
    resInfo.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3></h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}- Rs
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
