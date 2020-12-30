import React, { useCallback, useEffect, useState } from "react"

const ScreenSizeContext = React.createContext(1400)

const ScreenSizeProvider = ({children}) => {
    const [screenWidth, setScreenWidth] = useState(1400)
    const resizeListener = useCallback((e) => {
        console.log(window.innerWidth)
        setScreenWidth(window.innerWidth)
    }, [])

    useEffect(()=>{
        setScreenWidth(window.innerWidth)
        window.addEventListener('resize', resizeListener)
        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    },[])

    return (
        <ScreenSizeContext.Provider value={
            screenWidth
        }>
            {children}
        </ScreenSizeContext.Provider>
    )

}

export default ScreenSizeContext
export {ScreenSizeProvider}