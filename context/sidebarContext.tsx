import React, { useState } from "react"
const SidebarContext = React.createContext({
    sidebarOpen: false,
    setSidebarOpen: () => {}
})


const SidebarContextProvider = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const openSidebar = () => {
        setSidebarOpen(!sidebarOpen)
        const mainTag = document.querySelector("html")
        if (!sidebarOpen) {

            mainTag.style.height = "100vh"
            mainTag.style.overflow = "hidden"
        }

        else {
            mainTag.style.height = ""
            mainTag.style.overflow = ""
        }
    }
    return (
        <SidebarContext.Provider value = {{
            sidebarOpen,
            setSidebarOpen: openSidebar
        }}>
        {children}
        </SidebarContext.Provider>
    )
}



export default SidebarContext

export {SidebarContextProvider}