
const auth_url = 'https://script.google.com/macros/s/AKfycbw6dv_7G25ktElWJ2gMnDbO-_SrYOj2cc-krrVDUyUAAbeEeVQpqO8zX6qCfRTXowTEsw/exec';

const register = async (name, number, email, password ) => {

  return await fetch(auth_url, {
    redirect: "follow",
    headers: {
      'Accept': 'application/json, text/plain, */*'
    },
    method: "POST",
    body: JSON.stringify({
      "name": name,
      "number": number,
      "email": email,
      "password": password,
      fname : 'register'
    })
  })
    .then((res) => res.json())
    .then((result) => { return result; });
};

const login = async (username, password) => {
  return await fetch(auth_url, {
    redirect: "follow",
    headers: {
      'Accept': 'application/json, text/plain, */*'
    },
    method: "POST",
    body: JSON.stringify({
      "email": username,
      "password": password,
      fname : 'login'
    })
  })
    .then((res) => res.json())
    .then((result) => {
      localStorage.setItem('user', JSON.stringify(result.data));
      localStorage.setItem('accessToken', JSON.stringify(result.token));
      return result;
    });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const deleteAccountAPI = async (email,password) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return await fetch(userURL, {
    redirect: "follow",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "POST",
    body: JSON.stringify({
      Authorization: `${accessToken}`,
      email: email,
      password: password,
      fname: "deleteAccount",
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};

const AuthService = {
  register,
  login,
  getCurrentUser,
  deleteAccountAPI
}

export default AuthService;