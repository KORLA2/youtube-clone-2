import { createContext } from "react";

interface MenuContextType{
    isMenuClicked:boolean,
    toggleMenu:React.Dispatch<React.SetStateAction<boolean>>;
}

 let MenuContext=createContext<MenuContextType>({
        isMenuClicked:false,
        toggleMenu:()=>{}

    })
    export default MenuContext;