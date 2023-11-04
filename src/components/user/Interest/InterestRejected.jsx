import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';
import InterestService from '../../../services/interest.service';
import UserService from '../../../services/user.service';
import SmallCard from '../../UI/SmallCard';

const InterestRejected = () => {
  const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(JSON.parse(localStorage.getItem("favoriteList")) || []);
    const [favoriteList, setFavoriteList] = useState(
      JSON.parse(localStorage.getItem("favorite")) || {}
    );
    const [interestList, setInterestList] = useState(
      JSON.parse(localStorage.getItem("interest")) || {}
    );
  
    const getRejectInterest = useCallback(async() => {
      console.log('getRejectInterest');
      setLoading(true);
      let user = localStorage.getItem("user");
      if (user != null && user != undefined) {
        user = JSON.parse(user);
        await InterestService.getRejectInterestAPI(user?.id).then((res) => {
          setResult(res)
        });
      }
      setLoading(false);
    },[])
  
    const favorite = async (fav_id) => {
      let user = localStorage.getItem("user");
      let searchResult = JSON.parse(localStorage.getItem("rejectInterest"));
      let favoriteVal = JSON.parse(localStorage.getItem("favoriteList")) || [];
  
      if (user != null && user != undefined) {
        user = JSON.parse(user);
        await UserService.favoriteAPI(user?.id, fav_id).then((res) => {
          const searchIndex = searchResult?.findIndex(
            (value) => value.id === fav_id
          );
          const favoriteIndex = favoriteVal?.findIndex((f) => f.id === fav_id);
          
          if(res.added === true){
            favoriteVal.push(searchResult[searchIndex])
             localStorage.setItem(
                "favoriteList",
                JSON.stringify(favoriteVal)
              )
              }else{ 
                favoriteVal.splice(favoriteIndex, 1);
                localStorage.setItem(
                "favoriteList",
                JSON.stringify(favoriteVal)
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
      getRejectInterest();
    }, []);
  return (
    <>
         {!loading && result != null && result?.length != 0 ? (
        result?.map((details) => (
          <SmallCard
            details={details}
            favorite={favorite}
            favoriteList={favoriteList}
            interestList={interestList}
            sentInterest={sentInterest}
          ></SmallCard>
        ))
      ) : (
        <p>You don't have any request</p>
      )}
    </>
  )
}

export default InterestRejected