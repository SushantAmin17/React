import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // // Normal JS variable
  //  let listofRestaurantsJs = [
  //    {
  //      info: {
  //        id: "5932",
  //        name: "Burger King",
  //        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //        cuisines: ["Burgers", "American"],
  //        costForTwo: 350,
  //        avgRating: 4.3,
  //      },
  //    },
  //    {
  //      info: {
  //        id: "9865",
  //        name: "Dominoz",
  //        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //        cuisines: ["Pizzas"],
  //        costForTwo: 50000,
  //        avgRating: 3.8,
  //      },
  //    },
  //  ];

  const [listofRestaurants, setlistofRestaurant] = useState([]); //special variable

  //  Another way of using useState() variable

  // const arr = useState(resList);
  //   const [listofRestaurants, setlistofRestaurant] = arr  ;

  // const listofRestaurants = arr[0];
  // const setlistofRestaurant = arr[1];

  const [searchName, setsearchName] = useState("");

  console.log("Body");
  useEffect(() => {
    // console.log("This is use Effect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    // Optional Chaining
    setlistofRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-input" value={searchName} onChange={(res)=> setsearchName(res.info.name)}/>
          <button onClick={""}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter( 
              (res) => res.info.avgRating > 4
            );
            setlistofRestaurant(filteredList);
            // console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
