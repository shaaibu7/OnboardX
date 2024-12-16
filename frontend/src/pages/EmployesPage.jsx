import React from 'react'
import useContract from '../hooks/useContract'
import { useCallback, useEffect, useState } from 'react'

const EmployesPage = () => {
  const readOnlyOnboardContract = useContract(true);
  const [employees, setEmployee] = useState([]);

  const fetchEmployees = useCallback(async () => {
    if(!readOnlyOnboardContract) return;
    console.log("provider: ", readOnlyOnboardContract.runner);

    try {
      const data = await readOnlyOnboardContract.getEmployees();
      const result = await data.toArray();
      setEmployee(data);

      console.log("This is the proxy object", data);
      console.log("This is the state data", employees);
      
     

      

    } catch (error) {
      console.log("error fetching employees: ", error);
    }
  }, [readOnlyOnboardContract]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);
 
  return (
    <div className='pt-20 px-8'>
        <h2 className='font-wix text-3xl underline my-5'>Onboarded Employees</h2>
        {employees.length === 0 ? (
          <p className="text-white text-center">No Employees available</p>
        ) : (
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 font-montserrat"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3 text-white md:text-base">Name</th>
                <th scope="col" class="px-6 py-3 text-white md:text-base">Role</th>
                <th scope="col" class="px-6 py-3 text-white md:text-base">Address</th>
              </tr>
            </thead>
            <tbody class="ta" id="bookingTable">
              
              {
                employees.map((employee, index) => (
                  <tr class="bg-white border-b text-black dark:border-gray-700" key={index}>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                  {employee.name}
                  </th>
                  <td class="px-6 py-4">{employee.role}</td>
                  <td class="px-6 py-4">{employee.employeeAddress}</td>
                  
                </tr>
                ))
              }

            </tbody>
          </table>
        )}
    </div>
  )
}

export default EmployesPage
