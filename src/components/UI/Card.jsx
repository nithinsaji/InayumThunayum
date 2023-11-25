import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./style/Card.css";
import noImage from '../../assets/no-image.jpg'

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
          <Carousel image={details.images} />
        </div>
      )}
      {!carousel && (
        <div className="profile__card">
          <div className="profile__card-image">
            <img
              src={`https://drive.google.com/uc?id=${details.images[0]}`}
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
                <i class="fa-regular fa-images"></i> {details?.images.length} / 3
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

export const Carousel = ({ image }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? image.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () =>{
    const isLastSlide = currentIndex === image.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (<>
    {image ? <div id="carouselExampleIndicators" class="carousel slide ">
      <div class="carousel-indicators">
        <div className="carousel-btn carousel-left" onClick={goToPrevious}>
        <i class="fa-solid fa-angle-left"></i>
        </div>
      <div className="carousel-btn carousel-right" onClick={goToNext}>
      <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={`https://drive.google.com/uc?id=${image[currentIndex]}`}
            alt="..."
          />
        </div>
      </div>
    </div>:
    <img
    src={noImage}
    class="d-block w-100"
    alt="..."
  />}
    </>
  );
};
