import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import UserService from "../../services/user.service";
import InterestService from "../../services/interest.service";
import FullScreenLoading from "../UI/Loading";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import { ParagraphText } from "../UI/Text";
import Button from "../UI/Button";

const UserHome = () => {
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
  const [call, setCall] = useState(false);

  const getProfile = async () => {
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await UserService.getProfileAPI(user?.id);
      await UserService.getFavoriteListAPI(user?.id);
      await InterestService.getInterestListAPI(user?.id);
      await InterestService.getAllInterestListAPI(user?.id).then(()=> setLoading(false))
    }
  };

  const getSearchResult = () => {
    getProfile();
    let searchResult = localStorage.getItem("searchResult");
    if (searchResult != null && searchResult != undefined) {
      searchResult = JSON.parse(searchResult);
      setResult(searchResult);
    }
  };

  const removeCard = (name, houseName) => {
    const cards = result.filter(
      (s) => s.name != name && s.house_name != houseName
    );
    setResult(cards);
    localStorage.setItem("searchResult", JSON.stringify(cards));
  };
  const navigate = useNavigate();

  const validateToken = (message) => {
    if(message === 'The token has expired', message === 'The token is not vaild') {
        toast.error(message);
        localStorage.clear();
        navigate('/signin')
    }
  }

  const favorite = async (fav_id) => {
    setLoadingFav(fav_id);
    let user = localStorage.getItem("user");
    let searchResult = JSON.parse(localStorage.getItem("searchResult"));
    let favoriteArr = JSON.parse(localStorage.getItem("favoriteList"));

    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await UserService.favoriteAPI(user?.id, fav_id).then((res) => {
        validateToken(res?.message)
        const searchIndex = searchResult.findIndex(
          (value) => value.id === fav_id
        );
        const favoriteIndex = favoriteArr.findIndex((f) => f.id === fav_id);

        if (res?.added === true) {
          favoriteArr.push(searchResult[searchIndex]);
          localStorage.setItem("favoriteList", JSON.stringify(favoriteArr));
        } else {
          favoriteArr.splice(favoriteIndex, 1);
          localStorage.setItem("favoriteList", JSON.stringify(favoriteArr));
        }
        localStorage.setItem(
          "favorite",
          JSON.stringify({ ...favoriteList, [fav_id]: res?.added })
        );
        setFavoriteList({ ...favoriteList, [fav_id]: res?.added });
      });
    }
    setLoadingFav(0);
  };

  const sentInterest = async (sendId) => {
    setLoadingInterest(sendId);
    let user = localStorage.getItem("user");
    let searchResult = JSON.parse(localStorage.getItem("searchResult"));
    let interestArr = JSON.parse(localStorage.getItem("interestList"));

    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await InterestService.sentInterestAPI(user?.id, sendId).then((res) => {
    validateToken(res?.message)
        if(!res?.message.includes("cannot remove request")){
        const searchIndex = searchResult.findIndex(
          (value) => value.id === sendId
        );
        const interestIndex = interestArr.findIndex((f) => f.id === sendId);

        if (res?.status === 'success') {
          interestArr.push(searchResult[searchIndex]);
          localStorage.setItem("interestList", JSON.stringify(interestArr));
        } else if (res?.status === 'error' && !res?.message.includes("cannot remove request")){
          interestArr.splice(interestIndex, 1);
          localStorage.setItem("interestList", JSON.stringify(interestArr));
        }

        localStorage.setItem(
          "interest",
          JSON.stringify({
            ...interestList,
            [sendId]: res?.status == "success" ? true : false,
          })
        );
        setInterestList({
          ...interestList,
          [sendId]: res?.status == "success" ? true : false,
        });
      }else{
        toast.error(res?.message)
      }
      });
    }
    setLoadingInterest(0);
  };

  useEffect(() => {
    setLoading(true);
    getSearchResult();
  }, []);

  return (
    <>
      {!loading ? (
        <div className="userhome__container">
          {call && 
          <Modal>
            <ParagraphText>To get contact details send request and wait for his/her response. If he/she accepted your request then you will get the contact details.</ParagraphText>
            <Button style={'outline'} onClick={() => setCall(false)}>Got it</Button>
          </Modal>}
          {result != null && result?.length != 0 ? (
            result?.map((details) => (
              <Card
                details={details}
                remove={removeCard}
                favorite={favorite}
                favoriteList={favoriteList}
                interestList={interestList}
                sentInterest={sentInterest}
                loadingFav={loadingFav}
                loadingInterest={loadingInterest}
                setCall={setCall}
              ></Card>
            ))
          ) : (
            <p className="no-data">Sorry we did not found any users. Please do search again.</p>
          )}
        </div>
      ) : (
        <div className="fs-container">
          <FullScreenLoading />
        </div>
      )}
    </>
  );
};

export default UserHome;
