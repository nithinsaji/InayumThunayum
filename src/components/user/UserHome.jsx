import React, { useEffect, useState } from 'react'
import Card from '../UI/Card'
import bride1 from '../../assets/bride1.jpg'
import bride2 from '../../assets/bride2.jpg'
import bride3 from '../../assets/bride3.jpg'
import UserService from '../../services/user.service'

const UserHome = () => {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState(null)

  const getProfile = async () => {
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      user = JSON.parse(user);
      await UserService.getProfileAPI(user?.id);
    } 
  };

  const getSearchResult = () =>{
    setLoading(true)
    getProfile();
    let searchResult = localStorage.getItem("searchResult");
    if (searchResult != null && searchResult != undefined) {
      searchResult = JSON.parse(searchResult);
      setResult(searchResult);
    }
    setLoading(false)
  }

  const removeCard = (name,houseName) =>{
    const cards = result.filter((s) => s.name != name && s.house_name != houseName)
    console.log(cards);
    setResult(cards)
    localStorage.setItem("searchResult", JSON.stringify(cards));
  }

  useEffect(() => {
    getSearchResult()
  }, [])
  
  return (
    <div className='userhome__container'>
      {!loading && (result != null && result?.length != 0) ?
        result?.map((details) => (
          <Card src={bride1} details={details} remove={removeCard}></Card>
        )) :
        <p>Sorry we did not found any users. Please do search again.</p>
      }
    </div>
  )
}

export default UserHome