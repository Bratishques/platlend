import { useCallback, useContext, useEffect, useState } from "react";
import ScreenSizeContext from "../context/screenSizeContext";
import SidebarContext from "../context/sidebarContext";
import breakpoints from "../utils/breakpoints"



const Header = () => {
    const [scrollState, setScrollState] = useState(0)
    const sidebarData = useContext(SidebarContext)
    const sidebarOpen = sidebarData.sidebarOpen
    const screenSize = useContext(ScreenSizeContext)

    const scrollListener = useCallback((e) => {
        const position = window.scrollY
        const header = document.getElementById("header")
        const headerHeight = header.getBoundingClientRect().height
        console.log(position)
        if (position <= headerHeight) {
            setScrollState(0)
        }
        else if (position > headerHeight && position < 150) {
            setScrollState(1)
        }
        else {
            setScrollState(2)
        }
    })



    useEffect(() => {
        window.addEventListener('scroll', scrollListener)

        return (() => {
            window.removeEventListener('scroll', scrollListener)

        })
    }, [])

    return (
        <div className={`w-full h-12 fixed flex justify-end`}>
            <div style={{
                left: screenSize < breakpoints.md && sidebarOpen ? "0%" : "-100%"
            }} className={`fixed bg-purple-500 h-screen w-full transition-all duration-500 z-20`}></div>
            <div
                id="header"
                className={`w-full bg-red-400 h-12 flex justify-center transition-all duration-300 ${scrollState === 2 ? "fixed" : "absolute"
                    } ${scrollState === 1 && "opacity-0"} z-10`}
            >

                <div className={`w-85 bg-blue-400 h-full flex space-between`}>
                    <div className={`bg-green-300 h-full flex items-center`}>
                        <div>LOGO</div>
                    </div>
                    <div className={` bg-indigo-600 h-full flex items-center justify-end`}>


                    </div>

                </div>
            </div>

            {screenSize < breakpoints.md ? <button className={`relative focus:outline-none bg-green-300 rounded-full z-30 right-3 ${scrollState === 1 && "opacity-0"} transition-all duration-300`} onClick={() => {
              sidebarData.setSidebarOpen()
            }}>Open</button> : <div></div>}
        </div>
    );
}

export default Header;