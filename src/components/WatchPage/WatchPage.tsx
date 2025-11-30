import React,{useEffect,useContext} from 'react'
import { useSearchParams } from 'react-router-dom'
import VideoContext from '../../../utils/VideoContext';
import {CommentBox,DescriptionBox,Recommendations,VideoDetails} from "../index"
const WatchPage = () => {
    
    let [searchParams]=useSearchParams();
    let query=searchParams.get("v");

return (
    <div className= "relative  flex  justify-between top-12 p-10 w-full"  
              >
         <div className='w-full h-3/4 rounded-lg '>
 <iframe
className='w-full lg:w-[75%]'
  height="100%"
  src={`https://www.youtube.com/embed/${query}?autoplay=1&mute=0`}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
<VideoDetails/>
<DescriptionBox/>
<CommentBox/>
    </div>    
      <Recommendations/> 
    </div>
  )
}

export default WatchPage