import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Modal from "../features/Modal";
import Signup from "./Signup";
import Signin from "./Signin";


function Header() {
  const [signupModal,setSignupModal] = useState(false);
  const [signinModal,setSigninModal] = useState(false);
  return (
    <div className="flex items-center py-5 sw relative z-10">
        <div className="">
          <Link to="/">
            <h2 className="mr-6 self-start">
              <span className="text-white font-black">gebeta</span>
              <span className="text-dark font-black">maps</span>
            </h2>
          </Link>
        </div>
        <div className="hidden md:flex text-white grow justify-end items-center gap-4 flex-wrap">
          <Link to="/">features</Link>
          <Link to="/">pricing</Link>
          <Link to="/">documenation</Link>
          <Link to="/">contact us</Link>
          <div className="flex gap-4 ">
            <Modal open={signupModal} close={() => {setSignupModal(false)}} elem={<Signup 
              footer={
                <div className="px-10 p-2">
                  <Link to="#" onClick={() => {setSigninModal(true); setSignupModal(false)}}>Already have an account? <span className="text-primary">Login</span></Link>
                </div>
              }
            
            />}>
              <button onClick={() => setSignupModal(true)}>Signup</button>
            </Modal>
            <Modal open={signinModal} close={() => setSigninModal(false)} elem={<Signin
              footer={
                <div className="px-10 p-2">
                  <Link to="#" onClick={() => {setSigninModal(false); setSignupModal(true)}}>Dont Have an account? <span className="text-primary">Create One</span></Link>
                </div>
              }
            />}>
              <button className="theme-light" onClick={() => setSigninModal(true)}>Signin</button>
            </Modal>
          </div>
        </div>
        <div className="md:hidden gap-4 grow flex items-cneter justify-end">Menu</div>
      </div>
  )
}

export default Header;