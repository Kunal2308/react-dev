import RestaurantCard, { topRatedRestaurant } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { ShimmerUi } from "./ShimmerUi";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import { RES_API } from "../utils/constants";
import UserContext from "../utils/UserContext";
const Body = (props) => {
  const { resList } = props;
  //Local state variable
  // Whenever state variable update, react triggers a reconciliation cycle(re-render the component)
  // const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [newResList, setNewResList] = useState([]);
  const onlineStatus = useOnlineStatus();
  const { listOfRestaurant, newResList, setListOfRestaurant, setNewResList } =
    useRestaurantList();
  console.log(listOfRestaurant);
  const RestaurantWithTopRating = topRatedRestaurant(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  // useEffect(() => {
  //   fetchAPI();
  // }, []);
  // const fetchAPI = async () => {
  //   const data = await fetch(RES_API);
  //   const jsonData = await data.json();
  //    console.log(jsonData.data);
  //   setListOfRestaurant(
  //     jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );

  //   setNewResList(
  //     jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  //    console.log(listOfRestaurant);
  // };
  // console.log(listOfRestaurant);

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
      <div className=" flex items-center">
        <div className="p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
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
            className="px-4 py-2 m-4 bg-green-100 rounded-lg "
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
        <div className="p-4">
          <button
            className="px-4 py-2 m-4 bg-gray-100 rounded-lg "
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
        <div className="p-4">
          <label className="px-2">User Name:</label>
          <input
            className="p-1 border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap m-10">
        {newResList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            className="link-style"
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4 ? (
              <RestaurantWithTopRating resObj={restaurant} />
            ) : (
              <RestaurantCard resObj={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
