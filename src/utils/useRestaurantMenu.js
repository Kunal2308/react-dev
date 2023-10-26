import { useState, useEffect } from "react";

import { MENU_API } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const res = await fetch(MENU_API + resId);
    const menuData = await res.json();
    setResInfo(menuData.data);
    console.log(resInfo);
  };
  console.log(resInfo);
  return resInfo;
};
export default useRestaurantMenu;
