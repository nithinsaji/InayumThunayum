import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import InterestService from '../../../services/interest.service';
import FullScreenLoading from '../../UI/Loading';
import SmallCard from '../../UI/SmallCard';

const InterestRejected = () => {
  const [loading, setLoading] = useState(true);
  const [loadingAccept, setLoadingAccept] = useState(0);
  const [loadingReject, setLoadingReject] = useState(0);
    const [result, setResult] = useState(JSON.parse(localStorage.getItem("favoriteList")) || []);

    const navigate = useNavigate();

  const validateToken = (message) => {
    if(message === 'The token has expired', message === 'The token is not vaild') {
        toast.error(message);
        localStorage.clear();
        navigate('/signin')
    }
  }
  
    const getRejectInterest = useCallback(async() => {
      console.log('getRejectInterest');
      setLoading(true);
      let user = localStorage.getItem("user");
      if (user != null && user != undefined) {
        user = JSON.parse(user);
        await InterestService.getRejectInterestAPI(user?.id).then((res) => {
          validateToken(res?.message)
          setResult(res)
        });
      }
      setLoading(false);
    },[])
  
    const acceptInterest = async (acceptId) => {
      setLoadingAccept(acceptId)
      let user = localStorage.getItem("user");
      let rejectInterest = JSON.parse(
        localStorage.getItem("rejectInterest")
      ) || [];
      let acceptInterestVal =
        JSON.parse(localStorage.getItem("acceptInterest")) || [];
  
      if (user != null && user != undefined) {
        user = JSON.parse(user);
        await InterestService.acceptInterestAPI(acceptId).then((res) => {
          validateToken(res?.message)
          const rejectInterestIndex = rejectInterest?.findIndex(
            (value) => value.id === acceptId
          );
          const acceptInterestIndex = acceptInterestVal?.findIndex(
            (f) => f.id === acceptId
          );
  
          if (res.status === 'success'){
            acceptInterestVal.push(rejectInterest[rejectInterestIndex]);
            rejectInterest.splice(rejectInterestIndex, 1);
          } else {
            rejectInterest.push(acceptInterestVal[acceptInterestIndex]);
            acceptInterestVal.splice(acceptInterestIndex, 1);
          }
          localStorage.setItem(
            "acceptInterest",
            JSON.stringify(acceptInterestVal)
          );
          localStorage.setItem(
            "rejectInterest",
            JSON.stringify(rejectInterest)
          );
          setLoadingAccept(0)
        });
        setResult(rejectInterest)
      }
    };
  
    const rejectInterest = async (acceptId) => {
      setLoadingReject(acceptId)
      let user = localStorage.getItem("user");
      let interestedReceived = JSON.parse(
        localStorage.getItem("interestedReceived")
      );
      let rejectInterestVal =
        JSON.parse(localStorage.getItem("rejectInterest")) || [];
  
      if (user != null && user != undefined) {
        user = JSON.parse(user);
        await InterestService.rejectInterestAPI(acceptId).then((res) => {
          validateToken(res?.message)
          const interestedReceivedIndex = interestedReceived?.findIndex(
            (value) => value.id === acceptId
          );
          const rejectInterestIndex = rejectInterestVal?.findIndex(
            (f) => f.id === acceptId
          );
  
          if (res.status === 'success' && res.message  === 'Requested Rejected') {
            rejectInterestVal.push(interestedReceived[interestedReceivedIndex]);
            interestedReceived.splice(interestedReceivedIndex, 1);
          } else {
            interestedReceived.push(rejectInterestVal[rejectInterestIndex]);
            rejectInterestVal.splice(rejectInterestIndex, 1);
          }
          localStorage.setItem(
            "rejectInterest",
            JSON.stringify(rejectInterestVal)
          );
          localStorage.setItem(
            "interestedReceived",
            JSON.stringify(interestedReceived)
          );
          setLoadingReject(0)
        });
        setResult(rejectInterestVal)
      }
    };
  
    useEffect(() => {
      getRejectInterest();
    }, []);
  return (
    <>
        {!loading ? <>{ result != null && result?.length != 0 ? (
        result?.map((details) => (
          <SmallCard
                details={details}
                acceptInterest = {acceptInterest}
                rejectInterest = {rejectInterest}
                rejected = {true}
                loadingAccept={loadingAccept}
                loadingReject={loadingReject}
              ></SmallCard>
        ))
      ) : (
        <p>You don't have any request</p>
      )}</>:<FullScreenLoading />}
    </>
  )
}

export default InterestRejected