import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import InterestService from "../../services/interest.service";
import UserService from "../../services/user.service";
import FullScreenLoading from "../UI/Loading";
import SmallCard from "../UI/SmallCard";
import "./style/Shortlist.css";

const Shortlist = () => {
  const [loading, setLoading] = useState(true);
  const [loadingInterest, setLoadingInterest] = useState(0);
  const [loadingFav, setLoadingFav] = useState(0);
  const [result, setResult] = useState(null);
  const [favoriteList, setFavoriteList] = useState(
    JSON.parse(localStorage.getItem("favorite")) || {}
  );
  const [interestList, setInterestList] = useState(
    JSON.parse(localStorage.getItem("interest")) || {}
  );

  const navigate = useNavigate();

  const validateToken = (message) => {
    if(message === 'The token has expired', message === 'The token is not vaild') {
        toast.error(message);
        localStorage.clear();
        navigate('/signin')
    }
  }

  const getFavoriteList = async () => {
    setLoading(true);
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await UserService.getFavoriteListAPI(user?.id).then((res) => {
    validateToken(res?.message)
        setResult(res);
      });
    }
    setLoading(false);
  };

  const favorite = async (fav_id) => {
    setLoadingFav(fav_id)
    let user = localStorage.getItem("user");
    let searchResult = JSON.parse(localStorage.getItem("searchResult"));
    let favoriteList = JSON.parse(localStorage.getItem("favoriteList")) || [];

    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await UserService.favoriteAPI(user?.id, fav_id).then((res) => {
    validateToken(res?.message)
        const searchIndex = searchResult?.findIndex(
          (value) => value.id === fav_id
        );
        const favoriteIndex = favoriteList?.findIndex((f) => f.id === fav_id);
        
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
            setResult(favoriteList)
        localStorage.setItem(
          "favorite",
          JSON.stringify({ ...favoriteList, [fav_id]: res.added })
        );
        setFavoriteList({ ...favoriteList, [fav_id]: res.added });
        setLoadingFav(0)
      });
    }
  };

  const sentInterest = async (sendId) => {
    setLoadingInterest(sendId)
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await InterestService.sentInterestAPI(user?.id, sendId).then((res) => {
    validateToken(res?.message)
        if(!res?.message.includes("cannot remove request")){
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
      }else{
        toast.error(res?.message)
      }
        setLoadingInterest(0)
      });
    }
  };

  useEffect(() => {
    getFavoriteList();
  }, []);

  return (
    <div className="shortlist">
      {!loading ? <>{result != null && result?.length != 0 ? (
        result?.map((details) => (
          <SmallCard
            details={details}
            favorite={favorite}
            favoriteList={favoriteList}
            interestList={interestList}
            sentInterest={sentInterest}
            loadingFav={loadingFav}
            loadingInterest={loadingInterest}
          ></SmallCard>
        ))
      ) : (
        <p className="no-data">Your favorite list is empty</p>
      )}</>:<FullScreenLoading />}
    </div>
  );
};

export default Shortlist;
