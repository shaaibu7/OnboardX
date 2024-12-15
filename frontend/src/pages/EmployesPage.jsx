import React from 'react'

const EmployesPage = () => {
  return (
    <div className='pt-20 px-8'>
        <h2 className='font-wix text-3xl underline my-5'>Onboarded Employees</h2>
        <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 font-montserrat"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3 text-white md:text-base">Wallet address</th>
                <th scope="col" class="px-6 py-3 text-white md:text-base">Status</th>
                <th scope="col" class="px-6 py-3 text-white md:text-base">Role</th>
                <th scope="col" class="px-6 py-3 text-white md:text-base">Payment</th>
              </tr>
            </thead>
            <tbody class="ta" id="bookingTable">
              <tr class="bg-white border-b text-black dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                 0xAb5801A7D398351b8bE11C439e05C5B3259aec9B
                </th>
                <td class="px-6 py-4">Employed</td>
                <td class="px-6 py-4">FullTime</td>
                <td class="px-6 py-4 text-red-600 font-semibold">Pending</td>
                
              </tr>

              <tr class="bg-white border-b text-black dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                 0xAb5801A7D398351b8bE11C439e05C5B3259aec9B
                </th>
                <td class="px-6 py-4">Employed</td>
                <td class="px-6 py-4">PartTime</td>
                <td class="px-6 py-4 text-green-500 font-semibold">Paid</td>
                
              </tr>

              <tr class="bg-white border-b text-black dark:border-gray-700">
                <th
                  
                  scope="row"
                  class=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                 0xAb5801A7D398351b8bE11C439e05C5B3259aec9B
                </th>
                <td class="px-6 py-4 text-red-400">Fired</td>
                <td class="px-6 py-4">PartTime</td>
                <td class="px-6 py-4 text-green-500 font-semibold">Paid</td>
                
              </tr>
            </tbody>
          </table>
    </div>
  )
}

export default EmployesPage
