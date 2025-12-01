import {Head,Body, MainContainer,WatchPage} from "./components/index"
import MenuContext from "../utils/MenuContext"
import VideoContext from "../utils/VideoContext"
import PopularVideos from "../utils/PopularVideosContext"
import { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import type {VideoInfo}  from "../utils/types"

let appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
   children:[{

     path:"/",
     element:<MainContainer/>
    },{
      path:"watch",
      element:<WatchPage/>
    },

   ]
}])

const App = () => {
let [videoInfo,setVideoInfo]=useState<VideoInfo|null>(null);
let [isMenuClicked,toggleMenu]=useState(false);
let [videos,setVideos]=useState<VideoInfo[]|null>([])
  return (
<MenuContext.Provider value={{isMenuClicked,toggleMenu}}>
<VideoContext.Provider value={{videoInfo,setVideoInfo}}>
  <PopularVideos.Provider value={{videos,setVideos}}>

<div>
    <Head/>
    <RouterProvider router={appRouter}/>

</div>
  </PopularVideos.Provider>

</VideoContext.Provider>
</MenuContext.Provider>
  )
}

export default App