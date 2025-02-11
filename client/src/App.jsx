import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminSignIn from "./components/AdminSignIn";
import AdminSignUp from "./components/AdminSignUp";
import AdminDashboard from "./components/AdminDashboard";
import HomePage from "./components/HomePage";
import { Visitors } from "./components/Visitors";
import UserByDate from "./components/userdate";
import UserByRoom from "./components/userroom";
import UserByBlock from "./components/userblock";
import UserByTime from "./components/usertime";
import AdminEvent from "./components/AdminEvent";
import Event from "./components/Event";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/admin/signin" element={<AdminSignIn />}></Route>
          <Route path="/admin/signup" element={<AdminSignUp />}></Route>
          <Route path="/admin/dashboard/" element={<AdminDashboard />}></Route>
          <Route path="/visitor" element={<Visitors />}></Route>
          <Route path="/admin/date" element={<UserByDate />}></Route>
          <Route path="/admin/room" element={<UserByRoom />}></Route>
          <Route path="/admin/block" element={<UserByBlock />}></Route>
          <Route path="/admin/time" element={<UserByTime />}></Route>
          <Route path="/admin/event" element={<AdminEvent />}></Route>
          <Route path="/event" element={<Event />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
