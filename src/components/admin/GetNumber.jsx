import React, { useState } from 'react'
import AdminService from '../../services/admin.service';

var data = null;
const GetNumber = () => {
  const [loading, setloading] = useState(true);
  const [name, setName] = useState('')
  

  const search = async() =>{
    setloading(true)
    await AdminService.getUserNumberAPI(name).then(
      (res) => {
        data = res.data;
        setloading(false)
        console.log(data);
      }
    )
    
  }
  return (
    <div>
      <h1>GetNumber</h1>
      <div><input type="text" onChange={(e) => setName(e.target.value)}/><button onClick={search}>search</button></div>
      {!loading && <table>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Full Name</th>
          <th>Mobile Number</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((user) =>(
            <tr key={user.id}>
            <td data-column="S.no">{user.id}</td>
            <td data-column="Full Name">{user.name}</td>
            <td data-column="Mobile Number">{user.mobile}</td>
          </tr>
        ))}
      </tbody>
    </table>}
    </div>
  )
}

export default GetNumber