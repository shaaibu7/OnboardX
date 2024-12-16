import React from "react";
import useContract from "../hooks/useContract";
import { useCallback, useState, useEffect } from "react";

const PaymentStatus = () => {
  const readOnlyOnboardContract = useContract(true);
  const [employee, setEmployee] = useState([]);

  const fetchEmployee = useCallback(async () => {
    if(!readOnlyOnboardContract) return;
    console.log("provider: ", readOnlyOnboardContract.runner);

    try {
      const data = await readOnlyOnboardContract.getEmployee();
      const result = await data.toArray();
      setEmployee(data);

      console.log("This is the proxy object", data);
      console.log("This is the state data", employee);
      
     

      

    } catch (error) {
      console.log("error fetching employees: ", error);
    }
  }, [readOnlyOnboardContract]);

  useEffect(() => {
    fetchEmployee();
  }, [fetchEmployee]);
  return (
    <div className="pt-20 flex items-center justify-center">
      <div className="flex flex-col justify-center w-[60%]">
        <h2 className="text-3xl underline mb-4 text-blue-400  font-wix">
          Employment Status
        </h2>
        <div className="flex flex-row  justify-between font-montserrat">
          <div>
            <h2 className="text-xl font-bold mb-2">Employee Name</h2>
            <p className="text-green-400 font-semibold">{employee.name}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Role</h2>
            <p>{ employee.role }</p>
          </div>
        </div>
        <button
          type="submit"
          className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Request Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentStatus;
