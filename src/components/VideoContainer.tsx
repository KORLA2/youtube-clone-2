import React, { useContext, useEffect,useState} from 'react'
import {YOUTUBE_API} from "../../utils/constants"
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';
import type {VideoInfo}  from '../../utils/types.ts';
import PopularVideos from '../../utils/PopularVideosContext.ts';


const VideoContainer = () => {
  
let {videos,setVideos}=useContext(PopularVideos)

  useEffect(()=>{
  
   Popular_Videos();

  },[])

let Popular_Videos=async()=>{


  let data=await fetch(YOUTUBE_API);
 let jsondata=await data.json()
setVideos(jsondata.items);
}


  return (
    <div className='flex absolute  z-10  overflow-y-scroll flex-wrap'>


{
  videos?.map((video)=> <Link key={video.id} to={"/watch?v="+video.id}> <VideoCard  video={video}/>
  </Link>
  )
  
}
    </div>
  )
}

export default VideoContainer