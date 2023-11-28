import React, { useEffect, useState } from 'react'
import InterestService from '../../../services/interest.service';
import FullScreenLoading from '../../UI/Loading';
import SmallCard from '../../UI/SmallCard';

const InterestAccepted = () => {
  const [loading, setLoading] = useState(true);
  const [loadingAccept, setLoadingAccept] = useState(0);
  const [loadingReject, setLoadingReject] = useState(0);
    const [result, setResult] = useState(JSON.parse(localStorage.getItem("acceptInterest")) || []);
  
    const getAcceptInterest = async() => {
      setLoading(true);
      let user = localStorage.getItem("user");
      if (user != null && user != undefined) {
        user = JSON.parse(user);
        await InterestService.getAcceptInterestAPI(user?.id).then((res) => {
          setResult(res)
        });
      }
      setLoading(false);
    };
  
    const acceptInterest = async (acceptId) => {
      setLoadingAccept(acceptId)
      let user = localStorage.getItem("user");
      let interestedReceived = JSON.parse(
        localStorage.getItem("interestedReceived")
      ) || [];
      let acceptInterestVal =
        JSON.parse(localStorage.getItem("acceptInterest")) || [];
  
      if (user != null && user != undefined) {
        user = JSON.parse(user);
        await InterestService.acceptInterestAPI(acceptId).then((res) => {
          const interestedReceivedIndex = interestedReceived?.findIndex(
            (value) => value.id === acceptId
          );
          const acceptInterestIndex = acceptInterestVal?.findIndex(
            (f) => f.id === acceptId
          );
  
          if (res.status === 'success' && res.message  === 'Requested Accepted'){
            acceptInterestVal.push(interestedReceived[interestedReceivedIndex]);
            interestedReceived.splice(interestedReceivedIndex, 1);
          } else {
            interestedReceived.push(acceptInterestVal[acceptInterestIndex]);
            acceptInterestVal.splice(acceptInterestIndex, 1);
          }
          localStorage.setItem(
            "acceptInterest",
            JSON.stringify(acceptInterestVal)
          );
          localStorage.setItem(
            "interestedReceived",
            JSON.stringify(interestedReceived)
          );
          setLoadingAccept(0)
        });
        setResult(acceptInterestVal)
      }
    };
  
    const rejectInterest = async (acceptId) => {
      setLoadingReject(acceptId)
      let user = localStorage.getItem("user");
      let acceptInterestVal =
      JSON.parse(localStorage.getItem("acceptInterest")) || [];
      let rejectInterestVal =
        JSON.parse(localStorage.getItem("rejectInterest")) || [];
  
      if (user != null && user != undefined) {
        user = JSON.parse(user);
        await InterestService.rejectInterestAPI(acceptId).then((res) => {
          const acceptInterestValIndex = acceptInterestVal?.findIndex(
            (value) => value.id === acceptId
          );
          const rejectInterestIndex = rejectInterestVal?.findIndex(
            (f) => f.id === acceptId
          );
  
          if (res.status === 'success') {
            rejectInterestVal.push(acceptInterestVal[acceptInterestValIndex]);
            acceptInterestVal.splice(acceptInterestValIndex, 1);
          } else {
            acceptInterestVal.push(rejectInterestVal[rejectInterestIndex]);
            rejectInterestVal.splice(rejectInterestIndex, 1);
          }
          localStorage.setItem(
            "rejectInterest",
            JSON.stringify(rejectInterestVal)
          );
          localStorage.setItem(
            "acceptInterest",
            JSON.stringify(acceptInterestVal)
          );
          setLoadingReject(0)
        });
        setResult(acceptInterestVal)
      }
    };
  
    useEffect(() => {
      getAcceptInterest();
    }, []);
  return (
    <>
         {!loading ? <>{ result != null && result?.length != 0 ? (
        result?.map((details) => (
          <SmallCard
                details={details}
                acceptInterest = {acceptInterest}
                rejectInterest = {rejectInterest}
                accepted = {true}
                loadingAccept={loadingAccept}
                loadingReject={loadingReject}
              ></SmallCard>
        ))
      ) : (
        <p>Your accept list is empty</p>
      )}</>:<FullScreenLoading />}
    </>
  )
}

export default InterestAccepted