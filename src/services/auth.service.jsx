
const auth_url = 'https://script.google.com/macros/s/AKfycbx-NznFcWXbGCm7RWbrGdVcyiUy35QQj91a4xfSv5125YQTFTqlJV2vzFRBW1ujqMVXlQ/exec';

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

const AuthService = {
  register,
  login,
  getCurrentUser,
}

export default AuthService;