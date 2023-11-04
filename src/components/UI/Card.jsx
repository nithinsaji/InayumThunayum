import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./style/Card.css";

const Card = ({
  favorite,
  details,
  remove,
  favoriteList,
  interestList,
  sentInterest,
}) => {
  return (
    <>
      <div className="profile__card">
        <div className="profile__card-image">
          <img
            src={`https://drive.google.com/uc?id=${details.image1}`}
            alt=""
            srcset=""
          />
        </div>
        <div className="profile__card-content">
          <div className="profile__top">
            <Button
              style={"glassy"}
              onClick={() => remove(details.name, details.house_name)}
            >
              <i class="fa-solid fa-xmark"></i> ignore
            </Button>
            <Button style={"glassy"}>
              <i class="fa-regular fa-images"></i> 3
            </Button>
          </div>
          <div className="profile__bottom">
            <Link to="/Dashboard/profileview" state={details}>
              <div className="profile__desc">
                <h1>{details.name}</h1>
                <h4>
                  {details.ocupation} | {details.qualification}
                </h4>
                <h4>Age : {details.age}</h4>
                <h4>
                  Height : {details.height} | Weight : {details.weight}
                </h4>
                <h4>House Name : {details.house_name}</h4>
              </div>
            </Link>
            <div className="profile__btn">
              <Button style={"normal"}>
                <i class="fa-solid fa-phone"></i>Call Now
              </Button>
              <Button style={"normal"} onClick={() => sentInterest(details.id)}>
                <i class="fa-regular fa-heart"></i>
                {interestList[details.id] ? "Remove" : "Send Interest"}
              </Button>
              <Button
                style={favoriteList[details.id] ? "glassy" : "normal"}
                onClick={() => favorite(details.id)}
              >
                <i class="fa-regular fa-star"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
