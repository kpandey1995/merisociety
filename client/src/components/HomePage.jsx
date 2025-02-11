import { Button } from "./Button";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg text-white bg-secondary w-max text-center p-2 h-max px-4">
          <Heading label={"IO Apartments"} />
          <SubHeading label={"Welcome to the IO Apartments"} />
          <div className="pt-4">
            <Button
              label={"Admin"}
              onClick={() => {
                navigate("/admin/signin");
              }}
            />
          </div>
          <div className="pt-4">
            <Button
              label={"Events"}
              onClick={() => {
                navigate("/event");
              }}
            />
          </div>
          <div className="pt-4">
            <Button
              label={"Visitors"}
              onClick={() => {
                navigate("/visitor");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
