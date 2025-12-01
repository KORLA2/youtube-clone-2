import React, { useEffect,useContext } from 'react'
import PopularVideos from '../../../utils/PopularVideosContext'
import RecommendedCard from './RecommendedCard'
const Recommendations = () => {

     let {videos}=useContext(PopularVideos)


  return (
    <div className=' w-full '>

{
  videos?.map(video=><RecommendedCard video={video}/>)
}

    </div>
  )
}

export default Recommendations