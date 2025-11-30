import React from 'react'
import type {  ReplyComment } from '../../../../utils/Comment'
import { BiLike } from 'react-icons/bi'

const ReplyCard = ({reply}:{reply:ReplyComment}) => {

    let {authorDisplayName,authorProfileImageUrl,likeCount,textOriginal}=reply.snippet
  return (
    <div className='flex gap-3 mt-2'>
<img  className="h-8 w-8 rounded-full" src={authorProfileImageUrl}/>
    <div className=''>
        <p>{authorDisplayName}</p>
        <p>{textOriginal}</p>
       <div className='flex items-center gap-2'> <BiLike/>{likeCount}</div>
    </div>
    </div>
  )
}

export default ReplyCard