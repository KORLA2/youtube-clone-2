
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import Youtube from "../Youtube.webp"
import { IoIosSearch } from "react-icons/io";
import { useContext, useRef, useState  } from "react";
import MenuContext from "../../utils/MenuContext";
const Head = () => {

let {isMenuClicked,toggleMenu}=useContext(MenuContext);
let searchRef=useRef<HTMLInputElement>(null);
let [focused,setFocused]=useState(false)
function handleSearch(){

}

return (
    <div className="fixed z-20 shadow-lg bg-white w-full flex justify-between items-center py-1 px-2 -my-1">
     
    <div className="flex flex-1 items-center" >
         <FiMenu className="cursor-pointer p-1 text-3xl hover:bg-gray-300 rounded-full "
         onClick={()=>{
        toggleMenu(!isMenuClicked)
    }}
         />
 
         <img alt="YoutubeLogo" className="ml-3 cursor-pointer w-20" src={Youtube}/>

    </div>
            <div className="flex flex-2 items-center w-full ">
              

                <input type="text"  className="px-7 w-2/3 py-1 border border-black-100  outline-none  rounded-l-full "
                        onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                ref={searchRef}
                placeholder="Search"/>
                  {focused && (
                    <IoIosSearch className=" text-xl ml-2 absolute  top-1/2  -translate-y-1/2 text-gray-500 " />
                  )}
              <button className="bg-gray-200   rounded-r-full px-3 py-2  cursor-pointer" onClick={handleSearch}>
                 <IoIosSearch  className=" text-2xl"/>
                </button> 
            </div>
<div className="flex-1 ">

      <FaUserCircle className=" cursor-pointer text-4xl ml-auto mr-4"/>
</div>

    </div>
  )
}

export default Head