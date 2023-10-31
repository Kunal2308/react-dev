import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export const ResItemList = ({ items }) => {
  //console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className=" flex flex-col">
              <span className=" font-bold">{item.card.info.name}</span>
              <span>
                ₹{item.card.info.price / 100}
                {/* {item.card.info.price
                  ? item.card.info.price / 100
                  : item.info.defaultPrice / 100} */}
              </span>
            </div>
          </div>
          <div className="w-3/12">
            <div className=" text-center">
              {item.card.info.imageId ? (
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className=" w-28 rounded-sm"
                ></img>
              ) : (
                ""
              )}
              <button
                onClick={() => {
                  handleAddItem(item);
                }}
                className=" px-3 py-1 rounded-lg bg-gray-200 border-solid border-2 font-bold text-green-400"
              >
                ADD+
              </button>
            </div>
          </div>
        </div>
      ))}
      <h1></h1>
    </div>
  );
};
