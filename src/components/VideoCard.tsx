import React,{useContext} from 'react'
import MenuContext from '../../utils/MenuContext.ts';
import type {VideoInfo}  from '../../utils/types.ts';
import VideoContext from '../../utils/VideoContext.ts';

interface Props{
    video : VideoInfo
}

const VideoCard = ({video}:Props) => {
   let {setVideoInfo}=useContext(VideoContext)
    let {snippet,statistics}=video??{}
    let {title,thumbnails,channelTitle,publishedAt}=snippet??{};
 let publishedDate=new Date(publishedAt);
 let today=new Date();
 const diffMs = today.getTime() - publishedDate.getTime();
 const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
   let {isMenuClicked}=useContext(MenuContext)
    
 return (
    <div className={`px-5 py-3 m-2 w-60 shadow-lg cursor-pointer rounded-lg bg-gray-100
     ${isMenuClicked ? "w-100" : "w-90"}`
    }
    onClick={()=>{setVideoInfo(video)}}
    >
     <img alt="video" src={thumbnails?.medium.url}/>
    <ul>
     <li className='font-medium'>{title}</li>
     <li>{channelTitle}</li>
     <div className='flex items-center'>

    <li className='m-1'>{statistics?.viewCount} views</li>
    <li>{diffDays} days ago</li>
     </div>
    </ul>
    </div>
  )
}

export default VideoCard