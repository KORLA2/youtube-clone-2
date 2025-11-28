import { useContext } from "react"
import {ButtonList,VideoContainer} from "./index"
import MenuContext from "../../utils/MenuContext"

const MainContainer = () => {
    let {isMenuClicked}=useContext(MenuContext)
  return (
    <div className= {`relative w-full top-12  
              ${isMenuClicked ? "ml-15" : "ml-41"}`}>
   <div className={`${isMenuClicked?"pr-20":"pr-45"}`}>
        <ButtonList/>
    </div>    

 <div className="w-screen h-screen fixed overflow-y-auto">
        <VideoContainer/>
 </div>
    </div>
  )
}

export default MainContainer