import {Head,Body, MainContainer,WatchPage} from "./components/index"
import MenuContext from "../utils/MenuContext"
import VideoContext from "../utils/VideoContext"
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
  return (
<MenuContext.Provider value={{isMenuClicked,toggleMenu}}>
<VideoContext.Provider value={{videoInfo,setVideoInfo}}>

<div>
    <Head/>
    <RouterProvider router={appRouter}/>

</div>
</VideoContext.Provider>
</MenuContext.Provider>
  )
}

export default App