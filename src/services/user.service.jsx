const userURL =
  "https://script.google.com/macros/s/AKfycbzIm--b33tEDa3c_K8olZgq8YYN4JRDbmWQkCQYmoL8yeKbn7vUzCxj4cdJ4IONLXLq/exec";




const getProfileAPI = async (id) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return await fetch(userURL, {
    redirect: "follow",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "POST",
    body: JSON.stringify({
      Authorization: `${accessToken}`,
      id: id,
      fname : 'getProfile'
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      localStorage.setItem("profile", JSON.stringify(result.data));
      return result;
    });
};

const updateProfileAPI = async (profile) => {
  console.log(profile);
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return await fetch(userURL, {
    redirect: "follow",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "POST",
    body: JSON.stringify({
      Authorization: `${accessToken}`,
      profile: profile,
      fname : 'updateProfile'
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};

const searchAPI = async (gender, search) => {
  console.log(search);
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return await fetch(userURL, {
    redirect: "follow",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "POST",
    body: JSON.stringify({
      Authorization: `${accessToken}`,
      gender: gender,
      search: search,
      fname : 'search'
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      localStorage.setItem("searchResult", JSON.stringify(result.data));
      return result;
    });
};


const updateImageAPI = async (values,id) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return await fetch(userURL, {
    redirect: "follow",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "POST",
    body: JSON.stringify({
      Authorization: `${accessToken}`,
      id : id,
      image1 : values.image1,
      image2 : values.image2,
      image3 : values.image3,
      fname : 'uploadFilesToGoogleDrive'
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      localStorage.setItem("profile", JSON.stringify(result.data));
      return result;
    });
};



const UserService = {
  getProfileAPI,
  updateProfileAPI,
  searchAPI,
  updateImageAPI
};

export default UserService;
