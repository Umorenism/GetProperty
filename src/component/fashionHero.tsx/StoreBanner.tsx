import img from "../../asset/fashionpic3.png";

export const StoreBanner = () => {
  return (
    <div className=" px-4 py-14 xl:px-28 ">
      <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
        <div className="bg-white md:w-1/2">
          <h1 className="text-5xl font-bold mb-5">Collections</h1>
          <p className="text-xl mb-7">
            You can explore and shop many different collection from various
            brand here.
          </p>
          <button className="bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-md">
            Shop Now
          </button>
        </div>

        <div className=" md:w-1/2">
          <img src={img} alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};
