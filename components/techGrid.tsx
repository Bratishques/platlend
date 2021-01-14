import { useState } from "react"

const TechGrid = ({techStack, stacks}) => {
    const [displayed, setDisplayed] = useState(0)
    return (
        <div>
            <div className={`flex flex-wrap justify-between`}>
                {techStack.map((item, i) => {
                    return (
                        <div 
                        onClick={() => {
                            setDisplayed(i)
                        }}
                        key={item}
                        className={`text-white text-center text-4xl p-6 mb-12 text-opacity-50 cursor-pointer ${displayed === i && `text-opacity-100 border-b-2 border-white`}`}>
                            {item}
                        </div>
                    )
                })}
            </div>
            <div className={`w-full ${techStack[displayed]}-grid justify-items-center mb-12`}>
            {Object.entries(stacks[techStack[displayed]]).map((techArr,i) => {
                return (
                    <div
                    className={`w-full h-full flex justify-center`}
                    style={{
                        gridArea:`${techArr[0]}`,
                    }}
                    >
                    <img
                    className={`object-contain`}
                    style={{
                        gridArea:`${techArr[0]}`,
                    }}
                    src={`${techArr[1]}`} 
                    alt={`${techArr[0]}`} 
                    key={`${techArr[1]}`}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default TechGrid