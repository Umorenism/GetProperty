import { AiOutlineSearch } from "react-icons/ai";

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-img p-4 relative">
      <div className="absolute inset-0 bg-black opacity-10 backdrop-blur-md"></div>
      <div className=" max-w-full flex-1 m-auto h-full flex flex-col items-center justify-center w-full">
        <h1 className="text-white font-bold text-center text-sm  md:mb-4 md:text-4xl  ">
          Let find your dream place right now
        </h1>
        <p className="text-white text-sm text-center font-semibold mb-2">
          Search the best selection of luxury real estate..
        </p>
        <div className="md:w-[50%] border-1 border-orange-500 p-4 rounded-xl flex justify-between items-center bg-white py-2 flex-col m-2 md:flex-row">
          <select
            // onChange={(e: any) => setType(e.target.value)}
            className="h-[40px] min-w-[160px] max-w-[200px] border-none bg-blue-500 rounded-full p-2 text-white m-2"
          >
            <option disabled>Select types</option>
            <option value="beach">Town</option>
            <option value="mountain">City</option>
            <option value="village">Village</option>
          </select>
          <select
            // onChange={(e: any) => setPriceRange(e.target.value)}
            className="h-[40px] min-w-[160px] max-w-[200px] border-none bg-blue-500 rounded-full p-2 text-white m-2"
          >
            <option disabled className="pr-2">
              Select price Range
            </option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,000</option>
          </select>
          <select
            // onChange={(e: any) => setContinent(e.target.value)}
            className="h-[40px] min-w-[160px] max-w-[200px] border-none bg-blue-500 rounded-full p-2 text-white m-2"
          >
            <option disabled>Select Continents</option>
            <option value="0">Ik</option>
            <option value="1">Uyo</option>
            <option value="2">Essien Udim</option>
            <option value="3">Annang</option>
            <option value="4">Ini</option>
          </select>
          <button>
            <AiOutlineSearch className="p-1 w-[40px] h-[40px] rounded-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};
