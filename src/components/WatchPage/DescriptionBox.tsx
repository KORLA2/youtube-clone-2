import React,{useContext,useState} from 'react'
import VideoContext from '../../../utils/VideoContext'
const DescriptionBox = () => {
     let {videoInfo}=useContext(VideoContext)
     if(videoInfo==null){
        return;
     }
 let {snippet,statistics}=videoInfo??{};
 let {description,publishedAt}=snippet??{};
 let {viewCount}=statistics??{};
const [expanded, setExpanded] = useState(false);
 let displaydescription=description.slice(0,150);

let publishedDate=new Date(publishedAt);
 let today=new Date();
 const diffMs = today.getTime() - publishedDate.getTime();
 const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return (
    <div className='rounded-lg bg-gray-200 p-3'>
   <div className='font-medium flex gap-4'>

   <p >{viewCount} views</p>
   <p>{diffDays} days ago</p>
   </div>

<p className="mt-3">
    {expanded?description:displaydescription+"..."}
    <button 
        onClick={() => setExpanded(!expanded)}
        className="text-blue-600 font-medium ml-2 cursor-pointer"
      >
        {expanded ? "Show less" : "Show more"}
      </button>
</p>
  

    </div>
  )
}

export default DescriptionBox
