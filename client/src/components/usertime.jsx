import React, { useEffect, useState } from "react";
import AppBar from "./AppBar";

const PORT = import.meta.env.VITE_PORT;

const UserByTime = () => {
  const [users, setUsers] = useState([]);
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const fetchUser = async () => {
    try {
      const res = await fetch(
        `http://localhost:${PORT}/visitor/time/${date}/${from}/${to}`
      );
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      } else {
        setUsers([]);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (date && from && to) {
      fetchUser();
    }
  }, [date, from, to]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };
  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  return (
    <div>
      <AppBar></AppBar>

      <h1 className="text-center text-3xl mt-5">Visitors Data by Time</h1>
      <div className="flex justify-center">
        <label>
          Date:
          <input
            type="text"
            value={date}
            onChange={handleDateChange}
            placeholder="dd-mm-yyyy"
            className="text-center w-1/2 p-2 mt-5 border-2 border-third rounded-md"
          />
        </label>
        <label>
          From:
          <input
            type="text"
            value={from}
            onChange={handleFromChange}
            placeholder="hh:mm"
            className="text-center w-1/2 p-2 mt-5  border-2 border-third rounded-md"
          />
        </label>
        <label>
          To:
          <input
            type="text"
            value={to}
            onChange={handleToChange}
            placeholder="hh:mm"
            className="text-center w-1/2 p-2 mt-5  border-2 border-third rounded-md"
          />
        </label>
      </div>
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
                <td className="p-8 border-b-2 border-third">{user.room_no}</td>
                <td className="p-8 border-b-2 border-third">{user.date}</td>
                <td className="p-8 border-b-2 border-third">{user.time}</td>
                <td className="p-8 border-b-2 border-third">{user.purpose}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserByTime;
