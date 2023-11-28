import React from "react";
import "./style/Smallcard.css";
import noimage from "../../assets/no-image.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";
import { ButtonLoader } from "./Loader";

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
  rejected,
  loadingFav,
  loadingInterest,
  loadingAccept,
  loadingReject,
}) => {
  return (
    <div className="sm-container">
      <Link to="/Dashboard/profileview" state={details}>
        <div className="sm-image">
          {details.images[0] ? (
            <img
              src={`https://drive.google.com/uc?id=${details.images[0]}`}
              alt=""
              srcset=""
            />
          ) : (
            <img src={noimage} alt="" srcset="" />
          )}
        </div>
      </Link>
      <div className="sm-details">
        <span>{details?.name}</span>
        <div className="sm-btn">
          {sentInterest && (
            <Button style={"normal"} onClick={() => sentInterest(details?.id)}>
              {loadingInterest !== details.id ? (interestList[details?.id] ? (
                <i class="fa-solid fa-heart"></i>
              ) : (
                <i class="fa-regular fa-heart"></i>
              )): <ButtonLoader />}
              {interestList[details?.id] ? "Remove" : "Send Interest"}
            </Button>
          )}
          {callNow && (
            <Button style={"normal"} onClick={() => callNow()}>
              <i class="fa-solid fa-phone"></i>Call Now
            </Button>
          )}
          {favoriteList && (
            <Button
              style={favoriteList[details?.id] ? "outline" : "normal"}
              onClick={() => favorite(details?.id)}
            >
              {loadingFav !== details.id ? (!favoriteList[details.id] ? (
                <i class="fa-regular fa-star"></i>
              ) : (
                <i class="fa-solid fa-star"></i>
              )): <ButtonLoader />}
            </Button>
          )}
          {acceptInterest && (
            <Button
              style={"normal"}
              onClick={() => acceptInterest(details?.id)}
            >
              {loadingAccept !== details.id ? (accepted ? (
                <i class="fa-regular fa-trash-can"></i>
              ) : (
                <i class="fa-solid fa-check"></i>
              )):<ButtonLoader />}
              {accepted ? "Remove" : "Accept"}
            </Button>
          )}
          {rejectInterest && (
            <Button
              style={"normal"}
              onClick={() => rejectInterest(details?.id)}
            >
              {loadingReject !== details.id ? (rejected ? (
                <i class="fa-regular fa-trash-can"></i>
              ) : (
                <i class="fa-solid fa-xmark"></i>
              )): <ButtonLoader/>}
              {rejected ? "Remove" : "Reject"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
