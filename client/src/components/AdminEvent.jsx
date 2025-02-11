import { useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PORT = import.meta.env.VITE_PORT;

export const AdminEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [poster, setPoster] = useState();
  const navigate = useNavigate();

  return (
    <div className="bg-secondary h-screen flex justify-center">
      <div className="flex flex-col justify-center w-max">
        <div className="rounded-lg bg-primary w-200 text-center p-2 h-max px-4">
          <Heading label={"Event"} />
          <SubHeading label={"Enter details of the event"} />
          <InputBox
            placeholder="Enter Event Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            label={"Title"}
            type={"text"}
          />
          <InputBox
            placeholder="Enter Event Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            label={"Description"}
            type={"text"}
          />
          <InputBox
            placeholder="Enter Event Date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            label={"Date"}
            type={"text"}
          />
          <InputBox
            placeholder="Enter Event Time"
            onChange={(e) => {
              setTime(e.target.value);
            }}
            label={"Time"}
            type={"text"}
          />
          <InputBox
            placeholder="Enter Event Poster"
            onChange={(e) => {
              setPoster(e.target.files[0]);
            }}
            label={"Poster"}
            type={"file"}
          />
          <div className="pt-4">
            <Button
              label={"Submit"}
              onClick={async () => {
                const formData = new FormData();
                formData.append("title", title);
                formData.append("description", description);
                formData.append("date", date);
                formData.append("time", time);
                formData.append("poster", poster);

                try {
                  const response = await axios.post(
                    `http://localhost:${PORT}/admin/event`,
                    formData,
                    {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                  navigate("/admin/dashboard/");
                } catch (err) {
                  alert(err.response.data.message);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEvent;
