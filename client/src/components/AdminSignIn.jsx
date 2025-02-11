import { useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning } from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PORT = import.meta.env.VITE_PORT;

export const AdminSignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-secondary h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-primary mb-2 text-center p-5 font-bold text-3xl">
          ADMIN
        </div>
        <div className="rounded-lg bg-primary w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            placeholder="Enter your username/email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label={"Email"}
          />
          <InputBox
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              label={"Sign in"}
              onClick={async () => {
                const response = await axios
                  .post(`http://localhost:${PORT}/admin/signin`, {
                    username,
                    password,
                  })
                  .catch((err) => {
                    alert(err.response.data.message);
                  });
                localStorage.setItem("token", response.data.token);
                navigate("/admin/dashboard/");
              }}
            />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/admin/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;
