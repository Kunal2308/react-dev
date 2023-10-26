import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { ShimmerUi } from "./ShimmerUi";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import { RES_API } from "../utils/constants";
const Body = (props) => {
  const { resList } = props;
  //Local state variable
  // Whenever state variable update, react triggers a reconciliation cycle(re-render the component)
  // const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [newResList, setNewResList] = useState([]);
  const onlineStatus = useOnlineStatus();
  const { listOfRestaurant, newResList } = useRestaurantList();
  // useEffect(() => {
  //   fetchAPI();
  // }, []);
  // const fetchAPI = async () => {
  //   const data = await fetch(RES_API);
  //   const jsonData = await data.json();
  //   // console.log(jsonData.data);
  //   setListOfRestaurant(
  //     jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );

  //   setNewResList(
  //     jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  //   // console.log(listOfRestaurant);
  // };
  if (onlineStatus === false) {
    return (
      <>
        <h1>
          Looks like you are ofline!! Please check you internet connection.
        </h1>
      </>
    );
  }
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
              //console.log(e.target.value);
              setSearchText(e.target.value);
              //   e.target.value === ""
              //     ? setNewResList(listOfRestaurant)
              //     : setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              //console.log(searchText);
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
              listOfRestaurant.filter((res) => res.info.avgRating > 4.5)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-conainer">
        {newResList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            className="link-style"
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resObj={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
