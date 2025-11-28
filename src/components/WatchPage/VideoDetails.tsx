import React,{useContext} from 'react'
import VideoContext from '../../../utils/VideoContext';
import { BiLike ,BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineDownload } from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
const VideoDetails = () => {
     let {videoInfo}=useContext(VideoContext)
     console.log(videoInfo)
 let {snippet,statistics}=videoInfo??{};
 let {channelTitle,title,description}=snippet??{};
 let {commentCount,likeCount,viewCount}=statistics??{}
  return (
    <div className='w-[80%]  border border-red-500'>
    <p className='font-bold'>  {title} </p>
    <div className='flex border border-red-500 justify-between w-full items-center'>
      {/* 1st Part */}
        <div className='flex w-[40%] items-center justify-between'>
            <p>Logo</p>
            <div>
                <p>{channelTitle}</p>
                <p>10 subscribers</p>
            </div>
            <button className='rounded-full py-1 px-4 bg-gray-300'> Join</button>
            <button className='rounded-full py-1 px-4 bg-black text-white'> Subscribe</button>
        </div>
        {/* 2ndPart */}
        <div className='flex w-[40%] border text-2xl border-red-500 justify-between items-center'>
            <div className='flex items-center '>
                <p >{likeCount}</p>
                <BiLike className='text-2xl'/>
            </div> 
           <BiDislike/>
           <RiShareForwardLine/>
           <IoEllipsisHorizontalSharp/>
        </div>
    </div>
    </div>

  )
}

export default VideoDetails