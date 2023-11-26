import React from "react";
import "./style/Smallcard.css";
import noimage from "../../assets/no-image.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

const SmallCard = ({
  favorite,
  details,
  favoriteList,
  interestList,
  sentInterest,
  acceptInterest,
  rejectInterest,
  callNow,
  accepted,
  rejected
}) => {
  return (
    <div className="sm-container">
      <Link to="/Dashboard/profileview" state={details}>
      <div className="sm-image">
        {details.images[0] ? <img src={`https://drive.google.com/uc?id=${details.images[0]}`} alt="" srcset="" />: <img src={noimage} alt="" srcset="" />}
      </div>
      </Link>
      <div className="sm-details">
        <span>{details?.name}</span>
        <div className="sm-btn">
          {sentInterest && <Button style={"normal"} onClick={() => sentInterest(details?.id)}>
            <i class="fa-regular fa-heart"></i>
            {interestList[details?.id] ? "Remove" : "Send Interest"}
          </Button>}
         { callNow && <Button style={"normal"} onClick={() => callNow()}>
                  <i class="fa-solid fa-phone"></i>Call Now
                </Button>}
          {favoriteList && <Button
            style={favoriteList[details?.id] ? "outline" : "normal"}
            onClick={() => favorite(details?.id)}
          >
            {!favoriteList[details.id] ? <i class="fa-regular fa-star"></i>:
                  <i class="fa-solid fa-star"></i>}
          </Button>}
          {acceptInterest && <Button style={"normal"} onClick={() => acceptInterest(details?.id)}>
            <i class="fa-regular fa-heart"></i>
            {accepted ? "Remove" : "Accept"}
          </Button>}
          {rejectInterest && <Button style={"normal"} onClick={() => rejectInterest(details?.id)}>
            <i class="fa-regular fa-heart"></i>
            {rejected ? "Remove" : "Reject"}
          </Button>}
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
