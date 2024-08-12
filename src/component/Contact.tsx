import { Button } from "../layout/Button";

interface ContactProps {
  closeForm: any;
}
export const Contact: React.FC<ContactProps> = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
      <div className=" popup-form absolute mt-12 text-blue-400">
        <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-center text-4xl font-semibold">Contact us</h1>
          <div className="flex flex-col">
            <input
              type="text"
              name="UserFirstName"
              id="UserFirstName"
              placeholder="FirstName"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="UserLastName"
              id="UserFirstName"
              placeholder="LastName"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Your email"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Phone Number"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <textarea
              name="text"
              id=""
              className="py-5 border outline-none bg-[#d5f2ec] p-2"
            />
          </div>
          <div className="flex gap-5 justify-center">
            <Button title="Book Appointment" />
            <button
              onClick={closeForm}
              className=" bg-backgrounColor bg-red-500 px-10 py-2 rounded-lg text-white"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
