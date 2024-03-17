import Navbar from "../reUseAble/navbar";
import {Outlet} from "react-router-dom"
import Footer from "../reUseAble/Footer";
import Body from "../../features/Body";


export const Layout = ()=>{
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Body/>
            <Footer/>
        </>
    )
}