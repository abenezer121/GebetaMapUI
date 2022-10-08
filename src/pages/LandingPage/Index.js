import React from "react";
import {ReactComponent as Logo} from '../../assets/images/gebetalogo.svg';
import {ReactComponent as MapsLogo} from '../../assets/images/mapslogo.svg';

function Index() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex font-bold">

        {/* Gebeta Kitchens */}
        <div className="flex-1  flex flex-col text-[#F29D38]">
          <div className="flex px-10 py-7">
            <div className="flex-1 flex gap-3 items-center">
              <Logo className="w-5 h-6" />
              <span className="border-[#F29D38] border h-full"></span>
              <img className='h-5' src={require('../../assets/images/logotext.png')} alt='logo' /> 
            </div>
            <div className="flex list-none gap-5 font-normal">
              <li><a href='/#'>contact us</a></li>
              <li><a href='/#'>about</a></li>
            </div>
          </div>

          <div className="flex-1  pl-10  flex">
            <div className="flex flex-col flex-1  justify-center">
              <div className="flex-1 text-right "></div>
              
              <div className="h-[50%] text-right  flex items-center justify-end">
                <h1 className="text-[100px] tracking-[.2em]">GE</h1>
              </div>

              <div className="flex-1 flex flex-col leading-none">
                <Logo className="w-10 h-12" />
                <h3 className="py-3">
                  GEBETA <br />
                  <b className="text-black">KITCHENS</b><br />
                  “BRINGING YOUR GEBETA TO YOU”
                </h3>
              </div>
            </div>
            <div className=" flex items-center overflow-clip">
              <h1 className="translatee-x-1/2 h-[70%] ">
                <img className="h-full w-[115px] object-cover object-left" src={require('../../assets/images/orange.png')} alt='be' />
              </h1>
            </div>
          </div>

          <div className="pl-10 py-7 ">
            <a href="/#" className="btn theme-light px-7 py-3 border border-[#ccc]">Explore</a>
          </div>
        </div>


        {/* Gebeta Maps */}
        <div className="flex-1  flex flex-col bg-[#F29D38] text-white">
          <div className="flex flex-row-reverse gap-5 px-10 py-7 list-none">
            <li><a href='/#'>
              <img className="w-5 h-5" src={require('../../assets/icons/social/twitter.png')} alt='twitter' />
            </a></li>
            <li><a href='/#'>
              <img className="w-5 h-5" src={require('../../assets/icons/social/linkedIn.png')} alt='linkedin' />
            </a></li>
            <li><a href='/#'>
              <img className="w-5 h-5" src={require('../../assets/icons/social/facebook.png')} alt='facebook' />
            </a></li>
          </div>

          <div className="flex-1  pr-10 flex flex-row-reverse">
            <div className="flex flex-col flex-1  justify-center">
              <div className="flex-1 text-right "></div>
              
              <div className="h-[50%] text-right  flex items-center pl-4">
                <h1 className="text-[100px] tracking-[.2em]">TA</h1>
              </div>

              <div className="flex-1 flex flex-col text-right items-end leading-none">
                <MapsLogo className="w-10 h-12" />
                <h3>
                  GEBETA<b className="text-black">MAPS</b> ETHIOPIAN
                </h3>
                <h3>
                  <b className="text-black">
                    ROUTING, GEOCODING, MATRIX &
                    ROUTE  OPTIMIZATION
                  </b>
                  API  SERVICE
                </h3>
              </div>
            </div>
            <div className=" flex items-center overflow-clip">
              <h1 className="translatee-x-1/2 h-[70%] ">
                <img className="h-full w-[115px] object-cover object-right" src={require('../../assets/images/be.png')} alt='be' />
              </h1>
            </div>
          </div>

          <div className="pr-10 py-7 text-right">
            <a href="/#" className="btn theme-light px-7 py-3">Explore</a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Index;