import React, { useEffect, useState } from "react";
import AppBar from "./AppBar";

const PORT = import.meta.env.VITE_PORT;

const UserByRoom = () => {
  const [users, setUsers] = useState([]);
  const [block, setBlock] = useState("");
  const [room, setRoom] = useState("");

  const fetchUser = async () => {
    try {
      const res = await fetch(
        `http://localhost:${PORT}/visitor/room/${block}/${room}`
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
    if (block && room) {
      fetchUser();
    }
  }, [block, room]);

  const handleBlockChange = (e) => {
    setBlock(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  return (
    <div>
      <AppBar></AppBar>

      <h1 className="text-center text-3xl mt-5">Visitors Data by Room</h1>
      <div className="flex justify-center">
        <label>
          Block:
          <input
            type="text"
            value={block}
            onChange={handleBlockChange}
            className="text-center w-1/2 p-2 mt-5 border-2 border-third rounded-md"
          />
        </label>
        <label>
          Room No:
          <input
            type="text"
            value={room}
            onChange={handleRoomChange}
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

export default UserByRoom;
