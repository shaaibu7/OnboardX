import React from 'react'
import useContract from '../hooks/useContract'
import { useCallback, useEffect, useState } from 'react'

const CompanyPage = () => {
  const readOnlyOnboardContract = useContract(true);
  const [company, setCompany] = useState([]);

  const fetchCompany = useCallback(async () => {
    if(!readOnlyOnboardContract) return;
    console.log("provider: ", readOnlyOnboardContract.runner);

    try {
      const data = await readOnlyOnboardContract.getAllCompaniesData();
      const result = await data.toArray();
      setCompany(data);

      console.log(data);
      

    } catch (error) {
      console.log("error fetching employees: ", error);
    }
  }, [readOnlyOnboardContract]);

  useEffect(() => {
    fetchCompany();
  }, [fetchCompany]);
 
  return (
    <div className='pt-20 px-8'>
        <h2 className='font-wix text-3xl underline my-5'>Registered Companies</h2>
        {company.length === 0 ? (
          <p className="text-white text-center">No Registered Companies</p>
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
              </tr>
            </thead>
            <tbody class="ta" id="bookingTable">
              
              {
                company.map((employee, index) => (
                  <tr class="bg-white border-b text-black dark:border-gray-700" key={index}>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                  {employee.name}
                  </th>
                  <td class="px-6 py-4">{employee.reg_no}</td>
                 
                  
                </tr>
                ))
              }

            </tbody>
          </table>
        )}
    </div>
  )
}

export default CompanyPage
