import pic from "../../asset/house3.png";
export const PropertyDetail = () => {
  return (
    <div className=" min-h-screen p-4 justify-center items-center flex">
      <div className="w-full max-h-[800px] max-w-[1400px] flex gap-2 flex-col md:flex-row">
        <div className="md:w-[50%] w-full">
          <img src={pic} alt="" className="p-4" />
        </div>
        <div className=" md:w-[50%] w-full">
          <div className="p-4">
            <h1 className="text-xl font-bold">Title:Nigerian</h1>
            <p className="py-3 text-sm text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nisi.
            </p>
            <div className="flex justify-between items-center py-10 p-2">
              <div>
                Type:{" "}
                <button className="px-4 p-2 m-2 rounded-xl bg-blue-700 text-white">
                  Village
                </button>
              </div>
              <div>
                Type:{" "}
                <button className="px-4 p-2 m-2 rounded-xl bg-blue-700 text-white">
                  Nigeria
                </button>
              </div>
            </div>

            <p className="flex justify-between items-center p-2 py-4">
              <p className="text-xl font-bold">Price:200000</p>
              <div className="flex gap-2 justify-center items-center">
                <span>Owner</span>
                <img src={pic} alt="" className="h-10 w-10 rounded-full" />
              </div>
            </p>
            <div className="flex py-2 gap-2">
              <p className="text-xl font-bold">Desc:</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                tenetur?
              </p>
            </div>
            <button className="bg-blue-700 px-3 m-2 py-2 rounded-md text-white">
              Contact Owner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
