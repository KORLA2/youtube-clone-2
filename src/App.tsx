import {Head,Body} from "./components/index"
import MenuContext from "../utils/MenuContext"
import { useState } from "react"

const App = () => {
let [isMenuClicked,toggleMenu]=useState(false)
  return (
<MenuContext.Provider value={{isMenuClicked,toggleMenu}}>

<div>
    <Head/>
    <Body/>

</div>
</MenuContext.Provider>
  )
}

export default App