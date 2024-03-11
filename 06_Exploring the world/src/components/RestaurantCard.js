import { CDN_URL } from "../utils/constants";

const style = {
    backgroundColor : "#e8e8e8"
}

const RestaurantCard = (props) => {
 
    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating} = resData?.info;

    return (
        <div className="res-card" style={style}>
            <img className="res-logo" alt="res-logo" 
            src= {CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3> 
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCard;