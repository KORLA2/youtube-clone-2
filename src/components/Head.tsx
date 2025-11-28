
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import Youtube from "../Youtube.webp"
import { IoIosSearch } from "react-icons/io";
import { useContext } from "react";
import MenuContext from "../../utils/MenuContext";
const Head = () => {

    let {isMenuClicked,toggleMenu}=useContext(MenuContext);

  return (
    <div className="fixed z-20 shadow-lg bg-white w-full flex justify-between items-center py-1 px-2 -my-1">
     
    <div className="flex items-center" >
         <FiMenu className="cursor-pointer p-1 text-3xl hover:bg-gray-300 rounded-full "
         onClick={()=>{
        toggleMenu(!isMenuClicked)
    }}
         />
 
         <img alt="YoutubeLogo" className="ml-3 cursor-pointer w-20" src={Youtube}/>

    </div>
            <div className="flex items-center">
                
                <input type="text"  className="w-80 px-3 py-1 border border-black-100  outline-none  rounded-l-full  " placeholder="Search"/>

              <button className="bg-gray-200  rounded-r-full px-3 py-2  cursor-pointer">
                 <IoIosSearch  className="text-2xl"/>
                </button> 
            </div>

      <FaUserCircle className="cursor-pointer text-4xl"/>

    </div>
  )
}

export default Head