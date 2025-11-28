import { Outlet, useLocation } from "react-router-dom"
import {SideBar, MainContainer, WatchPage} from "./index"

const Body = () => {
      const location = useLocation();

  const isWatchPage = location.pathname.startsWith("/watch");


  return (
    <div className="flex relative w-screen h-screen overflow-x-hidden">
  {
    !isWatchPage&&<SideBar/>
}
  <Outlet/>
    </div>
  )
}

export default Body