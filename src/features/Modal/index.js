import React from "react";


function Modal({elem,children,open,close}) {
  const handleClick = (ev) => {
    if(ev.target.id==='modal')
      close();
  }
  
  return (
    <div>
      <div>{children}</div>
      {
        open && 
        <div style={{overflow: 'auto'}} id='modal' className={"fixed top-0 bottom-0 left-0 w-screen flex flex-col justify-stretch items-center z-40 backdrop-blur-md bg-black/70"}
            onClick={handleClick}
          >
          <div className="h-full overflow-auto p-5">
            {elem}
          </div>
        </div>
      }
    </div>
  )
}

export default Modal;