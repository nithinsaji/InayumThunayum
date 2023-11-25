import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import UserService from "../../services/user.service";
import InterestService from "../../services/interest.service";
import FullScreenLoading from "../UI/Loading";
import { Navigate, useLocation } from "react-router-dom";

const UserHome = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [favoriteList, setFavoriteList] = useState(
    JSON.parse(localStorage.getItem("favorite")) || {}
  );
  const [interestList, setInterestList] = useState(
    JSON.parse(localStorage.getItem("interest")) || {}
  );

  const location = useLocation();

  const getProfile = async () => {
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await UserService.getProfileAPI(user?.id);
      await UserService.getFavoriteListAPI(user?.id);
      if (Object.keys(interestList).length === 0) {
        let interest = {};
        await InterestService.getAllInterestListAPI(user?.id).then(
          (response) => {
            if('The token has expired'.includes(response?.message)) return <Navigate to="/signin" state={{ from: location }} replace />
            response.interestList !== undefined &&
              response?.map((id) => {
                interest[id.id] = true;
              });
          }
        );
        localStorage.setItem("interest", JSON.stringify(interest));
        setInterestList(interest);
      }
    }
  };

  const getSearchResult = () => {
    getProfile();
    let searchResult = localStorage.getItem("searchResult");
    if (searchResult != null && searchResult != undefined) {
      searchResult = JSON.parse(searchResult);
      setResult(searchResult);
    }
  };

  const removeCard = (name, houseName) => {
    const cards = result.filter(
      (s) => s.name != name && s.house_name != houseName
    );
    console.log(cards);
    setResult(cards);
    localStorage.setItem("searchResult", JSON.stringify(cards));
  };

  const favorite = async (fav_id) => {
    setLoading(true);
    let user = localStorage.getItem("user");
    let searchResult = JSON.parse(localStorage.getItem("searchResult"));
    let favoriteArr = JSON.parse(localStorage.getItem("favoriteList"));

    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await UserService.favoriteAPI(user?.id, fav_id).then((res) => {
        const searchIndex = searchResult.findIndex(
          (value) => value.id === fav_id
        );
        const favoriteIndex = favoriteArr.findIndex((f) => f.id === fav_id);

        if (res?.added === true) {
          favoriteArr.push(searchResult[searchIndex]);
          localStorage.setItem("favoriteList", JSON.stringify(favoriteArr));
        } else {
          favoriteArr.splice(favoriteIndex, 1);
          localStorage.setItem("favoriteList", JSON.stringify(favoriteArr));
        }
        localStorage.setItem(
          "favorite",
          JSON.stringify({ ...favoriteList, [fav_id]: res?.added })
        );
        setFavoriteList({ ...favoriteList, [fav_id]: res?.added });
      });
    }
    setLoading(false);
  };

  const sentInterest = async (sendId) => {
    setLoading(true);
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await InterestService.sentInterestAPI(user?.id, sendId).then((res) => {
        localStorage.setItem(
          "interest",
          JSON.stringify({
            ...interestList,
            [sendId]: res?.status == "success" ? true : false,
          })
        );
        setInterestList({
          ...interestList,
          [sendId]: res?.status == "success" ? true : false,
        });
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getSearchResult();
    setLoading(false);
  }, []);

  return (
    <>
      {!loading ? (
        <div className="userhome__container">
          {result != null && result?.length != 0 ? (
            result?.map((details) => (
              <Card
                details={details}
                remove={removeCard}
                favorite={favorite}
                favoriteList={favoriteList}
                interestList={interestList}
                sentInterest={sentInterest}
              ></Card>
            ))
          ) : (
            <p>Sorry we did not found any users. Please do search again.</p>
          )}
        </div>
      ) : (
        <div className="fs-container">
          <FullScreenLoading />
        </div>
      )}
    </>
  );
};

export default UserHome;
