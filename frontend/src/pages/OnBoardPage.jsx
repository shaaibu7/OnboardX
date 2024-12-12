import React, { useState } from "react";

const OnBoardPage = () => {
  const [onboarded, setOnBoarded] = useState(false);

  const handle_onBoard=()=>{
    setOnBoarded(true)
  }

  return (
    <div className="relative  bg-[url('/home/james/OnboardX/frontend/src/assets/3394893.jpg')] bg-cover w-full h-screen">
      <div className="pt-24 absolute inset-0 bg-black/30 backdrop-blur-none px-3 md:px-0">
        {!onboarded && (
          <form className="max-w-sm mx-auto" onSubmit={()=>handle_onBoard()}>
            <h2 className="text-center text-2xl mb-5">Employee Onboarding</h2>
            <div>
              <div className="mb-5">
                <label
                  htmlFor="company name"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
                >
                  Employee Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="company name"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
                >
                  Role/Position
                </label>
                <input
                  type="text"
                  id="Employee_name"
                   className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                OnBoard Employee
              </button>
            </div>
          </form>
        )}
        {onboarded && (
          <form className="max-w-sm mx-auto ">
            <h2 className="text-center text-3xl underline mb-5 text-black-500">
              Payment & Escrow
            </h2>
            <div>
              <div className="mb-5">
                <label
                  htmlFor="company name"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
                >
                  Payment amount
                </label>
                <input
                  type="number"
                  id="companyName"
                  className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="company name"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
                >
                  Payment For
                </label>
                <select
                  className="w-full outline-none py-3 px-2 rounded"
                 
                >
                  <option value="disable" disabled selected>
                    payment for
                  </option>
                  <option value="company">Salary</option>
                  <option value="freelancer">bonus</option>
                </select>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                initiate Escrow payment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default OnBoardPage;
