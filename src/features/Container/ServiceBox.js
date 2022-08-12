import React from "react";
import { Polygon } from "../Object/Polygon";


function ServiceBox(props) {
  const {children,title,color,icon} = props;
  return (
    <div className="text-sm rounded-xl bg-white shadow-[0_0_20px_0px_white] min-w-[200px] max-w-[250px] flex flex-col justify-center items-center p-5 m-5 ml-0 border border-orange-100 snap-always snap-center">
      <div className="max-w-[140px] relative flex justify-center">
        <Polygon color={color} />
        <div className="absolute self-center overflow-hidden w-10 h-10">
          {icon}
        </div>
      </div>
      <div className="py-4">
        <h2 className="text-base">{title}</h2>
      </div>
      <div className="text-center">
        {children}
      </div>
    </div>
  )
}
export default ServiceBox;