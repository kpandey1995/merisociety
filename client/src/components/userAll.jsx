// UserAll.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const PORT = import.meta.env.VITE_PORT;

const UserAll = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:${PORT}/visitor/all`);
        setUsers(res.data.visitor);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  });

  return (
    <div className="UserAll">
      = <h1>All Users Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact No</th>
            <th>Block</th>
            <th>Room No</th>
            <th>Date</th>
            <th>Time</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.contact_no}</td>
                <td>{user.block}</td>
                <td>{user.room_no}</td>
                <td>{new Date(user.date).toLocaleDateString()}</td>
                <td>{user.time}</td>
                <td>{user.purpose}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserAll;
