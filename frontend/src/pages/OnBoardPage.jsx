import React, { useState } from "react";
import useOnboardEmployee from "../hooks/useOnboardEmployee";
import { ColorRing } from "react-loader-spinner";
import { useContext } from "react";
import ContextApi from "../context/ContextApi";

const OnBoardPage = () => {
  const { isLoading } = useContext(ContextApi);
  const handleOnboardEmployee = useOnboardEmployee();
  const initialState = {
    name: "",
    role: "",
    payment: 0,
    employeeAddress: "",
    status: 0,
  };
  const [employee, setEmployee] = useState(initialState);

  const handleInputChange = (name, e) => {
    console.log(e.target.name);
    setEmployee((preState) => ({ ...preState, [name]: e.target.value }));
  };

  const { name, role, payment, employeeAddress, status } = employee;

  return (
    <div className="relative  bg-[url('/home/james/OnboardX/frontend/src/assets/3394893.jpg')] bg-cover w-full h-screen ">
      <div className="pt-24 absolute inset-0 bg-black/30 backdrop-blur-none px-3 md:px-0 ">
        <form className="relative max-w-sm mx-auto pb-5">
          <h2 className="text-center text-4xl mb-3 font-wix underline">
            Employee Onboarding
          </h2>
          <div className="bg-white p-4 rounded-md font-montserrat">
            <div className="mb-5">
              <label
                htmlFor="company name"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
              >
                Employee Name
              </label>
              <input
                name="name"
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
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
              >
                Role/Position :
              </label>
              <input
                name="role"
                type="text"
                id="Employee_name"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={role}
                onChange={(e) => handleInputChange("role", e)}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="wallet address"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
              >
                Wallet Address :
              </label>
              <input
                name="employeeAddress"
                type="text"
                id="wallet_address"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={employeeAddress}
                onChange={(e) => handleInputChange("employeeAddress", e)}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="company name"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
              >
                Payment amount :
              </label>
              <input
                name="payment"
                type="number"
                id="companyName"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={payment}
                onChange={(e) => handleInputChange("payment", e)}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="company name"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
              >
                Status :
              </label>
              <select
                className="w-full outline-none py-3 px-2 rounded"
                name="status"
                onChange={(e) => handleInputChange("status", e)}
              >
                <option value="disable" disabled selected>
                  status
                </option>
                <option name="parttime" value="0">
                  partTime
                </option>
                <option name="parttime" value="1">
                  fulltime
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => {
                e.preventDefault();
                handleOnboardEmployee(
                  name,
                  role,
                  payment,
                  employeeAddress,
                  status
                );
                setEmployee(initialState);
              }}
            >
              OnBoard Employee
            </button>
          </div>

          {isLoading && (
            <div className="w-full absolute top-0  left-0 right-0  flex items-center justify-center bottom-0 h-full ">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default OnBoardPage;
