import { Link } from "react-router-dom";
import { FaBed, FaSquareFull } from "react-icons/fa";
import pic from "../../../src/asset/house.png";

const featuredProperties = [
  {
    id: 1,
    img: pic, // Corrected image path
    desc: "Lorem, ipsum dolor sit ",
    bed: "4 beds",
    sqm: "200 Square meter",
    ownerprice: "$500",
    price: "$5000",
  },
  {
    id: 2,
    img: pic, // Corrected image path
    desc: "Lorem, ipsum dolor ",
    bed: "3 beds",
    sqm: "500 Square meter",
    ownerprice: "$500",
    price: "$5000",
  },
  {
    id: 3,
    img: pic, // Corrected image path
    desc: "Lorem, ipsum dolor ",
    bed: "3 beds",
    sqm: "500 Square meter",
    ownerprice: "$500",
    price: "$5000",
  },
];

export const FeaturedProperties = () => {
  return (
    <div className="h-full w-full mt-[7.5rem]">
      <div className="max-w-[1100px] h-full mx-auto p-5 flex flex-col items-center">
        <div className="flex flex-col items-center gap-2 mb-[3rem]">
          <h5 className="text-[#777] text-xl font-normal">
            Properties you may like
          </h5>
          <h2 className="text-[#777] text-2xl font-bold">
            Our featured properties
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-5 items-center justify-center">
          {featuredProperties.map((item) => (
            <div
              key={item.id}
              className="p-4 shadow-2xl rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <Link to={`/propertyDetail/${item.id}`}>
                <img
                  src={item.img}
                  alt="Property"
                  className="max-h-[300px] w-full object-cover rounded-xl"
                />
              </Link>
              <div className="mt-4">
                <div className="flex items-center justify-between py-2 gap-3">
                  <span className="text-xl font-semibold">
                    {item.ownerprice}
                  </span>
                  <img
                    src={item.img}
                    alt="Owner"
                    className="h-[40px] w-[40px] rounded-full"
                  />
                </div>
                <div className="flex gap-4">
                  <span className="flex gap-2 items-center">
                    {item.bed} <FaBed size={20} className="text-blue-500" />
                  </span>
                  <span className="flex gap-2 items-center">
                    {item.sqm}{" "}
                    <FaSquareFull size={20} className="text-blue-500" />
                  </span>
                </div>
                <div className="mt-2 text-gray-700">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
