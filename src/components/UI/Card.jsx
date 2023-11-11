import React, { useState } from "react";
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
  const [carousel, setCarousel] = useState(false);
  return (
    <>
      {carousel && (
        <div className="modal">
          <div className="close" onClick={() => setCarousel(false)}>
            <i class="fa-solid fa-xmark"></i>
          </div>
          <Carousel details={details} />
        </div>
      )}
      {!carousel && (
        <div className="profile__card">
          <div className="profile__card-image">
            <img
              src={`https://drive.google.com/uc?id=${details.image1}`}
              alt=""
              srcset=""
              onClick={() => setCarousel(true)}
            />
          </div>
          <div className="profile__top">
              <Button
                style={"glassy"}
                onClick={() => remove(details.name, details.house_name)}
              >
                <i class="fa-solid fa-xmark"></i> ignore
              </Button>
              <Button style={"glassy"} onClick={() => setCarousel(true)}>
                <i class="fa-regular fa-images"></i> 3
              </Button>
            </div>
          <div className="profile__card-content">
            
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
                <Button
                  style={"normal"}
                  onClick={() => sentInterest(details.id)}
                >
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
      )}
    </>
  );
};

export default Card;

export const Carousel = ({ details }) => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide ">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={`https://drive.google.com/uc?id=${details.image1}`}
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src={`https://drive.google.com/uc?id=${details.image2}`}
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src={`https://drive.google.com/uc?id=${details.image3}`}
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
