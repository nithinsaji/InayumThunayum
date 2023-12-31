import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import AdminService from "../../services/admin.service";
import Table from "../UI/Table";


var data = null;

const NewRegistration = () => {
const [loading, setloading] = useState(true);

const navigate = useNavigate();

  const validateToken = (message) => {
    if(message === 'The token has expired', message === 'The token is not vaild') {
        toast.error(message);
        localStorage.clear();
        navigate('/signin')
    }
  }
  

  const getNewUsersList = async (e) => {
    setloading(true)
    await AdminService.getNewUsers().then(
      (res) => {
    validateToken(res?.message)
        data = res.data;
      }
    );
    console.log(data);
    setloading(false)
  }

  const updateStatus = async (id , status) => {
    setloading(true)
    await AdminService.updateStatusAPI(id, status).then(
      (res) => {
        const status = res.status;
        data = res.data.data;
        status === 'success' ? toast.success(res.message) : toast.error(res.message);
      }
    );
    setloading(false)
  }

  useEffect(() => {
    getNewUsersList();
  }, []);

  return (
    <div>
      <h1>NewRegistration</h1>
      {!loading && <Table data={data} updateStatus={updateStatus} />}
      {!loading && data == null && <p>There is No New users</p>}
    </div>
  );
};

export default NewRegistration;
