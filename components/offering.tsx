const Offering = ({title="Hello", items=["hello, i'm item1", "hello, i'm item1", "hello, i'm item1",], icon=""}) => {
    return (
        <div className={`group w-full h-full py-16 px-8 text-white border-glowy-blue border-2 rounded-lg`}>
            <div className={`relative mb-8 h-28 w-28 flex justify-center items-center`}>
            <div className={`absolute transition-all group-hover:bg-glowy-blue transform h-1 w-1 translate-y-16 -translate-x-16 group-hover:h-full group-hover:w-full rounded-full group-hover:scale-125
            group-hover:translate-x-0 group-hover:translate-y-0 origin-center duration-500`}></div>
            <img src={`${icon}`} className={`p-2 relative z-30`}/>
            </div>
        <h4 className={`text-4xl mb-8`}>{title}</h4>
        <div className={`text-2xl leading-normal h-40 flex flex-col justify-between`}>
        {items.map(a => {
            return (
            <p className={``}>{a}</p>
            )
        })}
        </div>
        </div>
    )
}

export default Offering