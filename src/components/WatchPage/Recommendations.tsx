import React, { useEffect,useContext } from 'react'
import PopularVideos from '../../../utils/PopularVideosContext'
import RecommendedCard from './RecommendedCard'
import { Link } from 'react-router-dom'
const Recommendations = () => {

     let {videos}=useContext(PopularVideos)


  return (
    <div className=' w-full '>

{
  videos?.map(video=><Link to={"/watch?v="+video.id}> <RecommendedCard video={video}/> </Link>)
}

    </div>
  )
}

export default Recommendations