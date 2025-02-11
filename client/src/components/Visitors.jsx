import { useState } from "react";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { InputBox } from "./InputBox";
import { SubHeading } from "./SubHeading";
import axios from "axios";

const PORT = import.meta.env.VITE_PORT;

export const Visitors = () => {
  const [name, setName] = useState("");
  const [contact_no, setContact_no] = useState("");
  const [block, setBlock] = useState("");
  const [room_no, setRoom_no] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [purpose, setPurpose] = useState("");

  return (
    <div className="bg-secondary h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-primary w-max text-center p-2 h-max px-4">
          <Heading label={"Visitors"} />
          <SubHeading label={"Enter your credentials for the entry"} />
          <InputBox
            placeholder="Enter "
            type={"text"}
            onChange={(e) => {
              setName(e.target.value);
            }}
            label={"Name"}
          />
          <InputBox
            placeholder="Enter Contact Number"
            type={"number"}
            onChange={(e) => {
              setContact_no(e.target.value);
            }}
            label={"Contact Number"}
          />
          <InputBox
            placeholder="Enter Block"
            type={"text"}
            onChange={(e) => {
              setBlock(e.target.value);
            }}
            label={"Block"}
          />
          <InputBox
            placeholder="Enter Room Number"
            type={"number"}
            onChange={(e) => {
              setRoom_no(e.target.value);
            }}
            label={"Room Number"}
          />
          <InputBox
            placeholder="Enter Date dd-mm-yyyy"
            type={"text"}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            label={"Date"}
          />
          <InputBox
            placeholder="Enter Time"
            type={"time"}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            label={"Time"}
          />
          <InputBox
            placeholder="Enter Purpose"
            type={"text"}
            onChange={(e) => {
              setPurpose(e.target.value);
            }}
            label={"Purpose"}
          />
          <div className="pt-4">
            <Button
              label={"Submit"}
              onClick={async () => {
                const response = await axios
                  .post(`http://localhost:${PORT}/submitform`, {
                    name: name,
                    contact_no: contact_no,
                    block: block,
                    room_no: room_no,
                    date: date,
                    time: time,
                    purpose: purpose,
                  })
                  .then((res) => {
                    alert(res.data);
                  });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
