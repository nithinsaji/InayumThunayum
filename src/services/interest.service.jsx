const interestURL =
  "https://script.google.com/macros/s/AKfycbyRQ_u1syp1DbcJG6JttNepAqdPSDDcmlSbnWjovSh5UR2bRWMqspCM01AzYHDttXsh/exec";

const sentInterestAPI = async (userId,sentId) => {
    var accessToken = JSON.parse(localStorage.getItem("accessToken"));
  
    return await fetch(interestURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        userId: userId,
        sentId : sentId,
        fname : 'sentInterest'
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
  };

  const getInterestedReceivedAPI = async (userId) => {
    var accessToken = JSON.parse(localStorage.getItem("accessToken"));
    var interestedReceived = JSON.parse(localStorage.getItem("interestedReceived"));
  if(interestedReceived == null){
    return await fetch(interestURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        userId: userId,
        fname : 'getInterestedReceived'
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("interestedReceived", JSON.stringify(result.receivedList));
        return result.receivedList;
      });}
      return interestedReceived;
  };

  const getAcceptInterestAPI = async (userId) => {
    var accessToken = JSON.parse(localStorage.getItem("accessToken"));
    var acceptInterest = JSON.parse(localStorage.getItem("acceptInterest"));
  if(acceptInterest == null){
    return await fetch(interestURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        userId: userId,
        fname : 'getAcceptInterest'
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("acceptInterest", JSON.stringify(result.acceptList));
        return result.acceptList;
      });}
      return acceptInterest;
  };

  const getRejectInterestAPI = async (userId) => {
    var accessToken = JSON.parse(localStorage.getItem("accessToken"));
    var rejectInterest = JSON.parse(localStorage.getItem("rejectInterest"));
  if(rejectInterest == null){
    return await fetch(interestURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        userId: userId,
        fname : 'getRejectInterest'
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("rejectInterest", JSON.stringify(result.rejectList));
        return result.rejectList;
      });
    }
    return rejectInterest;
  };
  
  const getInterestListAPI = async (userId) => {
    var accessToken = JSON.parse(localStorage.getItem("accessToken"));
    var interestList = JSON.parse(localStorage.getItem("interestList"));
  if(interestList == null){
    return await fetch(interestURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        userId: userId,
        fname : 'getInterestList'
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("interestList", JSON.stringify(result.interestList));
        return result.interestList;
      });
    }
    return interestList;
  };

  const getApprovedInterestAPI = async (userId) => {
    var accessToken = JSON.parse(localStorage.getItem("accessToken"));
    var approvedInterest = JSON.parse(localStorage.getItem("approvedInterest"));
  if(approvedInterest == null){
    return await fetch(interestURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        userId: userId,
        fname : 'getApprovedInterest'
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("approvedInterest", JSON.stringify(result.approvedList));
        return result.approvedList;
      });
    }
    return approvedInterest;
  };

  const InterestService = {
    sentInterestAPI,
    getInterestedReceivedAPI,
    getAcceptInterestAPI,
    getRejectInterestAPI,
    getInterestListAPI,
    getApprovedInterestAPI
  };
  
  export default InterestService;