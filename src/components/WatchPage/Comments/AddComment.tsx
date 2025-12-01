import React, { useContext } from 'react'

interface AddCommentProps {
    onCancel?:()=>void,
    isReply?:boolean
}

const AddComment = ({onCancel,isReply}:AddCommentProps) => {


let handleCancel=()=>{
  
if(onCancel)
    onCancel();
}

  return (
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
      placeholder={isReply?"Add a Reply...":"Add a comment..."}
      
    />

    <div className="flex justify-end gap-2 mt-2 ">
      <button onClick={handleCancel} className="px-3 py-1 rounded-full cursor-pointer hover:bg-gray-100">Cancel</button>
      <button className="px-3 py-1 bg-blue-900 cursor-pointer text-white rounded-full">{isReply?"Reply":"Comment"}</button>
    </div>

  </div>

</div>
 
  )
}

export default AddComment