
const get_newUser = 'https://script.google.com/macros/s/AKfycbzBcfI9a2hLYgVsNOF6HIOMvDf9187ZwhbEXCDb9WNY9Nr_g_TmCFrAXu_XWh5pO0VE5w/exec';
const updateStatusURL = 'https://script.google.com/macros/s/AKfycbwUVET06NrSCpSBWY1ieRKqQhhLapA6Vf29tEGVTf2dZTOmBp70-ZBDP1ViCLRdHqXAsQ/exec'
const getUserNumberURL = 'https://script.google.com/macros/s/AKfycbxyTvpZnxuu9De2BX44TxGdRoyqhpOojkdLxC95Jf0icQfScYCSWSWkAJ0C_7bpLm0lYQ/exec'
const getTotalURL ='https://script.google.com/macros/s/AKfycbx_gv-g934Et1zVNuDXV3Ir1o9FXmZNQQHZ1kAHO5kA2voEhrBHKZvQngDCPJBxjFzi1A/exec'

const getNewUsers = async () => {

    var accessToken = JSON.parse(localStorage.getItem("accessToken"));

    return await fetch(get_newUser, {
      redirect: "follow",
      headers: {
        'Accept': 'application/json, text/plain, */*',
      },
      method: "POST",
      body: JSON.stringify({
        'Authorization': `${accessToken}`
      })
    })
      .then((res) => res.json())
      .then((result) => { return result; });
  };

  const updateStatusAPI = async (id, status) => {

    var accessToken = JSON.parse(localStorage.getItem("accessToken"));

    return await fetch(updateStatusURL, {
      redirect: "follow",
      headers: {
        'Accept': 'application/json, text/plain, */*',
      },
      method: "POST",
      body: JSON.stringify({
        'Authorization': `${accessToken}`,
        'id': id,
        "status" : status
      })
    })
      .then((res) => res.json())
      .then((result) => { return result; });
  };

  const getUserNumberAPI = async (name) => {

    var accessToken = JSON.parse(localStorage.getItem("accessToken"));

    return await fetch(getUserNumberURL, {
      redirect: "follow",
      headers: {
        'Accept': 'application/json, text/plain, */*',
      },
      method: "POST",
      body: JSON.stringify({
        'Authorization': `${accessToken}`,
        'name': name,
      })
    })
      .then((res) => res.json())
      .then((result) => { return result; });
  };

  const getTotalAPI = async () => {

    var accessToken = JSON.parse(localStorage.getItem("accessToken"));

    return await fetch(getTotalURL, {
      redirect: "follow",
      headers: {
        'Accept': 'application/json, text/plain, */*',
      },
      method: "POST",
      body: JSON.stringify({
        'Authorization': `${accessToken}`,
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