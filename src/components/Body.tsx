import {SideBar, MainContainer} from "./index"

const Body = () => {
  return (
    <div className="flex relative w-screen h-screen overflow-hidden">
        <SideBar/>
        <MainContainer/>
    </div>
  )
}

export default Body