import React, { useEffect, useState } from "react";
import AppBar from "./AppBar";

const PORT = import.meta.env.VITE_PORT;

const UserByDate = () => {
  const [users, setUsers] = useState([]);
  const [date, setDate] = useState(""); // State to store the date input

  const fetchUsersByDate = async (dateParam) => {
    try {
      const res = await fetch(
        `http://localhost:${PORT}/visitor/dates/${dateParam}`
      );

      if (res.status === 404) {
        const data = await res.json();
        console.log(data.message); // Log the error message from the server
        setUsers([]); // Set users to an empty array
      } else {
        const data = await res.json();
        setUsers(data);
        console.log(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (date) {
      fetchUsersByDate(date);
    }
  }, [date]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <AppBar></AppBar>

      <h1 className="text-center text-3xl mt-5">Visitors Data by Date</h1>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Enter date (dd-mm-yyyy)"
          value={date}
          onChange={handleDateChange}
          className="text-center w-1/4 p-2 mt-4 border-2 border-third rounded-md"
        />
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

export default UserByDate;
