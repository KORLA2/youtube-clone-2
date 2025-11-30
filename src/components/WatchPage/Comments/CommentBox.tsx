import React,{useContext,useState, useEffect} from 'react'
import VideoContext from '../../../../utils/VideoContext';
import { API_KEY, COMMENTS_API } from '../../../../utils/constants';
import {CommentCard} from "../../index"
import type {Commment} from "../../../../utils/Comment"
const CommentBox = () => {
  let {videoInfo}=useContext(VideoContext);
  let [comments,setComments]=useState<Commment[]|null>(null)
// Fetching Comments for Video

useEffect(()=>{
    BuildCommentsAPI()
},[])
let BuildCommentsAPI=()=>{
   let complete_comments_api=COMMENTS_API+videoInfo?.id+"&key="+API_KEY;

   FetchVideoComments(complete_comments_api)
}

let FetchVideoComments= async(API:string)=>{
    let data=await fetch(API);
  let jsondata=await data.json();
 setComments(jsondata.items)
}

// Fetching COmplete

  if(videoInfo==null){
        return;
     }
 let {statistics}=videoInfo??{};
  let {commentCount}=statistics??{};
  return (
    <div className='w-screen lg:w-[75%]  p-3'
    ><p className='font-bold'>  {commentCount} Comments </p>
    <div className="flex gap-3 mt-4">
  <img
    className="w-8 h-8 rounded-full"
    src="/your-profile.jpg"
  />

  <div className="flex-1">
    <textarea
      className="w-full resize-none border-b border-gray-400 focus:outline-none 
                 focus:border-black pb-1 text-sm"
      rows={1}
      placeholder="Add a comment..."
      
    />

    <div className="flex justify-end gap-2 mt-2 ">
      <button className="px-3 py-1 rounded-full cursor-pointer hover:bg-gray-100">Cancel</button>
      <button className="px-3 py-1 bg-blue-900 cursor-pointer text-white rounded-full">Comment</button>
    </div>

  </div>

</div>

{
    comments?.map(( comment )=><CommentCard key={comment.id} comment={comment}  />)
}
       
    </div>
 
)
}

export default CommentBox