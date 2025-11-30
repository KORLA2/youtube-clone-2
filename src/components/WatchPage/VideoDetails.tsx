import React,{useContext} from 'react'
import VideoContext from '../../../utils/VideoContext';
import { BiLike ,BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineDownload } from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
const VideoDetails = () => {
     let {videoInfo}=useContext(VideoContext)
 let {snippet,statistics}=videoInfo??{};
 let {channelTitle,title,publishedAt}=snippet??{};
 let {commentCount,likeCount,viewCount}=statistics??{}
  return (
    <div className='w-screen lg:w-200 p-3 pr-5'>
    <p className='font-bold mb-4'>  {title} </p>
    <div className='flex flex-col md:flex-row  md:justify-between    lg:w-full  lg:items-center'>
      {/* 1st Part */}
        <div className='flex  w-[80%] md:w-[50%] lg:w-[40%]  items-center justify-between'>
            <p>Logo</p>
            <div>
                <p className='font-medium cursor-pointer'>{channelTitle}</p>
                <p className='text-sm whitespace-nowrap'>10 subscribers</p>
            </div>
            <button className='rounded-full py-1 px-4 bg-gray-300 cursor-pointer'> Join</button>
            <button className='rounded-full py-1 px-4 bg-black text-white cursor-pointer'> Subscribe</button>
        </div>
        {/* 2ndPart */}
        <div className='flex  w-50%  lg:m-0 mt-2 md:w-[40%]  justify-between  items-center'>
            <div className='flex  rounded-full bg-gray-100  items-center'>

                <div className=' flex  px-4 py-1  items-center cursor-pointer mr-1 hover:bg-gray-200 rounded-l-full '>
                    <BiLike className='text-xl'/>
                    <p>18K</p>
                </div>
                <div className=' px-4 py-1  cursor-pointer hover:bg-gray-200 rounded-r-full'>
                    <BiDislike className='text-xl'/>
                </div>
            </div>

            <div className='flex items-center bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full  py-1 px-3'>
          <div className='flex items-center'>

           <RiShareForwardLine className='text-xl'/>
          <p>Share</p>
          </div>
            </div>

           <IoEllipsisHorizontalSharp className='text-3xl bg-gray-100 hover:bg-gray-200 cursor-pointer  rounded-full p-1'/>
        </div>
    </div>
    </div>

  )
}

export default VideoDetails