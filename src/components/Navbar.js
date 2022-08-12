import React from "react";
import {Outlet} from 'react-router-dom';
import Header from "./Header";
// import {ReactComponent as BGPolygon} from '../assets/icons/bg-polygon.svg'

function Navbar() {
  return (
    <div className="bg overflow-hidden">
      <div className='flex flex-col items-center bg-bg relative'>
        {/* <BGPolygon className="-z-10 h-fit w-fit absolute" /> */}
        <Header />
        <div className="relative z-0 w-full flex flex-col items-center">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Navbar;