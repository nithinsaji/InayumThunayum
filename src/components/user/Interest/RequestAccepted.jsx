import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import InterestService from '../../../services/interest.service';
import UserService from '../../../services/user.service';
import FullScreenLoading from '../../UI/Loading';
import SmallCard from '../../UI/SmallCard';

const RequestAccepted = () => {
    const [loading, setLoading] = useState(true);
    const [loadingFav, setLoadingFav] = useState(0);
    const [result, setResult] = useState(JSON.parse(localStorage.getItem("favoriteList")) || []);
    const [favoriteList, setFavoriteList] = useState(
      JSON.parse(localStorage.getItem("favorite")) || {}
    );

    const navigate = useNavigate();

  const validateToken = (message) => {
    if(message === 'The token has expired', message === 'The token is not vaild') {
        toast.error(message);
        localStorage.clear();
        navigate('/signin')
    }
  }
  
    const getApprovedInterest = useCallback(async() => {
      setLoading(true);
      let user = localStorage.getItem("user");
      if (user != null && user != undefined) {
        user = JSON.parse(user);
        await InterestService.getApprovedInterestAPI(user?.id).then((res) => {
          validateToken(res?.message)
          setResult(res)
        });
      }
      setLoading(false);
    },[])
  
    const favorite = async (fav_id) => {
      setLoadingFav(fav_id)
      let user = localStorage.getItem("user");
      let searchResult = JSON.parse(localStorage.getItem("approvedInterest"));
      let favoriteVal = JSON.parse(localStorage.getItem("favoriteList")) || [];
  
      if (user != null && user != undefined) {
        user = JSON.parse(user);
        await UserService.favoriteAPI(user?.id, fav_id).then((res) => {
          validateToken(res?.message)
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
          setLoadingFav(0)
        });
      }
    };

    const callNow = () =>{
      console.log("Call Now!");
    }
  
    useEffect(() => {
      getApprovedInterest();
    }, []);
  return (
    <>
        {!loading ? <>{ result != null && result?.length != 0 ? (
        result?.map((details) => (
          <SmallCard
            details={details}
            favorite={favorite}
            favoriteList={favoriteList}
            callNow={callNow}
            loadingFav={loadingFav}
          ></SmallCard>
        ))
      ) : (
        <p>You don't have any request</p>
      )}</>:<FullScreenLoading />}
    </>
  )
}

export default RequestAccepted