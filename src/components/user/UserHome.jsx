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
    // if('The token has expired'.includes(response?.message)) return <Navigate to="/signin" state={{ from: location }} replace />
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await UserService.getProfileAPI(user?.id);
      await UserService.getFavoriteListAPI(user?.id);
      if (Object.keys(interestList).length === 0)
        await InterestService.getAllInterestListAPI(user?.id)
    }
  };

  const getSearchResult = () => {
    getProfile();
    let searchResult = localStorage.getItem("searchResult");
    if (searchResult != null && searchResult != undefined) {
      searchResult = JSON.parse(searchResult);
      setResult(searchResult);
    }
    setLoading(false);
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
    let searchResult = JSON.parse(localStorage.getItem("searchResult"));
    let interestArr = JSON.parse(localStorage.getItem("interestList"));

    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await InterestService.sentInterestAPI(user?.id, sendId).then((res) => {

        const searchIndex = searchResult.findIndex(
          (value) => value.id === sendId
        );
        const interestIndex = interestArr.findIndex((f) => f.id === sendId);

        console.log(searchResult[searchIndex]);

        if (res?.status === 'success') {
          interestArr.push(searchResult[searchIndex]);
          localStorage.setItem("interestList", JSON.stringify(interestArr));
        } else {
          interestArr.splice(interestIndex, 1);
          localStorage.setItem("interestList", JSON.stringify(interestArr));
        }

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
            <p className="no-data">Sorry we did not found any users. Please do search again.</p>
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
