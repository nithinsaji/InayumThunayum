
const userURL =
  "https://script.google.com/macros/s/AKfycbzddcxdYFf9eArC8BHm6n72FtMQf1fn4SnKAXyl01T5Ilkc8qwiu-RxSPSBw4fZy2EI/exec";

const getProfileAPI = async (id) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));
  var profile = JSON.parse(localStorage.getItem("profile"));
  if (profile == null) {
    return await fetch(userURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        id: id,
        fname: "getProfile",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("profile", JSON.stringify(result.data));
        return result;
      });
  }
  return profile;
};

const updateProfileAPI = async (profile) => {
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
      fname: "updateProfile",
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      localStorage.setItem("profile", JSON.stringify(result.data));
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
      fname: "search",
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      localStorage.setItem("searchResult", JSON.stringify(result.data));
      return result;
    });
};

const updateImageAPI = async (values, id) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return await fetch(userURL, {
    redirect: "follow",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "POST",
    body: JSON.stringify({
      Authorization: `${accessToken}`,
      image1: values.image1,
      image2: values.image2,
      image3: values.image3,
      fname: "uploadFilesToGoogleDrive",
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      localStorage.setItem("profile", JSON.stringify(result.data));
      return result;
    });
};

const favoriteAPI = async (id, fav_id) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return await fetch(userURL, {
    redirect: "follow",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "POST",
    body: JSON.stringify({
      Authorization: `${accessToken}`,
      fav_id: fav_id,
      fname: "favorite",
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};

const getFavoriteListAPI = async (id) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));
  var favoriteList = JSON.parse(localStorage.getItem("favoriteList"));
  if (favoriteList == null) {
    return await fetch(userURL, {
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "POST",
      body: JSON.stringify({
        Authorization: `${accessToken}`,
        fname: "getFavoriteList",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem(
          "favoriteList",
          JSON.stringify(result.favoriteList)
        );
        let val = result.favoriteList?.map((res) => {
          return { [res.id]: true };
        });
        localStorage.setItem("favorite", JSON.stringify(Object.assign({}, ...val )));
        console.log(Object.assign({}, ...val ));
        return result.favoriteList;
      });
  }
  return favoriteList;
};
const UserService = {
  getProfileAPI,
  updateProfileAPI,
  searchAPI,
  updateImageAPI,
  favoriteAPI,
  getFavoriteListAPI,
};

export default UserService;
