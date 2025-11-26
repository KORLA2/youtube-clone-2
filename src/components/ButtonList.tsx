import React, { useEffect, useRef, useState } from 'react'
import {Button} from './index'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
const ButtonList = () => {
let scrollref=useRef<HTMLDivElement>(null);
let list:string[]=["All","Music","Brahmanandam","Telugu Cinema","Mixes","Tamil Cinema","T Series","Gaming","Apis","Satire","Data Structures","Mixes","Tamil Cinema","T Series","Gaming","Apis","Satire","Data Structures"]

let scrollLeft=()=>{
scrollref.current?.scrollBy({
    left:-300,
    behavior:"smooth",
})


}

let scrollRight=()=>{
scrollref.current?.scrollBy({
    left:300,
    behavior:"smooth",
})
}
return (
    <div className='sticky top-0 left-0 w-full  px-10  '>
    
     <button
        onClick={scrollLeft}
        className="absolute  cursor-pointer left-2 top-1/2 -translate-y-1/2 z-30 bg-white shadow-md p-2 rounded-full"
      >
        <FaAngleLeft />
      </button>
     <div
        ref={scrollref}
        className="flex  overflow-x-auto no-scrollbar scroll-smooth py-2"
      >
        {list.map((e, idx) => (
          <Button key={idx} name={e} />
        ))}
      </div>
   <button
        onClick={scrollRight}
        className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-30 bg-white shadow-md p-2 rounded-full"
      >
        <FaAngleRight />
      </button>
    
     </div>
  
  )
}

export default ButtonList