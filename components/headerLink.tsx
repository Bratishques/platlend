const HeaderLink = ({text, link}) => {


    return (
        <div className={`p-3`}>

            <a href={link} className={`header-link relative`}>{text}</a>

        </div>
    )
}

export default HeaderLink