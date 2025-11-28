import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineDownload } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { useContext } from "react";
import MenuContext from "../../utils/MenuContext"
const SideBar = () => {

   let {isMenuClicked}=useContext(MenuContext)

  return (
    !isMenuClicked?(<div className='shadow-lg p-2 w-40 fixed top-12 overflow-y-scroll'>
         <div>

        <ul >
            <li className="my-3 p-2  flex items-center cursor-pointer hover:bg-gray-300 rounded-lg">
            <IoHomeOutline className="text-lg" />
            <li className="mx-1 text-md">Home</li>
            </li>  

           <li className="my-3 p-2 flex items-center cursor-pointer hover:bg-gray-300 rounded-lg">
            <SiYoutubeshorts  className="text-lg"/>
            <li className="mx-1 text-md ">Shorts</li>
            </li>  

           <li className="my-3 p-2 flex items-center cursor-pointer hover:bg-gray-300 rounded-lg">
            <MdOutlineSubscriptions className="text-lg"/>
            <li className="mx-1 text-md">Subscriptions</li>
            </li>  
        </ul>
        <p className="font-bold">You</p>
        <ul >

           <li className="my-3 p-2 flex items-center cursor-pointer hover:bg-gray-300 rounded-lg">
            <FaHistory className="text-lg"/>
            <li className="mx-1 text-md">History</li>
            </li>  

       <li className="my-3 p-2 flex items-center cursor-pointer hover:bg-gray-300 rounded-lg">
            <MdOutlinePlaylistPlay className="text-lg"/>
            <li className="mx-1 text-md">Playlists</li>
            </li>  
                <li className="my-3 p-2 flex items-center cursor-pointer hover:bg-gray-300 rounded-lg">
            <MdOutlineVideoSettings className="text-lg"/>
            <li className="mx-1 text-md">Your Videos</li>
            </li>  
             <li className="my-3 p-2 flex items-center cursor-pointer hover:bg-gray-300 rounded-lg">
            <MdOutlineWatchLater className="text-lg"/>
            <li className="mx-1 text-md">Watch Later</li>
            </li>  
           <li className="my-3 p-2 flex items-center cursor-pointer hover:bg-gray-300 rounded-lg">
            <BiLike className="text-lg"/>
            <li className="mx-1 text-sm">Liked Videos</li>
            </li>  
           <li className="my-3 p-2 flex items-center cursor-pointer hover:bg-gray-300 rounded-lg">
            <MdOutlineDownload className="text-lg"/>
            <li className="mx-1 text-md">Downloads</li>
            </li>  
       
        </ul>


        </div>

    </div>):<div className='p-2 w-10 fixed top-12' >
            <li className="my-3 flex  items-center cursor-pointer w-full  rounded-lg ">

        <IoHomeOutline className="text-2xl " />
        </li>
            <li className="my-10   flex items-center cursor-pointer hover:bg-gray-300 rounded-lg">
        
        <SiYoutubeshorts  className="text-2xl"/>
        </li>
            <li className="my-10   flex items-center cursor-pointer hover:bg-gray-300 rounded-lg">

        <MdOutlineSubscriptions className="text-2xl"/>
</li>
            <li className="my-10   flex items-center cursor-pointer hover:bg-gray-300 rounded-lg">

        <FaUserCircle className="text-2xl" />
        </li>
            <li className="my-10   flex items-center cursor-pointer hover:bg-gray-300 rounded-lg">

        <MdOutlineDownload className="text-2xl"/>
</li>
   </div>
   
  )
}

export default SideBar