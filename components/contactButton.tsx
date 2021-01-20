import PropTypes from "prop-types"
const ContactButton = ({text, action}) => {
    return (
        <button 
        onClick={() => {
            action()
        }}
        className={`px-4.6r bg-button-orange border border-button-orange shadow-button-shadow filter-button-filter text-2.4r min-h-7.8r font-titles font-semibold w-full hover:bg-opacity-70 transition-all`}>
            {text}
        </button>
    )

}

ContactButton.propTypes = {
    text: PropTypes.string,
    action: PropTypes.func
}

export default ContactButton