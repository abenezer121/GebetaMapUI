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
      <div className="my-32 flex flex-col gap-2 grow w-1/2 ">
      <h1 className="uppercase sm:whitespace-nowrap ">
        <span className="text-white">Gebeta</span>
        Maps
        <br />
        Routing & Direction API
      </h1>
      <p className="text-white md:textShadow-[transparent] textShadow-[#000]">
      Reliable, fast and effcient routing system, and also this is where we write important 
      </p>
      <div className="flex whitespace-nowrap gap-4">
        <Link to="/" className='btn p-2 px-4 theme-light'>Get Started</Link>
        <Link to="/" className='btn p-2 px-4'>Contact Us</Link>
      </div>
    </div>
    <div className=" grow flex flex-col w-1/2 ">
      <div className="relative w-full h-full -z-10">
        <Poly1 className="absolute left-2 -translate-x-32 md:translate-x-0 top-0 w-[600px] h-[450px] scale-100" />
        <Poly2 className="absolute left-0 -translate-x-32 md:translate-x-0 top-0 w-[600px] h-[450px] scale-125" />
      </div>
    </div>
  </div>
  )
}
function Services() {
  return (
    <div className='flex justify-center max-w-full'>
    <div className="sw flex gap-2 md:overflow-x-visible overflow-x-scroll snap-x snap-mandatory">
      <ServiceBox title='one-to-one' color='orange' icon={<LocationOn className='w-full h-full' />}>
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
      <ServiceBox title='one-to-one' color='rgb(29,76,216)' icon={<MyLocation className='w-full h-full' />}>
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
      <ServiceBox title='one-to-one' color='rgb(22,162,74)' icon={<MapMarker className='w-full h-full' />}>
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
    </div>
  )
}
function StepLine(props) {
  const {children} = props;
  return (
    <div className="flex justify-evenly mt-10" {...props}>
      <div className="flex-1 self-start relative">
        <Polygon className="sm:min-w-full min-w-[200px] -rotate-12 absolute sm:relative" color='#fcc652'/>
      </div>
      <p className="flex-1 self-stretch min-w-[250px] text-center flex justify-center items-center p-6 z-10">
          {children}
      </p>
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
      <div className='md:h-4 h-14'>&nbsp;</div>
      <StepLine className='flex flex-row-reverse'>
        Reliable, fast and effcient routing 
        and also this is where we write important 
        Reliable, fast and effcient routing 
        and also this is where we write important
        Reliable, fast and effcient routing system,
      </StepLine>
      <div className='md:h-4 h-14'>&nbsp;</div>
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
    <div className="flex justify-center max-w-full">
      <div className="flex items-start px-10 md:overflow-x-visible overflow-x-scroll snap-x snap-mandatory">
        <PriceBox obj={obj}/>
        <PriceBox obj={obj2}/>
        <PriceBox obj={obj3}/>
        <PriceBox obj={obj4}/>
      </div>
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
      <div className="h-52">&nbsp;</div>
    </div>
  )
}

export default Home;