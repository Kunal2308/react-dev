import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { ShimmerUi } from "./ShimmerUi";
const Body = (props) => {
  const { resList } = props;
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [newResList, setNewResList] = useState([]);
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    //console.log(jsonData);
    setListOfRestaurant(
      jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setNewResList(
      jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return listOfRestaurant.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="serach">
          <input
            type="text"
            className="input-box"
            value={searchText}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchText(e.target.value);
              //   e.target.value === ""
              //     ? setNewResList(listOfRestaurant)
              //     : setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchText);
              setNewResList(
                listOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //console.log(listOfRestaurant.info);
            setNewResList(
              listOfRestaurant.filter((res) => res.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-conainer">
        {newResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
