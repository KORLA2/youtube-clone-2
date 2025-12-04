import React,{useContext} from 'react'
import type { VideoInfo } from '../../../utils/types'
import { FaEllipsisVertical } from "react-icons/fa6";
import VideoContext from '../../../utils/VideoContext';
const RecommendedCard = ({video}:{video:VideoInfo}) => {

let {snippet,statistics}=video;
let {title,thumbnails:{default:{url}},channelTitle,publishedAt}=snippet;
let {viewCount}=statistics;
let {setVideoInfo}=useContext(VideoContext)

let m_title=title.slice(0,40)
//  let publishedDate=new Date(publishedAt);
// let today=new Date();
//  const diffMs = today.getTime() - publishedDate.getTime();
//  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return (
    <div className='flex gap-1 mb-10 p-1'
    onClick={()=>{setVideoInfo(video)}}
    >
        <img className='rounded-lg cursor-pointer' alt="thumbnail" src={url}/>
    <div>
        <p  className='text-sm cursor-pointer'>{m_title}...</p>
        <p className='text-sm text-gray-400 cursor-pointer'>{channelTitle}</p>
        <div className='flex text-xs gap-2 whitespace-nowrap font-medium cursor-pointer'>
        <p className='whitespace-nowrap'>{viewCount} views</p>
        <p>18 hours ago</p>
        </div>

    </div>
<FaEllipsisVertical/>
    </div>
  )
}

export default RecommendedCard