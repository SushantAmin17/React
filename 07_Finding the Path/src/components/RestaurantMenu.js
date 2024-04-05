import { useState, useEffect } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId
    );
    const json = await data.json();

    setResInfo(json.data);
  };

  if(resInfo === null) return <ShimmerMenu />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <div>
        <h1>{name}</h1>
        <p className="menuCuisine">{cuisines.join(", ")}  :  {costForTwoMessage}</p>
        <ul className="menuList">
          <h2>Menu's</h2>
          {itemCards.map((item)=>(
              <li key={item.card.info.id}>
                  <span className="menuItemName">{item.card.info.name}</span><br />{"Rs "}
                  {item.card.info.price || item.card.info.finalPrice}
                  <br />
                  {item.card.info.description}
                  <br />
                  <br />
                  <hr />
              </li>
              
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;