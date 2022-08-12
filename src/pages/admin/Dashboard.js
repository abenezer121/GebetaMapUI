import React from "react";
import { Link } from "react-router-dom";
import { Polygon } from "../../features/Object/Polygon";
import {ReactComponent as MyLocation} from '../../assets/icons/My location.svg';

const Col1 = (
  <div className="flex flex-col max-w-[250px] gap-4 ">
    <div className="card">
      <h2 className=""><span className="text-primary">Gebeta</span>Maps Routing & Direction API</h2>
      <p>Proudly Made In Ethiopia By Proud Ethiopians</p>
      <br />
      <Link to="#" className="btn inline-block">API DOCUMENATION</Link>
    </div>
    <div className="card">
      <h2 className="uppercase">Client Details</h2>
      <p className="font-bold">
        <ul>
          <li>Ride Transport</li>
          <li>ridetrans@gmail.com</li>
          <li>Addis Ababa</li>
        </ul>
      </p>
      <Link to="#" className="btn">Edit</Link>
    </div>
    <div className="card">
      <h2 className="uppercase">Recent Errors</h2>
      <p>
        <ul className="font-bold uppercase">
          <li>Time: </li>
          <li>EndPoint: </li>
          <li>Key: </li>
        </ul>
      </p>
      <Link to="#">Details</Link>
    </div>
  </div>
)
const Col2 = (
  <div className="flex flex-col max-w-[250px] gap-4 ">
    <div className="card pr-0">
      <div className="flex gap-3 justify-between items-center">
        <h2>Current Plan</h2>
        <span className="uppercase btn bg-primary text-white rounded-l-md rou px-2">Monthly</span>
      </div>
      <div className="flex">
        <div className="flex-grow">
          <p>
            <h2>Starter Package</h2>
            <ul>
              <li>ETB150/1000&nbsp;CALLS</li>
              <li>10000 DAILY&nbsp;CALLS </li>
              <li>Credit</li>
            </ul>
          </p>
        </div>
        <div className="flex-grow w-1/2 px-4">
          <div className="max-w-[140px] relative flex justify-center">
            <Polygon className="w-full max-w-lg"/>
            <div className="absolute self-center overflow-hidden w-8 h-8">
              <MyLocation className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <Link to="#" className="btn inline-block">Change Plan</Link>
    </div>
    <div className="card p-0">
      <div className="p-3 pr-3 uppercase">
        <div className="flex justify-between gap-3">
          <h2>Status</h2>
          <h2 className="text-green-700">Active</h2>
        </div>
        <div></div>
      </div>
      <div className="flex items-start py-3 bg-[#F3C651]/30">
        <p className="px-3 p-0 flex-grow">
          <p className="p-0">Total Subscription Expense</p>
          <b>ETB 12500</b>
        </p>
        <span className="uppercase btn bg-primary text-white rounded-l-md px-2">Monthly</span>
      </div>
    </div>
  </div>
)
const Col3 = (
  <div className="flex flex-col max-w-[250px] gap-4 ">
    <BillingHistory />
  </div>
)

function Dashboard() {
  return (
    <div className="flex justify-center gap-3 uppercase">
      {Col1}
      {Col2}
      {Col3}
    </div>
  )
}

function BillingHistory() {
  const billHist = [
    {
      date: "Monday Jan 1,2022",
      cash: 2436
    },
    {
      date: "Tuesday Jan 2,2022",
      cash: 2436
    },
    {
      date: "Wednesday Jan 3,2022",
      cash: 2436
    },
  ];

  return (
    <div className="card p-0">
      <h2 className="p-3 px-5 ">Billing History</h2>
      {billHist.map((bill,i) => {
        return (
          <div className={"px-5 py-1 flex justify-between items-center gap-4 "+(i%2===0?"bg-[#F3C651]/30":"")}>
            <p>{bill.date}</p>
            <b>ETB&nbsp;{bill.cash}</b>
          </div>  
        )
      })}
      <div className='p-5'>
        <Link to="#" className='btn px-5'>More</Link>
      </div>
    </div>
  )
}

export default Dashboard;