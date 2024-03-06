import { CDN_URL } from "../utils/constants";

const style = {
  backgroundColor: "#e8e9e8",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="res-card" style={style}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Rs {costForTwo / 100} For Two</h4>
    </div>
  );
};

export default RestaurantCard;
