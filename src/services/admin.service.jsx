
const admin_url = 'https://script.google.com/macros/s/AKfycbx-NznFcWXbGCm7RWbrGdVcyiUy35QQj91a4xfSv5125YQTFTqlJV2vzFRBW1ujqMVXlQ/exec';

const getNewUsers = async () => {

    var accessToken = JSON.parse(localStorage.getItem("accessToken"));

    return await fetch(admin_url, {
      redirect: "follow",
      headers: {
        'Accept': 'application/json, text/plain, */*',
      },
      method: "POST",
      body: JSON.stringify({
        'Authorization': `${accessToken}`,
        fname : 'newUsersList'
      })
    })
      .then((res) => res.json())
      .then((result) => { return result; });
  };

  const updateStatusAPI = async (id, status) => {

    var accessToken = JSON.parse(localStorage.getItem("accessToken"));

    return await fetch(admin_url, {
      redirect: "follow",
      headers: {
        'Accept': 'application/json, text/plain, */*',
      },
      method: "POST",
      body: JSON.stringify({
        'Authorization': `${accessToken}`,
        'id': id,
        "status" : status,
        fname : 'updateStatus'
      })
    })
      .then((res) => res.json())
      .then((result) => { return result; });
  };

  const getUserNumberAPI = async (name) => {

    var accessToken = JSON.parse(localStorage.getItem("accessToken"));

    return await fetch(admin_url, {
      redirect: "follow",
      headers: {
        'Accept': 'application/json, text/plain, */*',
      },
      method: "POST",
      body: JSON.stringify({
        'Authorization': `${accessToken}`,
        'name': name,
        fname : 'getNumber'
      })
    })
      .then((res) => res.json())
      .then((result) => { return result; });
  };

  const getTotalAPI = async () => {

    var accessToken = JSON.parse(localStorage.getItem("accessToken"));

    return await fetch(admin_url, {
      redirect: "follow",
      headers: {
        'Accept': 'application/json, text/plain, */*',
      },
      method: "POST",
      body: JSON.stringify({
        'Authorization': `${accessToken}`,
        fname : 'usersCount'
      })
    })
      .then((res) => res.json())
      .then((result) => { return result; });
  };

  const AdminService = {
    getNewUsers,
    updateStatusAPI,
    getUserNumberAPI,
    getTotalAPI
  }
  
  export default AdminService;