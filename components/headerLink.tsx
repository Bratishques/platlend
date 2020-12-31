import PropTypes from "prop-types";
const HeaderLink = ({ text, link }) => {
  return (
    <div className={`p-3`}>
      <a href={link} className={`header-link relative`}>
        {text}
      </a>
    </div>
  );
};

HeaderLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default HeaderLink;
