const VerifyPayment = () => {
  return (
    <div className=" flex justify-center flex-col items-center h-screen "> 
        <h2 className="text-3xl font-wix mt-5 underline font-semibold">Verify Employee Payment</h2>
        <form action="" className="mx-auto  mt-10 flex flex-row items-end">
           <div>
           <h2 className="font-normal mb-2 text-xl ">Wallet Address :</h2>
           <input type="text" className="outline-none border border-gray rounded-md p-2 " placeholder="enter employee wallet address"/>
           </div>
           <button type="submit" className="bg-blue-900 text-white px-3 py-2 rounded-md ml-3 hover:bg-blue-700">
              Verify
           </button>
        </form>
     
    </div>
  )
}

export default VerifyPayment
