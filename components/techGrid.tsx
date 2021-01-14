import { useContext, useState } from "react"
import ScreenSizeContext from "../context/screenSizeContext"
import breakpoints from "../utils/breakpoints"

const TechGrid = ({techStack, stacks}) => {
    const [displayed, setDisplayed] = useState(0)
    const screenSize = useContext(ScreenSizeContext)
    const getClassName = (str) => {
        return `${str.toLowerCase().split(' ')[0]}${screenSize <= breakpoints.md ? "-mobile" : ""}`
    }
    return (
        <div className={`px-8`}>
            <div className={`flex flex-wrap justify-between `}>
                {techStack.map((item, i) => {
                    return (
                        <div 
                        onClick={() => {
                            setDisplayed(i)
                        }}
                        key={item}
                        className={`text-white text-center text-4xl py-8 mb-12 opacity-50 transition-all cursor-pointer border-b-2 border-transparent hover:opacity-100 ${displayed === i && `opacity-100 border-opacity-100  border-b-2 border-white`}`}>
                            {item}
                        </div>
                    )
                })}
            </div>
            <div 
            style={{
                minHeight: "450px"
            }}
            className={`w-full ${getClassName(techStack[displayed])}-grid justify-items-center mb-12`}>
            {Object.entries(stacks[techStack[displayed]]).map((techArr) => {
                return (
                    <div
                    className={`w-full h-full flex justify-center`}
                    style={{
                        gridArea:`${techArr[0]}`,
                    }}
                    key={`${techArr[1]}`}
                    >
                    <img
                    className={`object-contain animate-appear-tech transition-all hover:filter-tech-hover`}
                    style={{
                        gridArea:`${techArr[0]}`,
                    }}
                    src={`${techArr[1]}`} 
                    alt={`${techArr[0]}`} 
                    />
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default TechGrid