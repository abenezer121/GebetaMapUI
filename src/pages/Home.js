import React from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as Poly1} from '../assets/icons/big-polygon.svg';
import {ReactComponent as Poly2} from '../assets/icons/big-polygon-dots.svg';
import {ReactComponent as LocationOn} from '../assets/icons/Location on.svg';
import {ReactComponent as MyLocation} from '../assets/icons/My location.svg';
import {ReactComponent as MapMarker} from '../assets/icons/Map Marker.svg';
import {ReactComponent as ServiceIcon} from '../assets/icons/Services.svg';
import {ReactComponent as BestSellerIcon} from '../assets/icons/Best Seller.svg';
import ServiceBox from "../features/Container/ServiceBox";
import { Polygon } from "../features/Object/Polygon";
import PriceBox from "../features/Container/PriceBox";

function Intro() {
  return (
    <div className="flex sw">
      <div className="my-32 flex flex-col gap-2 grow w-1/2">
      <h1 className="uppercase whitespace-nowrap">
        <span className="text-white">Gebeta</span>
        Maps
        <br />
        Routing & Direction API
      </h1>
      <p className="text-white">
      Reliable, fast and effcient routing system, and also this is where we write important 
      </p>
      <div className="flex gap-4">
        <Link to="/" className='btn p-2 px-4 theme-light'>Get Started</Link>
        <Link to="/" className='btn p-2 px-4'>Contact Us</Link>
      </div>
    </div>
    <div className=" grow flex flex-col w-1/2 ">
      <div className="relative w-full h-full -z-10">
        <Poly1 className="absolute left-2 top-0 w-[600px] h-[450px] scale-100" />
        <Poly2 className="absolute left-0 top-0 w-[600px] h-[450px] scale-125" />
      </div>
    </div>
  </div>
  )
}
function Services() {
  return (
    <div className="sw flex justify-center gap-4 overflow-auto snap-x">
      <ServiceBox title='one-to-one' color='orange' icon={<LocationOn />} className="snap-start">
        <p className="py-4 text-gray-600">
          Reliable, fast and effcient routing 
            and also this is where we
          write important
            Reliable, fast and effcient 
          routing system,
        </p>
        <div className="flex justify-center">
          <Link to="/" className="text-blue-800 font-bold">Read More</Link>
        </div>
      </ServiceBox>
      <ServiceBox title='one-to-one' color='rgb(29,76,216)' icon={<MyLocation />} className="snap-start">
        <p className="py-4 text-gray-600">
          Reliable, fast and effcient routing 
            and also this is where we
          write important
            Reliable, fast and effcient 
          routing system,
        </p>
        <div className="flex justify-center">
          <Link to="/" className="text-blue-800 font-bold">Read More</Link>
        </div>
      </ServiceBox>
      <ServiceBox title='one-to-one' color='rgb(22,162,74)' icon={<MapMarker />} className="snap-start">
        <p className="py-4 text-gray-600 ">
          Reliable, fast and effcient routing 
            and also this is where we
          write important
            Reliable, fast and effcient 
          routing system,
        </p>
        <div className="flex justify-center">
          <Link to="/" className="text-blue-800 font-bold">Read More</Link>
        </div>
      </ServiceBox>
    </div>
  )
}
function StepLine(props) {
  const {children} = props;
  return (
    <div className="flex justify-evenly mt-10" {...props}>
      <div className="flex-1">
        <Polygon className="w-full -rotate-12" color='#fcc652'/>
      </div>
      <div className="flex-1 self-stretch text-center flex justify-center items-center p-6">
          {children}
      </div>
    </div>
  )
}
function Steps() {
  return (
    <div className="sw">
      <StepLine>
        Reliable, fast and effcient routing 
        and also this is where we write important 
        Reliable, fast and effcient routing 
        and also this is where we write important
        Reliable, fast and effcient routing system,
      </StepLine>
      <StepLine className='flex flex-row-reverse'>
        Reliable, fast and effcient routing 
        and also this is where we write important 
        Reliable, fast and effcient routing 
        and also this is where we write important
        Reliable, fast and effcient routing system,
      </StepLine>
    </div>
  )
}
function PricePlans() {
  const obj = {
    title: "Our Plans",
    description: "Our plans uge uigbkjb sufgiugf dfu udfh ubdfu dfdufhd uidfubw bfeobw dbudifb bfewoubf iobiob Our plans uge uigbkjbv sufgiugf dfu udfh ubdfu dfdufhd uidfubw bfeobw dbudifb bfewoubf iobiob",
    features: ["feature 1","feature 2","feature 3","feature 4"],
    footer: <button className="theme-light ">1 Week Trial</button>,
    colors: ["white","white"]
  }
  const obj2 = {
    title: "Starter",
    features: ["little","","10","slow"],
    footer: <button>Select Plan</button>,
    price: 200,
    colors: ["blue","orange"],
    icon: <MyLocation  className="w-full h-full" />
  }
  const obj3 = {
    title: "Buisness",
    features: ["some","5000","100","Mid"],
    footer: <button>Select Plan</button>,
    price: 200,
    colors: ["green","blue"],
    icon: <ServiceIcon  className="w-full h-full" />
  }
  const obj4 = {
    title: "Premium",
    features: ["A Lot","10000","1000","Fast AH"],
    footer: <button>Select Plan</button>,
    price: 300,
    colors: ["orange","green"],
    icon: <BestSellerIcon className="w-full h-full" />
  }
  return (
    <div className="flex justify-center items-center">
      <PriceBox obj={obj} />
      <PriceBox obj={obj2} />
      <PriceBox obj={obj3} />
      <PriceBox obj={obj4} />
    </div>
  )
}
function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Intro />
      <Services />
      <Steps />
      <PricePlans />
    </div>
  )
}

export default Home;