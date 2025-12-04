import { createContext } from "react"
import type { ChannelType } from "./ChannelType";

interface ChannelContextType{
    channelInfo:ChannelType|null,
    setChannelInfo:React.Dispatch<React.SetStateAction<ChannelType|null>>;
}

 let channelContext=createContext<ChannelContextType>({
    channelInfo:null,
    setChannelInfo:()=>{}
})
export default channelContext