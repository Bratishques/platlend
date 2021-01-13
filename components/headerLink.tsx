import PropTypes from "prop-types";
import { useState } from "react";
const HeaderLink = ({ text, link, dropdown = "" }) => {
  const [isDropped, setIsDropped] = useState(false);
  return (
    <div className={`p-3 text-2xl text-white`}>
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
