import React from "react";
import "./style/Smallcard.css";
import bride1 from "../../assets/bride2.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

const SmallCard = ({
  favorite,
  details,
  favoriteList,
  interestList,
  sentInterest,
}) => {
  return (
    <div className="sm-container">
      <Link to="/Dashboard/profileview" state={details}>
      <div className="sm-image">
        <img src={bride1} alt="" srcset="" />
      </div>
      </Link>
      <div className="sm-details">
        <span>{details?.id}</span>
        <div className="sm-btn">
          <Button style={"normal"} onClick={() => sentInterest(details?.id)}>
            <i class="fa-regular fa-heart"></i>
            {interestList[details?.id] ? "Remove" : "Send Interest"}
          </Button>
          <Button
            style={favoriteList[details?.id] ? "glassy" : "normal"}
            onClick={() => favorite(details?.id)}
          >
            <i class="fa-regular fa-star"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
