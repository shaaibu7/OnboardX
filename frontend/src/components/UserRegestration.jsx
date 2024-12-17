import React, { useState } from "react";
import useCreateCompany from "../hooks/useCreateCompany";
import { ColorRing } from "react-loader-spinner";
import { useContext } from "react";
import ContextApi from "../context/ContextApi";

const UserRegestration = () => {
  const {registerLoading}=useContext(ContextApi);
  const handleCreateCompany = useCreateCompany();
  const [company, setCompany] = useState({
    name: "",
    reg_no: ""
  })
  

  const handleInputChange = (name, e) => {
    setCompany((preState) => ({ ...preState, [name]: e.target.value }));
  }

  const { name, reg_no } = company;
  return (
    <div className="w-full flex-col items-center justify-center align-middle px-3 md-px-0">
      <h2 className="text-center text-white font-bold  text-4xl mb-5">
        Company Registration
      </h2>
      <form className="relative max-w-sm mx-auto">
          <div>
            <div className="mb-5">
              <label
                htmlFor="company name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={name}
                onChange={(e) => handleInputChange("name", e)}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="company name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Registration Number
              </label>
              <input
                type="text"
                id="Registration_Number"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={reg_no}
                onChange={(e)=> handleInputChange("reg_no", e)}
              />
            </div>
           

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => 
              {
                e.preventDefault()
                handleCreateCompany(
                  name,
                  reg_no
                )
              }
              }
            >
              Register Company
            </button>
          </div>   
          {registerLoading && <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
          </div>}
      </form>
    </div>
  );
};

export default UserRegestration;
