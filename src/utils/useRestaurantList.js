import { useState, useEffect } from "react";

import { RES_API } from "../utils/constants";
const useRestaurantList = (resId) => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [newResList, setNewResList] = useState([]);
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = async () => {
    const data = await fetch(RES_API);
    const jsonData = await data.json();
    // console.log(jsonData.data);
    setListOfRestaurant(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setNewResList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(listOfRestaurant);
  };
  return { listOfRestaurant, newResList };
};
export default useRestaurantList;
