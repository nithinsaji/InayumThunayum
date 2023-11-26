const interestURL =
  "https://script.google.com/macros/s/AKfycby-TxjG2WcbydH-qc6kHWALV1tWoWx18c3AYeTQPva8oeQNT8L20C8Xp9b-Pg-xj4xH/exec";

const sentInterestAPI = async (userId, sentId) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return await fetch(interestURL, {
    redirect: "follow",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "POST",
    body: JSON.stringify({
      Authorization: `${accessToken}`,
      sentId: sentId,
      fname: "sentInterest",
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};

const acceptInterestAPI = async (acceptId) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return await fetch(interestURL, {
    redirect: "follow",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "POST",
    body: JSON.stringify({
      Authorization: `${accessToken}`,
      acceptId: acceptId,
      fname: "acceptInterest",
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};

const rejectInterestAPI = async (acceptId) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return await fetch(interestURL, {
    redirect: "follow",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "POST",
    body: JSON.stringify({
      Authorization: `${accessToken}`,
      acceptId: acceptId,
      fname: "rejectInterest",
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};

const getInterestedReceivedAPI = async (userId) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));
  
    return await fetch(interestURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        fname: "getInterestedReceived",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem(
          "interestedReceived",
          JSON.stringify(result.receivedList)
        );
        return result.receivedList;
      });
};

const getAcceptInterestAPI = async (userId) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));
  var acceptInterest = JSON.parse(localStorage.getItem("acceptInterest"));
  if (acceptInterest == null) {
    return await fetch(interestURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        fname: "getAcceptInterest",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem(
          "acceptInterest",
          JSON.stringify(result.acceptList)
        );
        return result.acceptList;
      });
  }
  return acceptInterest;
};

const getRejectInterestAPI = async (userId) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));
  var rejectInterest = JSON.parse(localStorage.getItem("rejectInterest"));
  if (rejectInterest == null) {
    return await fetch(interestURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        fname: "getRejectInterest",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem(
          "rejectInterest",
          JSON.stringify(result.rejectList)
        );
        return result.rejectList;
      });
  }
  return rejectInterest;
};

const getInterestListAPI = async (userId) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));
  var interestList = JSON.parse(localStorage.getItem("interestList"));
  if (interestList == null) {
    return await fetch(interestURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        fname: "getInterestList",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem(
          "interestList",
          JSON.stringify(result.interestList)
        );
        return result.interestList;
      });
  }
  return interestList;
};

const getApprovedInterestAPI = async (userId) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));
  
    return await fetch(interestURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        fname: "getApprovedInterest",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem(
          "approvedInterest",
          JSON.stringify(result.approvedList)
        );
        return result.approvedList;
      });
};

const getAllInterestListAPI = async (userId) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));
  var interest = JSON.parse(localStorage.getItem("interest")) || {};
  
  if (Object.keys(interest).length === 0){
    return await fetch(interestURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        fname: "getAllInterestList",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        let val = result.interestList?.map((res) => {
          return { [res.id]: true };
        });
        localStorage.setItem("interest", JSON.stringify(Object.assign({}, ...val )));
        return result.interestList;
      });
  }
  return interest;
};
const InterestService = {
  sentInterestAPI,
  acceptInterestAPI,
  rejectInterestAPI,
  getInterestedReceivedAPI,
  getAcceptInterestAPI,
  getRejectInterestAPI,
  getInterestListAPI,
  getApprovedInterestAPI,
  getAllInterestListAPI,
};

export default InterestService;
