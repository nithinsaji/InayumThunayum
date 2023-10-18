
const register_url = 'https://script.google.com/macros/s/AKfycbwi1kUm0BeFemo-atahSr1Pfv8GEli5xe7leSzU6QHhR0mnGa6yYcSvwWp5yMjYJcYpmw/exec';
const login_url = "https://script.google.com/macros/s/AKfycbzA64KjwzfT6y2fGCi9hr1MgXU5G74B6_O1eKoGE4-W6rVWcNyrBaTqkdU_SA-F3xaD_A/exec";

const register = async (name, number, email, password ) => {

  return await fetch(register_url, {
    redirect: "follow",
    headers: {
      'Accept': 'application/json, text/plain, */*'
    },
    method: "POST",
    body: JSON.stringify({
      "name": name,
      "number": number,
      "email": email,
      "password": password
    })
  })
    .then((res) => res.json())
    .then((result) => { return result; });
};

const login = async (username, password) => {
  console.log(username);
  return await fetch(login_url, {
    redirect: "follow",
    headers: {
      'Accept': 'application/json, text/plain, */*'
    },
    method: "POST",
    body: JSON.stringify({
      "email": username,
      "password": password
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