import { useEffect, useState } from "react";
import AppBar from "./AppBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PORT = import.meta.env.VITE_PORT;

export const Event = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      const response = await axios.get(`http://localhost:${PORT}/admin/events`);
      setEvents(response.data);
    };
    data();
  });

  return (
    <div>
      <AppBar></AppBar>
      <div className="w-screen text-3xl text-center">Events</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-4 mt-10">
        {events.map((event) => (
          <div key={event._id} className="p-2 border-2 border-third">
            <img
              src={`http://localhost:3356/posters/${event.poster}`}
              alt={event.title}
              className="w-full h-60 object-cover"
            />
            <div className="text-2xl text-center mt-2">{event.title}</div>
            <div className="text-lg">Date: {event.date}</div>
            <div className="text-lg">Time: {event.time}</div>
            <div className="text-lg">{event.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
