import { Outlet } from "react-router-dom"
import Navigations from "./navigation"
import SplashCursor from "../components/Splashcursor"
const coloor='white'
function Rootlayout(){
    return(
        <>
           Hello world

            <Outlet/>
        </>
    )
}


export default Rootlayout