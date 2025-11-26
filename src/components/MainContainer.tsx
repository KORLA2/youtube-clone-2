import { useContext } from "react"
import {ButtonList,VideoContainer} from "./index"
import MenuContext from "../../utils/MenuContext"

const MainContainer = () => {
    let {isMenuClicked}=useContext(MenuContext)
  return (
    <div className= {`absolute w-full top-12 overflow-y-auto 
              ${isMenuClicked ? "ml-15" : "ml-41"}`}>
   <div className={`${isMenuClicked?"pr-20":"pr-45"}`}>
        <ButtonList/>
    </div>    

 
        <VideoContainer/>
    </div>
  )
}

export default MainContainer