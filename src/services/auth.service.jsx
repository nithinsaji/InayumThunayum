
const auth_url = 'https://script.google.com/macros/s/AKfycbykzAk9ogXxSouc8BEK6YLHcRgZ8E1ipdLJI39AXz9wWn3zzcIIk9bmHrmBqsTIdPkS-w/exec';

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

  return await fetch(auth_url, {
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

const changePasswordAPI = async (oldPassword,password) => {
  var accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return await fetch(auth_url, {
    redirect: "follow",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "POST",
    body: JSON.stringify({
      Authorization: `${accessToken}`,
      oldPassword: oldPassword,
      password: password,
      fname: "changePassword",
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
  deleteAccountAPI,
  changePasswordAPI
}

export default AuthService;