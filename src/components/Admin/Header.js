import React from "react";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className=" flex flex-col uppercase w-full relative min-w-[200px]">
      <h2 className="flex justify-center items-center h-14 p-4">
        <span className="text-white">Gebeta</span>Maps
      </h2>
      <div className='overflow-y-auto flex flex-col justify-center flex-grow'>
        <div className="flex flex-col justify-start items-center gap-4 text-white py-1 max-h-full font-bold">
          <Link className="sw p-4 py-2 text-center active_btn" to="/dashboard">Dashboard</Link>
          <Link className="sw p-4 py-2 text-center " to="/">Billing & Plans</Link>
          <Link className="sw p-4 py-2 text-center " to="/">Usage</Link>
          <Link className="sw p-4 py-2 text-center " to="/">Api Key</Link>
          <Link className="sw p-4 py-2 text-center " to="/">Profile</Link>
          <Link className="sw p-4 py-2 text-center " to="/">Documentation</Link>
        </div>
      </div>
      <div className="p-6">&nbsp;</div>
    </div>
  )
}

export default Header;