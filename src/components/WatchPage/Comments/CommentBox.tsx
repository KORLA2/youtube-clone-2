import React,{useContext,useState, useEffect} from 'react'
import VideoContext from '../../../../utils/VideoContext';
import { API_KEY, COMMENTS_API } from '../../../../utils/constants';
import {CommentCard} from "../../index"
import type {Commment} from "../../../../utils/Comment"
import AddComment from './AddComment';
const CommentBox = () => {
  let {videoInfo}=useContext(VideoContext);
  let [comments,setComments]=useState<Commment[]|null>(null)
// Fetching Comments for Video

useEffect(()=>{
    BuildCommentsAPI()
},[videoInfo?.id])
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
    <div className='p-3'
    ><p className='font-bold'>  {commentCount} Comments </p>
 <AddComment />
<div>

{
  comments?.map(( comment )=><CommentCard key={comment.id} comment={comment}  />)
}
  </div>
       
    </div>
 
)
}

export default CommentBox