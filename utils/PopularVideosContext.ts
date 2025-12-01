import { createContext } from "react"
import type {VideoInfo}  from './types.ts';

interface PopularVideosContextType{
    videos:VideoInfo[]|null,
    setVideos:React.Dispatch<React.SetStateAction<VideoInfo[]|null>>;
}

  let PopularVideos=createContext<PopularVideosContextType>({

    videos:null,
    setVideos:()=>{}
})

export default PopularVideos