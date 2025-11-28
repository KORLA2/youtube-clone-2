import React,{useEffect,useContext} from 'react'
import { useSearchParams } from 'react-router-dom'
import VideoContext from '../../../utils/VideoContext';
import VideoDetails from './VideoDetails';
const WatchPage = () => {
    
    let [searchParams]=useSearchParams();
    let query=searchParams.get("v");

return (
    <div className= "relative flex top-15 w-full"  
              >
         <div className='w-full h-3/4 p-2 ml-2'>
 <iframe
  width="80%"
  height="100%"
  src={`https://www.youtube.com/embed/${query}?autoplay=1&mute=0`}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
<VideoDetails/>

    </div>       

<div>Recomendations</div>

              </div>
  )
}

export default WatchPage