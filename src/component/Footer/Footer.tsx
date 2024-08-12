export const Footer = () => {
  return (
    <footer className="max-h-[500px] w-full mt-20 text-white bg-gray-950 rounded-t-2xl p-4">
      <div className="w-full text-center flex flex-col md:flex-row h-full mx-auto md:justify-evenly md:items-start p-4">
        <div className="flex flex-col text-start max-w-xs m-2">
          <h2 className="text-2xl font-bold">About the App</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            aut!
          </p>
        </div>
        <div className="flex flex-col gap-2 text-start max-w-xs m-2">
          <h2 className="text-2xl font-bold">Contact</h2>
          <span>Phone: +2349060789908</span>
          <span>YouTube: Dealdrive</span>
          <span>GitHub: Umorenism</span>
        </div>
        <div className="flex flex-col gap-2 text-start max-w-xs m-2">
          <h2 className="text-2xl font-bold">Location</h2>
          <span>Continent: Africa</span>
          <span>Country: Nigeria</span>
          <span>Current Location: Uyo</span>
        </div>
      </div>
    </footer>
  );
};
