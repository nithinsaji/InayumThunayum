import React from "react";
// import "./style/Table.css";
const Table = ({data, updateStatus}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Full Name</th>
          <th>Mobile Number</th>
          <th>Status</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((user) =>(
            <tr key={user.id}>
            <td data-column="S.no">{user.id}</td>
            <td data-column="Full Name">{user.name}</td>
            <td data-column="Mobile Number">{user.mobile}</td>
            <td data-column="Status">{user.status}</td>
            <td data-column="Update">
              <button onClick={() => updateStatus(user.id, 'Active')}>Activate</button>
              <button onClick={() => updateStatus(user.id, 'disabled')}>Disable</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
