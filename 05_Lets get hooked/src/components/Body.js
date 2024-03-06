import RestaurantCard from "./RestaurantCard";

// not using keys (not acceptabale) <<<< index as key <<< unique id (best practice) 

const Body = () => {
    let listofRestaurants = [
        {
            info:{
                id: "9864",
                name: "Pizza Hut",
                cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
                cuisines: ["Pizzas"],
                costForTwo: 50000,
                avgRating: 4.1, 
            }
        },
        {
            info:{
                id: "9865",
                name: "Pizza Hut",
                cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
                cuisines: ["Pizzas"],
                costForTwo: 50000,
                avgRating: 3.8, 
            }
        }
    ];
    
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() =>{
                listofRestaurants = listofRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                console.log(listofRestaurants);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
           {listofRestaurants.map((restaurant)=>{
            return (
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            )
           })}
        </div>
      </div>
    );        
  };


  export default Body;

  