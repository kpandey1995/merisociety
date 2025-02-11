import axios from "axios";
import React, { useEffect, useState } from "react";
import apartmentPng from "../assets/apartment.png";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const PORT = import.meta.env.VITE_PORT;

export const AdminDashboard = () => {
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

  const navigate = useNavigate();

  return (
    <div>
      <div className="shadow h-14 flex justify-between bg-secondary text-white border-b-2 border-gray-500">
        <div className="flex p-2 justify-center h-full ml-4 text-2xl font-bold">
          <img src={apartmentPng} alt="apartment" className="w-8 h-8 mr-2" />
          <div>IO Apartments</div>
        </div>
        <div className="flex">
          <div className="flex justify-between h-full mr-4">
            <Button
              label={"Events"}
              onClick={() => {
                navigate("/admin/event");
              }}
            ></Button>
            <Button
              label={"Sort by Date"}
              onClick={() => {
                navigate("/admin/date");
              }}
            ></Button>
            <Button
              label={"Sort by Time"}
              onClick={() => {
                navigate("/admin/time");
              }}
            ></Button>
            <Button
              label={"Sort by Block"}
              onClick={() => {
                navigate("/admin/block");
              }}
            ></Button>
            <Button
              label={"Sort by Room"}
              onClick={() => {
                navigate("/admin/room");
              }}
            ></Button>
          </div>
        </div>
      </div>

      <div className="p-2">
        <h1 className="text-3xl text-center p-4">All Users Data</h1>
        <table className="w-max border-collapse">
          <thead>
            <tr>
              <th className="p-8 border-b-2 border-third">Name</th>
              <th className="p-8 border-b-2 border-third">Contact No</th>
              <th className="p-8 border-b-2 border-third">Block</th>
              <th className="p-8 border-b-2 border-third">Room No</th>
              <th className="p-8 border-b-2 border-third">Date</th>
              <th className="p-8 border-b-2 border-third">Time</th>
              <th className="p-8 border-b-2 border-third">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) &&
              users.map((user) => (
                <tr key={user._id}>
                  <td className="p-8 border-b-2 border-third">{user.name}</td>
                  <td className="p-8 border-b-2 border-third">
                    {user.contact_no}
                  </td>
                  <td className="p-8 border-b-2 border-third">{user.block}</td>
                  <td className="p-8 border-b-2 border-third">
                    {user.room_no}
                  </td>
                  <td className="p-8 border-b-2 border-third">{user.date}</td>
                  <td className="p-8 border-b-2 border-third">{user.time}</td>
                  <td className="p-8 border-b-2 border-third">
                    {user.purpose}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
