import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import bride1 from "../../assets/bride1.jpg";
import UserService from "../../services/user.service";
import InterestService from "../../services/interest.service";

const UserHome = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [favoriteList, setFavoriteList] = useState(
    JSON.parse(localStorage.getItem("favorite")) || {}
  );
  const [interestList, setInterestList] = useState(
    JSON.parse(localStorage.getItem("interest")) || {}
  );

  const getProfile = async () => {
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await UserService.getProfileAPI(user?.id);
      await UserService.getFavoriteListAPI(user?.id);
    }
  };

  const getSearchResult = () => {
    setLoading(true);
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
    let user = localStorage.getItem("user");
    let searchResult = JSON.parse(localStorage.getItem("searchResult"));
    let favoriteList = JSON.parse(localStorage.getItem("favoriteList"));

    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await UserService.favoriteAPI(user?.id, fav_id).then((res) => {
        const searchIndex = searchResult.findIndex(
          (value) => value.id === fav_id
        );
        const favoriteIndex = favoriteList.findIndex((f) => f.id === fav_id);
        
        if(res.added === true){
          favoriteList.push(searchResult[searchIndex])
           localStorage.setItem(
              "favoriteList",
              JSON.stringify(favoriteList)
            )
            }else{ 
              favoriteList.splice(favoriteIndex, 1);
              localStorage.setItem(
              "favoriteList",
              JSON.stringify(favoriteList)
            );}
        localStorage.setItem(
          "favorite",
          JSON.stringify({ ...favoriteList, [fav_id]: res.added })
        );
        setFavoriteList({ ...favoriteList, [fav_id]: res.added });
      });
    }
  };

  const sentInterest = async (sendId) => {
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await InterestService.sentInterestAPI(user?.id, sendId).then((res) => {
        localStorage.setItem(
          "interest",
          JSON.stringify({
            ...interestList,
            [sendId]: res.status == "success" ? true : false,
          })
        );
        setInterestList({
          ...interestList,
          [sendId]: res.status == "success" ? true : false,
        });
      });
    }
  };

  useEffect(() => {
    getSearchResult();
  }, []);

  return (
    <div className="userhome__container">
      {!loading && result != null && result?.length != 0 ? (
        result?.map((details) => (
          <Card
            src={bride1}
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
  );
};

export default UserHome;
