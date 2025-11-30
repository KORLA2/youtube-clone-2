import React, { useState } from 'react'
import type { Commment } from '../../../../utils/Comment'
import { FaAngleDown ,FaAngleUp} from "react-icons/fa6";
import { BiDislike, BiLike } from 'react-icons/bi';
import ReplyCard from './ReplyCard';

const CommentCard = ({comment}:{comment:Commment}) => {
    if(CommentCard==null){
        return
    }
    let [showReplies,setShowReplies]=useState(false)
    let {authorDisplayName,authorProfileImageUrl,textOriginal}=comment.snippet.topLevelComment.snippet;
    let replies=comment.replies?.comments
let {totalReplyCount}=comment.snippet
console.log(comment, replies)
  return (
    <div>
    <div className='flex gap-2 mt-2'>
        <img  className="h-8 w-8 rounded-full" src={authorProfileImageUrl}/>
  <div className=''>
    <p>{authorDisplayName}</p>
    <p>{textOriginal}</p>
    <div className='flex gap-2 items-center mt-2'> 
        <BiLike/>
        <BiDislike/>
        Reply
    </div>
   { totalReplyCount?(<div className='text-blue-500 ml-2 gap-1 cursor-pointer flex items-center ' onClick={()=>setShowReplies(!showReplies)}>
    
    <p>{totalReplyCount} replies</p> { showReplies?<FaAngleUp/>:<FaAngleDown/>}
     </div>):""
 } </div>
    </div>
    {
 showReplies&&( <div className='px-20'>
  {
    
      replies?.map(reply=><ReplyCard  key={reply.id} reply={reply}/>)
  }
    
    </div>
)}

   </div>
  )
}

export default CommentCard