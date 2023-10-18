import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = (props) => {
  const { resList } = props;
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log(listOfRestaurant.info);
            setListOfRestaurant(
              listOfRestaurant.filter((res) => res.info.avgRating > 4.5)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-conainer">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
