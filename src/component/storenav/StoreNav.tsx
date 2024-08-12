import { Link } from "react-router-dom";

const Collection = [
  { title: "Jewelry & Accessories", path: "/" },
  { title: "Clothing & Shoes", path: "/" },
  { title: "Home & Living", path: "/" },
  { title: "Weeding & Party", path: "/" },
  { title: "Toys & Entertainment", path: "/" },
  { title: "Art & Collections", path: "/" },
  { title: "Crafts & Tools", path: "/" },
];
export const StoreNav = () => {
  return (
    <div className="pt-6 ">
      <ul className="lg:flex justify-between items-center  hidden container lg:px-16 mb-10">
        {Collection.map((title, index) => (
          <div key={index}>
            <Link to="/" className="hover:text-orange-500">
              {title.title}
            </Link>
          </div>
        ))}
      </ul>
      <hr className="hidden md:flex" />
    </div>
  );
};
