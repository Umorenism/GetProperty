import { Link } from "react-router-dom";
import img1 from "../../../src/asset/house3.png";
import img2 from "../../../src/asset/house4.png";
import img3 from "../../../src/asset/house5.png";

// Define the property types and their details
const propertyTypes = [
  { type: "beach", label: "Beach Properties", image: img1 },
  { type: "mountain", label: "Mountain Properties", image: img2 },
  { type: "village", label: "Village Properties", image: img3 },
];

export const PopularProperties = () => {
  return (
    <div className="min-h-screen max-w-full w-full mt-5">
      <div className="max-w-6xl p-4 min-h-[400px] m-auto flex flex-col">
        <div className="flex items-center flex-col gap-5">
          <h5 className="text-gray-500 text-xl">
            Different Types of Properties
          </h5>
          <h2 className="text-gray-900 font-bold text-3xl">
            Best Types of Property in Uyo
          </h2>
        </div>
        <div className="flex flex-col md:flex-row relative mt-4 gap-5 p-4">
          {propertyTypes.map((property) => (
            <Link
              key={property.type}
              to={`/properties?type=${property.type}&continent=1&priceRange=2`}
              className="shadow-lg p-4 relative w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={property.image}
                className="relative rounded-2xl w-full h-[400px] shadow-md object-cover transition-transform duration-300 hover:scale-105"
                alt={`${property.label}`}
              />
              <div className="absolute text-white p-2 bg-blue-800 bottom-20 rounded-xl px-2 left-4">
                {property.type}
              </div>
              <h5 className="ml-2 mt-4 text-gray-900 text-center font-bold text-xl">
                {property.label}
              </h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
