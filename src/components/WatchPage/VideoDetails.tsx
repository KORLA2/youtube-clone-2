import React,{useContext,useEffect} from 'react'
import VideoContext from '../../../utils/VideoContext';
import { BiLike ,BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineDownload } from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { API_KEY, CHANNEL_API } from '../../../utils/constants';
import channelContext from '../../../utils/ChannelContext';
const VideoDetails = () => {
     let {videoInfo}=useContext(VideoContext)
     let {channelInfo,setChannelInfo}=useContext(channelContext)
 let {snippet,statistics}=videoInfo??{};
 let {channelTitle,title,publishedAt}=snippet??{};

let {customUrl,thumbnails}=channelInfo?.snippet??{};
let{subscriberCount}=channelInfo?.statistics??{};
  

 let {likeCount}=statistics??{}

useEffect(()=>{

fetchChannelInfo();
},[videoInfo?.id])

let fetchChannelInfo=async ()=>{
  let data=await fetch(CHANNEL_API+videoInfo?.snippet.channelId+"&key="+API_KEY);
  let jsondata= await data.json();

  setChannelInfo(jsondata.items[0])

}
  return (
    <div className='md:w-3/4 w-full  p-3 pr-5'>
    <p className='font-bold mb-4'>  {title} </p>
    <div className='flex flex-col gap-3 md:flex-row  md:justify-between    lg:items-center'>
      {/* 1st Part */}
        <div className='flex  flex-1  justify-start items-center gap-3'>
            <img className='h-8 w-8 rounded-full' src={thumbnails?.default.url}/>
            <div>
                <p className='font-medium text-sm whitespace-nowrap text-blue-500 cursor-pointer'>{channelTitle}</p>
                <p className='text-sm whitespace-nowrap'>{subscriberCount} subscribers</p>
            </div>
            <button className='rounded-full py-1 px-4 bg-gray-300 cursor-pointer'> Join</button>
            <button className='rounded-full py-1 px-4 bg-black text-white cursor-pointer'> Subscribe</button>
        </div>
        {/* 2ndPart */}
        <div className='flex   flex-1  justify-start  md:justify-end gap-5 items-center'>
            <div className='flex  rounded-full bg-gray-100  items-center'>

                <div className=' flex  px-4 py-1  items-center cursor-pointer mr-1 hover:bg-gray-200 rounded-l-full '>
                    <BiLike className='text-xl'/>
                    <p>{likeCount}</p>
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