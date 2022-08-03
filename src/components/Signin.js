import React from "react";


function Signin({footer}) {
  return (
    <div className="card bg self-end flex justify-center content-between p-10 ">
      <div className="">
      <div className="p-5 flex flex-col gap-2">
        <div className="">Company Name</div>
        <div className=""><input className='w-full' type='text' placeholder="your company's name" /></div>
        <div className="">Email</div>
        <div className=""><input className='w-full' type='email' placeholder="your email" /></div>
        <div className="">Password</div>
        <div className=""><input className='w-full' type='password' placeholder="At least 8 characters" /></div>
      </div>
      <div className='p-5'>
        <input className="w-full" type='submit' value='Sign in' />
        {footer}
      </div>
    </div>
    </div>
  )
}

export default Signin;