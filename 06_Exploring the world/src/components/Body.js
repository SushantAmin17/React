import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect } from "react";
import resList from "../utils/mockData";

const Body = () => {

  const [listofRestaurants, setlistofRestaurant] = useState(resList);  //special variable

  
  //  Another way of using useState() variable
  
  // const arr = useState(resList);
  //   const [listofRestaurants, setlistofRestaurant] = arr  ;  
  
  // const listofRestaurants = arr[0];
  // const setlistofRestaurant = arr[1];


useEffect(()=>{
  console.log("This is use Effect");
},[]);


  //  // Normal JS variable
  //   let listofRestaurantsJs = [
  //     {
  //       info: {
  //         id: "5932",
  //         name: "Burger King",
  //         cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //         cuisines: ["Burgers", "American"],
  //         costForTwo: 350,
  //         avgRating: 4.3,
  //       },
  //     },
  //     {
  //       info: {
  //         id: "9865",
  //         name: "Dominoz",
  //         cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //         cuisines: ["Pizzas"],
  //         costForTwo: 50000,
  //         avgRating: 3.8,
  //       },
  //     },
  //   ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => (res.info.avgRating > 4)
            );
            setlistofRestaurant(filteredList);
            console.log(filteredList);
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
