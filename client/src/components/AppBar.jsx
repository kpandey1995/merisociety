import apartmentPng from "../assets/apartment.png";

export const AppBar = () => {
  return (
    <div className="shadow h-14 flex justify-between bg-secondary text-white border-b-2 border-gray-500">
      <div className="flex flex-col justify-center h-full ml-4 text-2xl font-bold">
        <div className="flex justify-center">
          <img src={apartmentPng} alt="apartment" className="w-8 h-8 mr-2" />
          <div>IO Apartments</div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
