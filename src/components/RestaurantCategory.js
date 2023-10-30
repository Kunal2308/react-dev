import React, { useState } from "react";
import { ResItemList } from "./ResItemList";

export const RestaurantCategory = ({
  data,
  showItems,
  setShowIndex,
  index,
}) => {
  // console.log(data);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className=" w-6/12 bg-gray-50 p-4 mx-auto my-4 rounded-sm shadow-lg ">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={() => {
            handleClick();
          }}
        >
          <span className=" font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ResItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
