import React from 'react';
import UserRegestration from '../components/UserRegestration';

const RegisterUser = () => {
  return (
    <div className='relative w-full h-screen bg-[url("src/assets/man-handshaking-his-employer-after-being-accepted-his-new-office-job.jpg")] bg-cover flex flex-col items-center pt-20 '>
       <div className="pt-24 absolute inset-0 bg-black/30 backdrop-blur-none">
          <UserRegestration/>
       </div>
    </div>
  )
}

export default RegisterUser
