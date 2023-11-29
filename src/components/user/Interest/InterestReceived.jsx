import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import InterestService from "../../../services/interest.service";
import FullScreenLoading from "../../UI/Loading";
import SmallCard from "../../UI/SmallCard";

const InterestReceived = () => {
  const [loading, setLoading] = useState(true);
  const [loadingAccept, setLoadingAccept] = useState(0);
  const [loadingReject, setLoadingReject] = useState(0);
  const [interestedReceived, setInterestedReceived] = useState(
    JSON.parse(localStorage.getItem("interestedReceived")) || []
  );

  const navigate = useNavigate();

  const validateToken = (message) => {
    if(message === 'The token has expired', message === 'The token is not vaild') {
        toast.error(message);
        localStorage.clear();
        navigate('/signin')
    }
  }

  const getInterestedReceived = async () => {
    setLoading(true);
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await InterestService.getInterestedReceivedAPI(user?.id).then((res) => {
        
    validateToken(res?.message)
        setInterestedReceived(res);
      });
    }
    setLoading(false);
  };

  const acceptInterest = async (acceptId) => {
    setLoadingAccept(acceptId)
    let user = localStorage.getItem("user");
    let interestedReceived = JSON.parse(
      localStorage.getItem("interestedReceived")
    );
    let acceptInterestVal =
      JSON.parse(localStorage.getItem("acceptInterest")) || [];

    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await InterestService.acceptInterestAPI(acceptId).then((res) => {
    validateToken(res?.message)
        const interestedReceivedIndex = interestedReceived?.findIndex(
          (value) => value.id === acceptId
        );
        const acceptInterestIndex = acceptInterestVal?.findIndex(
          (f) => f.id === acceptId
        );

        if (res.status === 'success') {
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
      setInterestedReceived(interestedReceived)
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

        if (res.status === 'success') {
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
      setInterestedReceived(interestedReceived)
    }
  };

  useEffect(() => {
    getInterestedReceived();
  }, []);
  return (
    <>
      {!loading ? (
        <>
          {interestedReceived != null && interestedReceived?.length != 0 ? (
            interestedReceived?.map((details) => (
              <SmallCard
                details={details}
                acceptInterest = {acceptInterest}
                rejectInterest = {rejectInterest}
                loadingAccept={loadingAccept}
                loadingReject={loadingReject}
              ></SmallCard>
            ))
          ) : (
            <p>You don't have any request</p>
          )}
        </>
      ) : (
        <FullScreenLoading />
      )}
    </>
  );
};

export default InterestReceived;
