import React, { useEffect, useState } from "react";
import InterestService from "../../../services/interest.service";
import FullScreenLoading from "../../UI/Loading";
import SmallCard from "../../UI/SmallCard";

const InterestReceived = () => {
  const [loading, setLoading] = useState(true);
  const [interestedReceived, setInterestedReceived] = useState(
    JSON.parse(localStorage.getItem("interestedReceived")) || []
  );

  const getInterestedReceived = async () => {
    setLoading(true);
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await InterestService.getInterestedReceivedAPI(user?.id).then((res) => {
        setInterestedReceived(res);
      });
    }
    setLoading(false);
  };

  const acceptInterest = async (acceptId) => {
    let user = localStorage.getItem("user");
    let interestedReceived = JSON.parse(
      localStorage.getItem("interestedReceived")
    );
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
      });
      setInterestedReceived(interestedReceived)
    }
  };

  const rejectInterest = async (acceptId) => {
    let user = localStorage.getItem("user");
    let interestedReceived = JSON.parse(
      localStorage.getItem("interestedReceived")
    );
    let rejectInterestVal =
      JSON.parse(localStorage.getItem("rejectInterest")) || [];

    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await InterestService.rejectInterestAPI(acceptId).then((res) => {
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
