import { createContext } from "react"
import type {VideoInfo}  from './types.ts';

interface VideoContextType{
    videoInfo:VideoInfo|null,
    setVideoInfo:React.Dispatch<React.SetStateAction<VideoInfo|null>>;
}
 let VideoContext=createContext<VideoContextType>({
 videoInfo:null,
 setVideoInfo:()=>{}

})
export default VideoContext